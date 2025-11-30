import { loadStripe } from '@stripe/stripe-js';

// This will be populated by the user later
const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY || 'pk_test_your_key';

export const stripePromise = loadStripe(stripePublicKey);
