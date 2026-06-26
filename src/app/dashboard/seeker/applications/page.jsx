import { getApplicationByApplicantId } from "@/lib/api/applications";
import { loggedInUser } from "@/lib/core/session";
import React from "react";

const ApplicationPage = async () => {
  const user = await loggedInUser();
  const applications = await getApplicationByApplicantId(user?.id);
  return <div>Application: {applications.length}</div>;
};

export default ApplicationPage;
