import React from "react";
import Image from "next/image";
import { getJobById } from "@/lib/api/jobs";
import { Button, Card, CardHeader, Chip } from "@heroui/react";
import {
  Briefcase,
  Pin,
  FileDollar,
  Calendar,
  Layers,
  Sparkles,
  ShieldCheck,
  Check,
  ArrowLeft
} from "@gravity-ui/icons";
import Link from "next/link";

const JobDetailsPage = async ({ params }) => {
  const { id } = await params;
  const jobDetails = await getJobById(id);

  // Fallback state if no job details exist
  if (!jobDetails) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
        <p className="text-default-500 text-lg mb-4 font-medium">Job details could not be retrieved.</p>
        <Button as={Link} href="/jobs" color="primary" variant="flat" className="font-semibold">
          Back to Jobs
        </Button>
      </div>
    );
  }

  const {
    _id,
    jobTitle,
    jobCategory,
    jobType,
    salaryRange,
    location,
    applicationDate,
    jobDescription,
    responsibilities,
    requirements,
    benefits,
    companyName,
    companyLogo,
  } = jobDetails;

  // Formatting strings into clean scannable arrays
  const formattedRequirements = requirements?.split(",").map((req) => req.trim()) || [];
  const formattedResponsibilities = responsibilities?.split(",").map((res) => res.trim()) || [];
  const formattedBenefits = benefits?.split(",").map((ben) => ben.trim()) || [];

  return (
    <div className="min-h-screen bg-default-50/50 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Back Navigation Link */}
        <div className="flex items-center">
          <Link 
            href="/jobs" 
            className="group flex items-center gap-2 text-sm font-semibold text-default-500 hover:text-primary transition-all duration-300 ease-in-out"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1.5" />
            Back to Job Postings
          </Link>
        </div>

        {/* --- Header Panel --- */}
        <Card className="w-full border border-default-100 bg-background p-2 md:p-4 shadow-sm" radius="lg">
          <Card.Content className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-4">
            <div className="flex items-center gap-5">
              <div className="relative w-20 h-20 rounded-2xl bg-default-100 overflow-hidden flex items-center justify-center p-2 border border-default-200/60 shadow-sm transition-transform hover:scale-105 duration-300">
                {companyLogo ? (
                  <Image
                    src={companyLogo}
                    alt={`${companyName} logo`}
                    fill
                    className="object-contain p-2.5"
                    priority
                  />
                ) : (
                  <Briefcase className="w-8 h-8 text-default-400" />
                )}
              </div>
              <div className="space-y-1">
                <h1 className="text-2xl md:text-3xl font-black tracking-tight text-default-900">
                  {jobTitle}
                </h1>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                  <span className="font-bold text-primary hover:underline transition-all cursor-pointer">
                    {companyName}
                  </span>
                  <span className="text-default-300">•</span>
                  <span className="text-default-500 font-medium flex items-center gap-1.5">
                    <Pin className="w-3.5 h-3.5 text-default-400" /> {location}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 w-full md:w-auto">
              <Chip variant="flat" color="primary" radius="md" size="md" className="font-semibold px-2 border border-primary-200/30">
                {jobType}
              </Chip>
              <Chip variant="flat" color="secondary" radius="md" size="md" className="font-semibold px-2 border border-secondary-200/30">
                {jobCategory}
              </Chip>
            </div>
          </Card.Content>
        </Card>

        {/* --- Main Content Architecture --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* Left Column: Descriptive Context */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Job Description Card */}
            <Card className="border border-default-100 bg-background shadow-sm" radius="lg">
              <Card.Content className="p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-2.5 pb-3 border-b border-default-100">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-bold text-default-800 tracking-tight">Job Description</h2>
                </div>
                <p className="text-default-600 leading-relaxed text-sm md:text-base font-normal whitespace-pre-line">
                  {jobDescription}
                </p>
              </Card.Content>
            </Card>

            {/* Core Responsibilities Card */}
            <Card className="border border-default-100 bg-background shadow-sm" radius="lg">
              <Card.Content className="p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-2.5 pb-3 border-b border-default-100">
                  <Layers className="w-5 h-5 text-secondary" />
                  <h2 className="text-xl font-bold text-default-800 tracking-tight">Key Responsibilities</h2>
                </div>
                <ul className="space-y-3">
                  {formattedResponsibilities.map((item, index) => (
                    <li key={index} className="group flex items-start gap-3.5 text-sm md:text-base text-default-600 transition-colors duration-200 hover:text-default-900">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 transition-transform duration-300 group-hover:scale-125" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card.Content>
            </Card>

            {/* Requirements & Perks Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Requirements Card */}
              <Card className="border border-default-100 bg-background shadow-sm" radius="lg">
                <Card.Content className="p-6 space-y-4">
                  <div className="flex items-center gap-2.5 pb-2.5 border-b border-default-100">
                    <ShieldCheck className="w-5 h-5 text-success" />
                    <h3 className="text-lg font-bold text-default-800 tracking-tight">Requirements</h3>
                  </div>
                  <ul className="space-y-3">
                    {formattedRequirements.map((req, index) => (
                      <li key={index} className="group flex items-center gap-3 text-sm text-default-600 transition-colors duration-200 hover:text-default-900">
                        <div className="p-0.5 rounded-md bg-success-50 text-success transition-transform duration-300 group-hover:rotate-12">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-medium">{req}</span>
                      </li>
                    ))}
                  </ul>
                </Card.Content>
              </Card>

              {/* Benefits Card */}
              <Card className="border border-default-100 bg-background shadow-sm" radius="lg">
                <Card.Content className="p-6 space-y-4">
                  <div className="flex items-center gap-2.5 pb-2.5 border-b border-default-100">
                    <Sparkles className="w-5 h-5 text-warning" />
                    <h3 className="text-lg font-bold text-default-800 tracking-tight">Benefits & Perks</h3>
                  </div>
                  <ul className="space-y-3">
                    {formattedBenefits.map((benefit, index) => (
                      <li key={index} className="group flex items-center gap-3 text-sm text-default-600 transition-colors duration-200 hover:text-default-900">
                        <div className="p-0.5 rounded-md bg-warning-50 text-warning transition-transform duration-300 group-hover:rotate-12">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Card.Content>
              </Card>
            </div>
          </div>

          {/* Right Column: Sidebar Actions & Summary Metrics */}
          <div className="space-y-6 lg:sticky lg:top-24">
            
            {/* Quick Summary Grid Card */}
            <Card className="border border-default-100 bg-background shadow-sm" radius="lg">
              <Card.Content className="p-6 space-y-5">
                <h3 className="text-lg font-bold text-default-800 pb-3 border-b border-default-100 tracking-tight">
                  Job Summary
                </h3>

                <div className="space-y-4.5">
                  {/* Metric Row 1: Compensation */}
                  <div className="group flex items-center gap-4 transition-transform duration-300 hover:translate-x-1">
                    <div className="w-11 h-11 rounded-xl bg-success-50 text-success flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-success-100">
                      <FileDollar className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-default-400 font-bold uppercase tracking-wider">Salary Range</p>
                      <p className="text-sm font-bold text-default-700 mt-0.5">${Number(salaryRange).toLocaleString()} / year</p>
                    </div>
                  </div>

                  {/* Metric Row 2: Location */}
                  <div className="group flex items-center gap-4 transition-transform duration-300 hover:translate-x-1">
                    <div className="w-11 h-11 rounded-xl bg-primary-50 text-primary flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-primary-100">
                      <Pin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-default-400 font-bold uppercase tracking-wider">Location</p>
                      <p className="text-sm font-bold text-default-700 mt-0.5">{location}</p>
                    </div>
                  </div>

                  {/* Metric Row 3: Deadline */}
                  <div className="group flex items-center gap-4 transition-transform duration-300 hover:translate-x-1">
                    <div className="w-11 h-11 rounded-xl bg-danger-50 text-danger flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-danger-100">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-default-400 font-bold uppercase tracking-wider">Application Deadline</p>
                      <p className="text-sm font-bold text-default-700 mt-0.5">
                        {new Date(applicationDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Content>
            </Card>

            {/* Direct Action Card Block */}
            <Card className="border-none shadow-md bg-gradient-to-br from-primary-600 to-primary-700 text-white" radius="lg">
              <Card.Content className="p-6 space-y-4">
                <h4 className="text-lg font-bold tracking-tight">Interested in this role?</h4>
                <p className="text-xs opacity-85 leading-relaxed font-medium">
                  Make sure your portfolio and profile details are complete before submitting your application package to {companyName}.
                </p>
                <Link href={`/jobs/${_id}/apply`} 
                  size="lg" 
                  className="w-full text-center bg-green-500 p-3 rounded-full  text-primary font-bold shadow-sm transition-all duration-300 hover:bg-default-100 active:scale-[0.97] mt-1.5"
                  radius="md"
                >
                  Apply For Job
                </Link>
              </Card.Content>
            </Card>

          </div>
        </div>

      </div>
    </div>
  );
};

export default JobDetailsPage;