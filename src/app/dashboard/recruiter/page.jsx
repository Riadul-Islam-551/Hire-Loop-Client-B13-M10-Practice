"use client";

import TotalPost from "@/components/TotalPost";
import { authClient } from "@/lib/auth-client";
import React from "react";

const RecruiterDashboardPage = () => {
  // get the user session
  const {
    data: session,
    isPending, //loading state
    error,
  } = authClient.useSession();

  const user = session?.user;
  console.log(user);

  return (
    <>
      {isPending === true ? (
        <div>Loading .... </div>
      ) : (
        <div className="p-4 ">
          <h1 className="font-semibold text-2xl ">
            Welcome Back {user?.name} !!
          </h1>
          <TotalPost></TotalPost>
        </div>
      )}
    </>
  );
};

export default RecruiterDashboardPage;
