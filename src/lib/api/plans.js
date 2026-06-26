import { serverFetch } from "../core/server";

export const getPlanByUserPlan = (planId) => {
  return serverFetch(`/api/plans?plan_id=${planId}`);
};
