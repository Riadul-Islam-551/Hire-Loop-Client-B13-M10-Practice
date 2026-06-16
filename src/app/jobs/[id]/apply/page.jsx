import { loggedInUser } from "@/lib/core/session";
import { redirect } from "next/navigation";
import React from "react";

const ApplyPage = async ({ params }) => {
  const { id } = await params;
//   console.log(id);
  const user = await loggedInUser();
//   console.log(user);
  if (!user) {
    // console.log("no user ")
    redirect(`/signin?redirect=/jobs/${id}/apply`);
  }

  if (user?.role !== "seeker") {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <p>
          Apply the job is only available for the{" "}
          <span className="font-bold">Job Seeker. </span>Please Sign in with job
          seeker account for apply the job.
        </p>
      </div>
    );
  }

  return <div className="mt-30">job apply page here</div>;
};

export default ApplyPage;
