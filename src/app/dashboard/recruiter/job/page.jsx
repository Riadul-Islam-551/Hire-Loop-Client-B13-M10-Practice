import { getCompanyJobs } from "@/lib/api/jobs";
import React from "react";
import { Table, Button } from "@heroui/react";
import { Eye, Pencil, TrashBin, Briefcase, Pin, Layers } from "@gravity-ui/icons";

const Page = async () => {
  const companyId = "abcd_1234"; // TODO: Dynamically fetch next
  const jobs = await getCompanyJobs(companyId) || [];

  // Helper formatting map for status badges
  const statusStyles = {
    active: "bg-success-50 text-success dark:bg-success-950/30 border-success-200/50 dark:border-success-800/30",
    inactive: "bg-default-100 text-default-600 dark:bg-default-800/50 border-default-200 dark:border-default-700/50",
    pending: "bg-warning-50 text-warning dark:bg-warning-950/30 border-warning-200/50 dark:border-warning-800/30",
  };

  return (
    <div className="w-full min-h-screen bg-default-50/30 dark:bg-black py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-default-100 dark:border-default-800/60 pb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight flex items-center gap-3">
              <div className="p-2.5 bg-primary-50 dark:bg-primary-900/20 rounded-xl text-primary">
                <Briefcase className="w-6 h-6" />
              </div>
              Vacancy Listings
            </h1>
            <p className="text-sm text-default-500 mt-1 max-w-xl">
              Monitor, Refine or Review live corporate circular circulars running on the HireLoop grid.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-default-400 bg-default-100 dark:bg-default-800/40 px-3 py-1.5 rounded-xl self-start sm:self-center">
            Total Vacancy: <span className="text-foreground font-bold">{jobs.length}</span>
          </div>
        </div>

        {/* Table/Data Area Wrapper */}
        <div className="bg-content1 border border-default-200/60 dark:border-default-100/10 rounded-2xl shadow-sm overflow-hidden transition-all duration-300">
          <Table aria-label="Company Vacancies" removeWrapper>
            <Table.ScrollContainer>
              <Table.Content className="min-w-200">
                <Table.Header>
                  <Table.Column isRowHeader className="bg-default-100/50 dark:bg-default-800/30 text-default-600 font-bold uppercase text-xs tracking-wider py-4 pl-6">
                    Job Title
                  </Table.Column>
                  <Table.Column className="bg-default-100/50 dark:bg-default-800/30 text-default-600 font-bold uppercase text-xs tracking-wider py-4">
                    Type & Category
                  </Table.Column>
                  <Table.Column className="bg-default-100/50 dark:bg-default-800/30 text-default-600 font-bold uppercase text-xs tracking-wider py-4">
                    Location
                  </Table.Column>
                  <Table.Column className="bg-default-100/50 dark:bg-default-800/30 text-default-600 font-bold uppercase text-xs tracking-wider py-4">
                    Status
                  </Table.Column>
                  <Table.Column align="center" className="bg-default-100/50 dark:bg-default-800/30 text-default-600 font-bold uppercase text-xs tracking-wider py-4 pr-6 w-32">
                    Actions
                  </Table.Column>
                </Table.Header>

                <Table.Body emptyContent={"No job dynamic listings created yet for this profile."}>
                  {jobs.map((job, ind) => {
                    const currentStatus = (job.status || "active").toLowerCase();
                    return (
                      <Table.Row 
                        key={job._id || ind} 
                        className="border-b border-default-100 dark:border-default-800/50 last:border-0 hover:bg-default-50/50 dark:hover:bg-default-800/20 transition-colors duration-150"
                      >
                        {/* Title Row */}
                        <Table.Cell className="py-4 pl-6">
                          <div className="flex flex-col gap-0.5">
                            <span className="font-semibold text-foreground text-sm tracking-tight hover:text-primary cursor-pointer transition-colors">
                              {job.jobTitle}
                            </span>
                          </div>
                        </Table.Cell>

                        {/* Type & Category Tags */}
                        <Table.Cell className="py-4">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-xs font-medium px-2 py-0.5 bg-primary-50 dark:bg-primary-900/20 text-primary rounded-md capitalize">
                              {job.jobType?.replace("-", " ") || "Full-Time"}
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs text-default-500">
                              <Layers className="w-3 h-3 text-default-400" />
                              <span className="capitalize">{job.jobCategory?.replace("-", " ") || "General"}</span>
                            </span>
                          </div>
                        </Table.Cell>

                        {/* Location */}
                        <Table.Cell className="py-4 text-sm text-default-600 font-medium">
                          <div className="flex items-center gap-1.5">
                            <Pin className="w-3.5 h-3.5 text-default-400" />
                            <span>{job.location || "Remote"}</span>
                          </div>
                        </Table.Cell>

                        {/* Badged Status */}
                        <Table.Cell className="py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border capitalize tracking-wide ${statusStyles[currentStatus] || statusStyles.active}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 animate-pulse" />
                            {currentStatus}
                          </span>
                        </Table.Cell>

                        {/* Micro-Interaction Action Buttons */}
                        <Table.Cell className="py-4 pr-6">
                          <div className="flex items-center justify-center gap-1">
                            <Button 
                              isIconOnly 
                              size="sm" 
                              variant="light" 
                              color="default" 
                              className="text-default-500 hover:text-foreground rounded-lg transition-colors"
                              title="View Circular"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button 
                              isIconOnly 
                              size="sm" 
                              variant="light" 
                              color="primary"
                              className="rounded-lg transition-colors"
                              title="Edit Details"
                            >
                              <Pencil className="w-4 h-4" />
                            </Button>
                            <Button 
                              isIconOnly 
                              size="sm" 
                              variant="light" 
                              color="danger"
                              className="rounded-lg transition-colors"
                              title="Remove Post"
                            >
                              <TrashBin className="w-4 h-4" />
                            </Button>
                          </div>
                        </Table.Cell>
                      </Table.Row>
                    );
                  })}
                </Table.Body>
              </Table.Content>
            </Table.ScrollContainer>
          </Table>
        </div>

      </div>
    </div>
  );
};

export default Page;