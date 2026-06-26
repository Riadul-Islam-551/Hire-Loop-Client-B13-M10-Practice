import React from "react";
import { getApplicationByApplicantId } from "@/lib/api/applications";
import { loggedInUser } from "@/lib/core/session";
import { Briefcase, FolderOpen } from "@gravity-ui/icons";
import { Chip } from "@heroui/react";
import AppliedJobsTable from "./AppliedJobsTable";
import { getCompanyForJobApplications } from "@/lib/api/companies";

const ApplicationPage = async () => {
  const user = await loggedInUser();
  const applications = await getApplicationByApplicantId(user?.id);
  const applicationDetails = await Promise.all(
    applications.map(async (application) => {
      const company = await getCompanyForJobApplications(application.companyId);

      return {
        ...application,
        company,
      };
    }),
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen bg-background">
      {/* Telemetry Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 border-b border-divider pb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Briefcase className="text-primary w-6 h-6" />
            Application Pipeline
          </h1>
          <p className="text-default-500 text-sm mt-1">
            Track and monitor the status of all your submitted job applications.
          </p>
        </div>
        <Chip
          variant="flat"
          color="primary"
          className="font-medium px-3 h-8"
          startContent={<FolderOpen className="w-4 h-4 mr-1" />}
        >
          Total Applied: {applications.length}
        </Chip>
      </div>

      {/* Table Interface Segment */}
      {applications.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 border border-dashed border-divider rounded-xl bg-content1/50 backdrop-blur-md">
          <Briefcase className="w-12 h-12 text-default-300 mb-3" />
          <p className="text-default-500 font-medium">
            No job applications submitted yet.
          </p>
          <p className="text-default-400 text-xs mt-1">
            Your active interview pipeline will appear right here.
          </p>
        </div>
      ) : (
        <AppliedJobsTable applicationDetails={applicationDetails} />
      )}
    </div>
  );
};

export default ApplicationPage;
