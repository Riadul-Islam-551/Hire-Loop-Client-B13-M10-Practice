import React from "react";
import CompanyProfileManager from "./CompanyProfileManager";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import {
  findRecruiterCompany,
  getLoggedInRecruiterCompany,
} from "@/lib/api/companies";
import { loggedInUser } from "@/lib/core/session";

const page = async () => {
  // const session = await auth.api.getSession({
  //   headers: await headers(), // you need to pass the headers object.
  // });

  // const user = session?.user;
  // console.log(user);
  const recruiter = await loggedInUser();
  console.log(recruiter)

  const company = await getLoggedInRecruiterCompany();
  console.log(company);

  return (
    <div>
      <CompanyProfileManager
        recruiter={recruiter}
        recruiterCompany={company}
      ></CompanyProfileManager>
    </div>
  );
};

export default page;
