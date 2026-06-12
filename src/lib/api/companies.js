import { serverFetch } from "../core/server";
import { loggedInUser } from "../core/session";

export const getLoggedInRecruiterCompany = async () => {
  const recruiter = await loggedInUser();
  console.log(recruiter)
  return serverFetch(`/api/my/companies?recruiterId=${recruiter?.id}`);
};
