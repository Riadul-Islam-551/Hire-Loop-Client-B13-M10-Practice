import React from "react";
import CompanyProfileManager from "./CompanyProfileManager";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { findRecruiterCompany } from "@/lib/api/companies";

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  const user = session?.user;
  console.log(user);

  const company = await findRecruiterCompany(user?.id);
  console.log(company);

  return (
    <div>
      <CompanyProfileManager user={user} recruiterCompany={company}></CompanyProfileManager>
    </div>
  );
};

export default page;
