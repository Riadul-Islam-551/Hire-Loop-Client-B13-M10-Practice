import { loggedInUser } from "@/lib/core/session";
import { redirect } from "next/navigation";
import React from "react";
import JobApply from "./JobApply";
import { getJobById } from "@/lib/api/jobs";
import { getApplicationByApplicantId } from "@/lib/api/applications";
import { Card, Button, Chip, ProgressBar } from "@heroui/react";
import { ShieldExclamation, CrownDiamond, Briefcase } from "@gravity-ui/icons";
import Link from "next/link";

const ApplyPage = async ({ params }) => {
  const { id } = await params;
  const user = await loggedInUser();

  if (!user) {
    redirect(`/signin?redirect=/jobs/${id}/apply`);
  }

  // Fallback View 1: If User is not registered as a Job Seeker
  if (user?.role !== "seeker") {
    return (
      <div className="min-h-[80vh] w-full flex justify-center items-center px-4">
        <Card className="max-w-md w-full border-small border-default-100 shadow-xl bg-content1/60 backdrop-blur-md">
          <Card.Description className="flex flex-col items-center text-center p-8 gap-5">
            <span className="p-4 bg-danger-50 rounded-full text-danger animate-pulse">
              <ShieldExclamation size={36} />
            </span>
            <span className="space-y-2">
              <h1 className="text-xl font-bold tracking-tight">
                Access Restricted
              </h1>
              <p className="text-sm text-default-500 leading-relaxed">
                Applying for jobs is exclusively available for{" "}
                <span className="font-semibold text-foreground">
                  Job Seekers
                </span>
                . Please sign in with a candidate account to proceed.
              </p>
            </span>
            <Button
              as={NextLink}
              href="/signin"
              color="primary"
              variant="flat"
              className="w-full font-medium mt-2"
            >
              Switch Account
            </Button>
          </Card.Description>
        </Card>
      </div>
    );
  }

  const plans = {
    name: "free",
    maxApplicationPerMonth: 3,
  };

  const jobDetails = await getJobById(id);
  const applicationDetails = await getApplicationByApplicantId(user?.id);
  const usedApplications = applicationDetails?.length || 0;
  const applicationsRemaining = Math.max(
    0,
    plans.maxApplicationPerMonth - usedApplications,
  );

  // Fallback View 2: Reached application limits
  if (usedApplications >= plans.maxApplicationPerMonth) {
    return (
      <div className="min-h-[85vh] w-full flex justify-center items-center px-4 py-12">
        <Card className="max-w-xl w-full border-small border-default-100 shadow-2xl bg-content1/50 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-warning-500/10 rounded-full blur-2xl -mr-10 -mt-10" />
          <Card.Description className="flex flex-col items-center text-center p-10 gap-6">
            <span className="p-4 bg-warning-50 text-warning rounded-2xl shadow-sm">
              <CrownDiamond size={40} />
            </span>
            <span className="space-y-2 max-w-sm">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Monthly Limit Reached
              </h2>
              <p className="text-sm text-default-500 leading-relaxed">
                You have deployed all{" "}
                <span className="font-semibold text-warning">
                  {plans.maxApplicationPerMonth} available
                </span>{" "}
                monthly application tokens under your current Tier.
              </p>
            </span>

            <div className="w-full bg-default-50 border border-default-100 p-4 rounded-xl flex items-center justify-between text-left text-xs gap-4 my-2">
              <div>
                <p className="font-semibold text-default-700">
                  Need more submission volume?
                </p>
                <p className="text-default-400">
                  Unlock infinite application loops & recruiter highlights.
                </p>
              </div>
              <Chip
                size="sm"
                color="warning"
                variant="flat"
                className="font-bold uppercase tracking-wider"
              >
                Premium
              </Chip>
            </div>

            <Button
              color="warning"
              className="w-full font-bold shadow-md bg-gradient-to-r from-amber-500 to-orange-500 text-white transition-transform active:scale-[0.98]"
              size="lg"
            >
              <Link href={"/price"} className="w-full">
                Upgrade Plan Now
              </Link>
            </Button>
          </Card.Description>
        </Card>
      </div>
    );
  }

  // Standard Interactive View
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Telemetry Sheet */}
      <Card className="border-small border-default-100 shadow-sm bg-content1/40 backdrop-blur-sm">
        <Card.Description className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <span className="flex items-center gap-4">
            <span className="p-3 bg-primary-50 text-primary rounded-xl hidden sm:block">
              <Briefcase size={24} />
            </span>
            <span>
              <span className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-default-400 font-medium tracking-wider uppercase">
                  Application Workspace
                </span>
                <Chip
                  size="sm"
                  color="primary"
                  variant="flat"
                  className="font-semibold text-[10px] capitalize px-1"
                >
                  {plans.name} plan
                </Chip>
              </span>
              <h1 className="text-xl font-bold text-default-800 mt-0.5">
                Applying for {jobDetails?.jobTitle || "Selected Role"}
              </h1>
              <p className="text-xs text-default-500">
                at {jobDetails?.companyName || "Verified Organization"}
              </p>
            </span>
          </span>

          {/* Meter Usage */}
          <span className="w-full md:w-64 space-y-1.5 border-t md:border-t-0 md:border-l border-default-100 pt-4 md:pt-0 md:pl-6">
            <span className="flex justify-between text-xs">
              <span className="text-default-500 font-medium">
                Monthly Usage
              </span>
              <span className="text-default-700 font-bold">
                {usedApplications} / {plans.maxApplicationPerMonth} Used
              </span>
            </span>
            <ProgressBar
              aria-label="Application allowance indicator"
              size="sm"
              value={(usedApplications / plans.maxApplicationPerMonth) * 100}
              color={applicationsRemaining === 1 ? "warning" : "primary"}
              className="max-w-md"
            />
            <p className="text-[11px] text-default-400">
              {applicationsRemaining} left before limit threshold reset.
            </p>
          </span>
        </Card.Description>
      </Card>

      {/* Main Core Application Package Form Injection */}
      <div className="bg-content1 rounded-2xl border border-default-100 shadow-md p-1 sm:p-2">
        <JobApply applicant={user} jobDetails={jobDetails} />
      </div>
    </main>
  );
};

export default ApplyPage;
