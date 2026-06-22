import React from "react";
import { getLoggedInRecruiterCompany } from "@/lib/api/companies";
import Link from "next/link";
import { Button } from "@heroui/react";
import { CircleExclamation, Plus, House } from "@gravity-ui/icons";
import CreateJobForm from "./CreateJobForm";

const page = async () => {
  const recruiterCompany = await getLoggedInRecruiterCompany();
  console.log(recruiterCompany);

  // If recruiter does not have any registered company profile yet
  if (!recruiterCompany?._id) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center p-4">
        <div className="max-w-md w-full border border-default-200 shadow-lg bg-content1/60 backdrop-blur-md">
          <div className="flex flex-col items-center text-center p-8 gap-5">
            {/* Visual Callout Container */}
            <div className="h-16 w-16 rounded-full bg-warning-50 flex items-center justify-center text-warning shadow-inner">
              <House className="w-8 h-8" />
            </div>

            {/* Typography Stack */}
            <div className="space-y-2">
              <h1 className="text-xl font-bold text-foreground tracking-tight">
                No Registered Company Found
              </h1>
              <p className="text-sm text-default-500 leading-relaxed">
                Before you can publish your job circulars on HireLoop, you must
                establish a verified organizational profile.
              </p>
            </div>

            {/* Warning Alert Banner */}
            <div className="w-full flex items-center gap-3 bg-default-100 p-3 rounded-xl border border-default-200/60 text-left">
              <CircleExclamation className="text-default-400 shrink-0 w-4 h-4" />
              <span className="text-xs text-default-600 font-medium">
                Takes less than 2 minutes to get configured.
              </span>
            </div>

            {/* Action CTA */}
            <Button
              className="w-full font-semibold shadow-md transition-transform active:scale-[0.98]"
              endContent={<Plus className="w-4 h-4" />}
            >
              <Link href="/dashboard/recruiter/company" className="w-full ">Register Company</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Active Standard State
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Main Creation Interactive Sheet */}
      <div className="bg-background">
        <CreateJobForm recruiterCompany={recruiterCompany} />
      </div>
    </div>
  );
};

export default page;
