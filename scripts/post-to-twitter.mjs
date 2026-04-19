import fs from 'fs';
import path from 'path';
import { TwitterApi } from 'twitter-api-v2';

// Ensure working from correct directory
const __dirname = path.resolve();
const recipesPath = path.join(__dirname, 'src', 'data', 'recipes.ts');

const TWITTER_BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;
const TWITTER_APP_KEY = process.env.TWITTER_APP_KEY;
const TWITTER_APP_SECRET = process.env.TWITTER_APP_SECRET;
const TWITTER_ACCESS_TOKEN = process.env.TWITTER_ACCESS_TOKEN;
const TWITTER_ACCESS_SECRET = process.env.TWITTER_ACCESS_SECRET;

if (!TWITTER_APP_KEY || !TWITTER_APP_SECRET || !TWITTER_ACCESS_TOKEN || !TWITTER_ACCESS_SECRET) {
  console.error("❌ Missing Twitter API Keys. Skipping Twitter post.");
  process.exit(0); // Exit cleanly so the Action doesn't fail
}

async function postToTwitter() {
  try {
    // 1. Extract the latest recipe from worldRecipes.ts
    const content = fs.readFileSync(recipesPath, 'utf8');
    
    // Simple parser: extract the contents of the array
    // Since worldRecipes is an array of objects, we'll try to execute it in a clean Sandbox or regex 
    // Because we just appended it, let's extract all the `id: '...', title: '...'` using regex to find the last one.
    
    const idMatches = [...content.matchAll(/id:\s*'([^']+)'/g)];
    const titleMatches = [...content.matchAll(/title:\s*'([^']+)'/g)];
    const countryMatches = [...content.matchAll(/country:\s*'([^']+)'/g)];
    const emojiMatches = [...content.matchAll(/emoji:\s*'([^']+)'/g)];
    
    if (idMatches.length === 0 || titleMatches.length === 0) {
      throw new Error("Could not parse latest recipe from file");
    }

    // Get the last matched recipe
    const latestId = idMatches[idMatches.length - 1][1];
    const latestTitle = titleMatches[titleMatches.length - 1][1];
    const latestCountry = countryMatches.length >= idMatches.length ? countryMatches[idMatches.length - 1][1] : '';
    const latestEmoji = emojiMatches.length >= idMatches.length ? emojiMatches[idMatches.length - 1][1] : '👨‍🍳';

    console.log(`🗞️ Preparing tweet for: ${latestTitle} (${latestId})`);

    // 2. Format the Tweet
    // Max 280 chars
    const url = `https://fantasticfood.in/recipe/${latestId}`;
    const tweetText = `👨‍🍳 Chef Aika's Recipe of the Day! ${latestEmoji}

Learn how to make authentic ${latestTitle}. Perfect for home cooking! 🍽️

Compare live grocery prices for these ingredients before you cook today:
🔗 ${url}

#${latestTitle.replace(/\s+/g, '')} #Recipe #FantasticFood`;

    console.log("Tweet content:\n", tweetText);

    // 3. Connect to Twitter API v2
    const client = new TwitterApi({
      appKey: TWITTER_APP_KEY,
      appSecret: TWITTER_APP_SECRET,
      accessToken: TWITTER_ACCESS_TOKEN,
      accessSecret: TWITTER_ACCESS_SECRET,
    });

    const rwClient = client.readWrite;

    // 4. Send Tweet
    const response = await rwClient.v2.tweet(tweetText);
    console.log(`✅ Tweet successfully published! ID: ${response.data.id}`);

  } catch (error) {
    console.error("❌ Failed to post tweet:", error);
    // Exit cleanly so the GitHub Action doesn't fail just because of a Twitter issue.
    // The recipe was already generated & committed successfully above.
    process.exit(0);
  }
}

postToTwitter();
