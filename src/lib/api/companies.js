import { serverFetch } from "../core";

const baseUrl = process.env.NEXT_PUBLIC_URL;

export const findRecruiterCompany = async (recruiterID) => {
  return serverFetch(`/api/my/companies?recruiterId=${recruiterID}`);
};
