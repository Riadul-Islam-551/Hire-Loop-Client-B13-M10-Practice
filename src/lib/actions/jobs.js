"use server";

import { serverPost } from "../core/server";


export const createJob = async (newJobData) => {
  return serverPost("/api/jobs", newJobData);
};
