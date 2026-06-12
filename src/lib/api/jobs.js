import { serverFetch } from "../core/server";

const baseUrl = process.env.NEXT_PUBLIC_URL;

export const getCompanyJobs = async (companyId, status = "active") => {
  return serverFetch(`/api/jobs?companyId=${companyId}&status=${status}`);
};
