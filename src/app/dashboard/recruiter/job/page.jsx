import { getCompanyJobs } from "@/lib/api/jobs";
import React from "react";

const page = async () => {
  const companyId = "abcd_1234"; //todo next
  const jobs = await getCompanyJobs(companyId);
  console.log("company jobs", jobs);

  return (
    <div>
      <h1>Recruiter job </h1>
    </div>
  );
};

export default page;
