import { serverFetch } from "../core/server";
import { loggedInUser } from "../core/session";

export const getLoggedInRecruiterCompany = async () => {
  const recruiter = await loggedInUser();
  return serverFetch(`/api/my/companies?recruiterId=${recruiter?.id}`);
};
