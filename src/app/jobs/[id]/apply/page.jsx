import { loggedInUser } from "@/lib/core/session";
import { redirect } from "next/navigation";
import React from "react";

const ApplyPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  const user = await loggedInUser();
  console.log(user);
  if (!user) {
    // console.log("no user ")
    redirect(`/signin?redirect=/jobs/${id}/apply`);
  }

  return <div className="mt-30">job apply page here</div>;
};

export default ApplyPage;
