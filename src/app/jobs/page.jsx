import JobSearchFilter from "@/components/jobs/JobSearchFilter";
import { getAllJobs } from "@/lib/api/jobs";
import { Briefcase } from "@gravity-ui/icons";
import React from "react";

const JobPage = async () => {
  const allJobs = await getAllJobs();

  // Premium Complete Structural Failure Empty State View (Database Level)
  if (!allJobs || allJobs.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 max-w-xl mx-auto mt-20">
        <div className="w-full text-center p-10 rounded-3xl border border-default-200 bg-background/50 backdrop-blur-md shadow-xl flex flex-col items-center justify-center gap-4">
          <div className="p-4 rounded-2xl bg-default-100 text-default-400 border border-default-200/60">
            <Briefcase className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-default-900">
              No active postings
            </h3>
            <p className="text-default-500 text-sm max-w-sm mx-auto">
              There are no job circulars active at the moment. Please check back
              later or modify your search parameters.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-default-50/30 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dynamic Page Branding Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-default-200/60">
          <div className="space-y-1.5 text-left">
            <h1 className="text-3xl font-extrabold tracking-tight text-default-900 sm:text-4xl">
              Available Opportunities
            </h1>
            <p className="text-default-500 text-base">
              Discover your next career step across premium global verified
              teams.
            </p>
          </div>

          {/* Metadata Indicator Count */}
          <div className="text-xs font-semibold uppercase tracking-wider text-default-400 bg-default-100 border border-default-200 px-3 py-1.5 rounded-full w-fit">
            {allJobs.length}{" "}
            {allJobs.length === 1 ? "Job Listing" : "Total Listings"}
          </div>
        </div>

        {/* Client Search and Responsive Filter Component Layer */}
        <JobSearchFilter allJobs={allJobs} />
      </div>
    </main>
  );
};

export default JobPage;
