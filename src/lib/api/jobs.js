import { serverFetch } from "../core/server";

const baseUrl = process.env.NEXT_PUBLIC_URL;

export const getAllJobs = async () => {
  return serverFetch(`/api/jobs`);
};

export const getJobById = async (id) => {
  return serverFetch(`/api/jobs/${id}`);
};

export const getCompanyJobs = async (companyId, status = "active") => {
  return serverFetch(`/api/jobs?companyId=${companyId}&status=${status}`);
};
