import React from "react";
import Image from "next/image";
import { getJobById } from "@/lib/api/jobs";
import { Button, Card, Chip } from "@heroui/react";
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
        <p className="text-muted-foreground text-lg mb-4">Job details could not be retrieved.</p>
        <Button as={Link} href="/jobs" color="primary" variant="flat">
          Back to Jobs
        </Button>
      </div>
    );
  }

  const {
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
    <div className="min-h-screen bg-content2/10 pt-18  pb-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Back Navigation Link */}
        <div className="flex items-center">
          <Link 
            href="/jobs" 
            className="group flex items-center gap-2 text-sm font-medium text-default-500 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Job Postings
          </Link>
        </div>

        {/* --- Header Panel --- */}
        <Card className="w-full border-none shadow-sm bg-background p-6 md:p-8">
          <Card.Description className="p-0 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="relative w-20 h-20 rounded-2xl bg-content2 overflow-hidden flex items-center justify-center p-2 border border-default-100 shadow-inner">
                {companyLogo ? (
                  <Image
                    src={companyLogo}
                    alt={`${companyName} logo`}
                    fill
                    className="object-contain p-2"
                    priority
                  />
                ) : (
                  <Briefcase className="w-8 h-8 text-default-400" />
                )}
              </div>
              <div className="space-y-1.5">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-default-900">
                  {jobTitle}
                </h1>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                  <span className="font-semibold text-primary hover:underline cursor-pointer">
                    {companyName}
                  </span>
                  <span className="text-default-300">•</span>
                  <span className="text-default-500 flex items-center gap-1">
                    <Pin className="w-3.5 h-3.5 text-default-400" /> {location}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              <Chip variant="flat" color="primary" size="md" className="font-medium px-2">
                {jobType}
              </Chip>
              <Chip variant="flat" color="secondary" size="md" className="font-medium px-2">
                {jobCategory}
              </Chip>
            </div>
          </Card.Description>
        </Card>

        {/* --- Main Content Architecture --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Descriptive Context */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Job Description Card */}
            <Card className="border-none shadow-sm bg-background p-6 md:p-8">
              <Card.Description className="p-0 space-y-6">
                <div className="flex items-center gap-2 pb-3 border-b border-default-100">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-bold text-default-800">Job Description</h2>
                </div>
                <p className="text-default-600 leading-relaxed text-sm md:text-base">
                  {jobDescription}
                </p>
              </Card.Description>
            </Card>

            {/* Core Responsibilities Card */}
            <Card className="border-none shadow-sm bg-background p-6 md:p-8">
              <Card.Description className="p-0 space-y-6">
                <div className="flex items-center gap-2 pb-3 border-b border-default-100">
                  <Layers className="w-5 h-5 text-secondary" />
                  <h2 className="text-xl font-bold text-default-800">Key Responsibilities</h2>
                </div>
                <ul className="space-y-3.5">
                  {formattedResponsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm md:text-base text-default-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card.Description>
            </Card>

            {/* Requirements & Perks Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Requirements Card */}
              <Card className="border-none shadow-sm bg-background p-6">
                <Card.Description className="p-0 space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-default-100">
                    <ShieldCheck className="w-5 h-5 text-success" />
                    <h3 className="text-lg font-bold text-default-800">Requirements</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {formattedRequirements.map((req, index) => (
                      <li key={index} className="flex items-center gap-2.5 text-sm text-default-600">
                        <Check className="w-4 h-4 text-success flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </Card.Description>
              </Card>

              {/* Benefits Card */}
              <Card className="border-none shadow-sm bg-background p-6">
                <Card.Description className="p-0 space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-default-100">
                    <Sparkles className="w-5 h-5 text-warning" />
                    <h3 className="text-lg font-bold text-default-800">Benefits & Perks</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {formattedBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2.5 text-sm text-default-600">
                        <Check className="w-4 h-4 text-warning flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Card.Description>
              </Card>
            </div>
          </div>

          {/* Right Column: Sidebar Actions & Summary Metrics */}
          <div className="space-y-6">
            
            {/* Quick Summary Grid Card */}
            <Card className="border-none shadow-sm bg-background p-6">
              <Card.Description className="p-0 space-y-6">
                <h3 className="text-lg font-bold text-default-800 pb-3 border-b border-default-100">
                  Job Summary
                </h3>

                <div className="space-y-4">
                  {/* Metric Row 1: Compensation */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
                      <FileDollar className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <p className="text-xs text-default-400 font-medium uppercase tracking-wider">Salary Range</p>
                      <p className="text-sm font-semibold text-default-700">${Number(salaryRange).toLocaleString()} / year</p>
                    </div>
                  </div>

                  {/* Metric Row 2: Location */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Pin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-default-400 font-medium uppercase tracking-wider">Location</p>
                      <p className="text-sm font-semibold text-default-700">{location}</p>
                    </div>
                  </div>

                  {/* Metric Row 3: Deadline */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-danger/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-danger" />
                    </div>
                    <div>
                      <p className="text-xs text-default-400 font-medium uppercase tracking-wider">Application Deadline</p>
                      <p className="text-sm font-semibold text-default-700">
                        {new Date(applicationDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Description>
            </Card>

            {/* Direct Action Card Block */}
            <Card className="border-none shadow-sm bg-gradient-to-br from-primary to-primary-600 text-primary-foreground p-6">
              <Card.Description className="p-0 space-y-4">
                <h4 className="text-lg font-bold">Interested in this role?</h4>
                <p className="text-xs opacity-90 leading-relaxed">
                  Make sure your portfolio and profile details are complete before submitting your application package to {companyName}.
                </p>
                <Button 
                  size="lg" 
                  className="w-full text-primary font-bold shadow-md hover:bg-default-50 transition-transform active:scale-[0.98] mt-2"
                >
                  Apply For Job
                </Button>
              </Card.Description>
            </Card>

          </div>
        </div>

      </div>
    </div>
  );
};

export default JobDetailsPage;