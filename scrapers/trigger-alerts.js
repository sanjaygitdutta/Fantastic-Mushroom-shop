const { createClient } = require('@supabase/supabase-js');
const nodemailer = require('nodemailer');
require('dotenv').config({ path: '../.env.local' });
require('dotenv').config({ path: '../.env' });

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
// We need the service role key to read user emails from auth.users and bypass RLS
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

const gmailUser = process.env.GMAIL_USER || 'sanjoydutta1200@gmail.com';
const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing Supabase Credentials.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function triggerAlerts() {
  console.log("🚀 Checking Price Alerts...");

  if (!gmailAppPassword) {
    console.warn("⚠️ GMAIL_APP_PASSWORD is not set. Running in DRY-RUN mode (no emails will be sent).");
  }

  // 1. Fetch all active alerts
  const { data: alerts, error: alertsErr } = await supabase
    .from('price_alerts')
    .select('*');

  if (alertsErr) {
    console.error("❌ Error fetching price alerts. You might need SUPABASE_SERVICE_ROLE_KEY to bypass RLS.", alertsErr);
    process.exit(1);
  }

  if (!alerts || alerts.length === 0) {
    console.log("✅ No active price alerts found. Done.");
    return;
  }

  console.log(`📌 Found ${alerts.length} active alerts to check.`);

  // 2. Fetch live prices for the items people are watching
  const itemsToWatch = [...new Set(alerts.map(a => a.item_query))];
  const { data: livePrices, error: pricesErr } = await supabase
    .from('live_prices')
    .select('*')
    .in('item_name', itemsToWatch);

  if (pricesErr) {
    console.error("❌ Error fetching live prices:", pricesErr);
    process.exit(1);
  }

  // Group live prices by item for fast lookup
  const currentBestPrices = {};
  for (const priceRow of livePrices) {
    const itemName = priceRow.item_name;
    if (!currentBestPrices[itemName] || priceRow.price < currentBestPrices[itemName].price) {
      currentBestPrices[itemName] = priceRow;
    }
  }

  const triggeredAlerts = [];

  // 3. Compare prices
  for (const alert of alerts) {
    const bestLive = currentBestPrices[alert.item_query];
    
    if (bestLive && bestLive.price <= alert.target_price) {
      console.log(`🚨 ALERT MATCH: ${alert.item_query} dropped to ₹${bestLive.price} (Target: ₹${alert.target_price})`);
      triggeredAlerts.push({
        alert,
        bestLive
      });
    }
  }

  if (triggeredAlerts.length === 0) {
    console.log("✅ No prices have dropped below targets today. Done.");
    return;
  }

  // 4. Set up Mailer if configured
  let transporter = null;
  if (gmailAppPassword) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword
      }
    });
  }

  // 5. Fetch user emails and notify
  for (const match of triggeredAlerts) {
    const { alert, bestLive } = match;

    // Fetch user email using Admin API (requires service_role key)
    const { data: { user }, error: userErr } = await supabase.auth.admin.getUserById(alert.user_id);
    
    if (userErr || !user || !user.email) {
      console.warn(`⚠️ Could not fetch email for user ${alert.user_id}. Are you using SUPABASE_SERVICE_ROLE_KEY? Skipping email.`);
      continue;
    }

    const emailHtml = `
      <h2>🚨 Price Drop Alert!</h2>
      <p>Great news! The price of <strong>${alert.item_query.toUpperCase()}</strong> has dropped to <strong>₹${bestLive.price}</strong> on <strong>${bestLive.platform_id.toUpperCase()}</strong>.</p>
      <p>Your target price was ₹${alert.target_price}.</p>
      <p><a href="https://www.fantasticfood.in/compare?q=${alert.item_query}">Click here to view the deal and buy now!</a></p>
      <hr />
      <p><small>You are receiving this because you set a price alert on Fantastic Food.</small></p>
    `;

    if (transporter) {
      try {
        await transporter.sendMail({
          from: `"Fantastic Food Alerts" <${gmailUser}>`,
          to: user.email,
          subject: `📉 Price Drop: ${alert.item_query} is now ₹${bestLive.price}!`,
          html: emailHtml
        });
        console.log(`📧 Email sent successfully to ${user.email}`);

        // Delete the alert so we don't spam them again tomorrow
        await supabase.from('price_alerts').delete().eq('id', alert.id);
        console.log(`🗑️ Deleted triggered alert for ${alert.item_query} (User: ${user.email})`);

      } catch (mailErr) {
        console.error(`❌ Failed to send email to ${user.email}:`, mailErr.message);
      }
    } else {
      console.log(`[DRY RUN] Would send email to ${user.email} and delete alert ${alert.id}`);
    }
  }

  console.log("🎉 Alert processing complete!");
}

triggerAlerts().catch(console.error);
