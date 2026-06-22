import { serverFetch } from "../core/server";

export const getApplicationByApplicantId = (id) => {
  return serverFetch(`/api/applications?applicantId=${id}`);
};
