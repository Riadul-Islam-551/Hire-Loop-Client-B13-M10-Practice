import React from "react";
import CreateJobForm from "./CreateJobForm";
import { getLoggedInRecruiterCompany } from "@/lib/api/companies";

const page = async () => {
  const recruiterCompany = await getLoggedInRecruiterCompany();
  return (
    <div>
      <CreateJobForm recruiterCompany={recruiterCompany}></CreateJobForm>
    </div>
  );
};

export default page;
