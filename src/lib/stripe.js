import "server-only";

import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const PLANS_PRICE_ID = {
  "seeker_pro": "price_1TlM8lQY5oh6NvVpCgqsGlUW",
  "seeker_elite": "price_1TlUEdQY5oh6NvVpdMXyEOw3",
  "recruiter_enterprise": "price_1TlUFpQY5oh6NvVpquBIM5QM",
  "recruiter_global": "price_1TlUGbQY5oh6NvVpoNWk6Pxg",
};
