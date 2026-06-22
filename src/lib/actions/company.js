"use server";

import { serverPost } from "../core/server";

// const baseUrl = process.env.NEXT_PUBLIC_URL;
export const createRecruiterCompany = async (newCompanyData) => {
  return serverPost("/api/companies", newCompanyData);
};
