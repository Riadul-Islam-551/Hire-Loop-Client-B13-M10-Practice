"use server";

import { serverPost } from "../core/server";

export const submitSubscriptionsData = async (subInfo) => {
  return serverPost("/api/subscriptions", subInfo);
};
