"use client";

import React from "react";
import {
  Form,
  TextField,
  Label,
  Input,
  FieldError,
  Description,
  Button,
  Card,
} from "@heroui/react";
import {
  Check,
  Xmark,
  Person,
  Envelope,
  Handset,
  Link as LinkIcon,
  FileText,
  Briefcase,
  Pin,
} from "@gravity-ui/icons";
import Image from "next/image";

const JobApply = ({ applicant, jobDetails }) => {
  // console.log("applicantData:", applicant);
  // console.log("jobDetailsData:", jobDetails);

  // Extract variables with fallbacks safely
  const jobTitle = jobDetails?.jobTitle || "Open Position";
  const companyName = jobDetails?.companyName || "Verified Partner";
  const location = jobDetails?.location || "Remote / On-site";

  // Form submit handler tracking requested plain object layout
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};

    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    // Append injection targets implicitly
    data.jobId = jobDetails?._id || "";
    data.applicantId = applicant?.id || "";
    data.companyID = jobDetails?.companyId || "";
    data.jobTitle = jobTitle;

    console.log(data);
  };

  return (
    <div className="pt-30  min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-default-50/50 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-6">
        {/* Job Context Header Sheet */}
        <Card className="border border-default-200/80 shadow-md bg-gradient-to-r from-background to-default-50/50 overflow-hidden">
          <Card.Description className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 w-full">
              {/* Premium Visual Corporate Identity Indicator */}
              <div className="w-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-primary/20 shrink-0">
                <Image
                  src={jobDetails?.companyLogo}
                  alt={jobDetails?.name}
                  width={200}
                  height={200}
                ></Image>
              </div>

              {/* Typography & Meta Tags */}
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-md">
                    Application Pipeline
                  </span>
                  {jobDetails?.jobType && (
                    <span className="text-[11px] font-bold tracking-wider uppercase text-default-600 bg-default-100 px-2 py-0.5 rounded-md">
                      {jobDetails.jobType}
                    </span>
                  )}
                </div>

                <h1 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight leading-none">
                  {jobTitle}
                </h1>

                {/* Localized Telemetry Subtitles */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-default-500 pt-0.5">
                  <span className="flex items-center gap-2 font-semibold text-default-700 bg-default-100/60 py-1 px-2.5 rounded-lg border border-default-200/40">
                    <Briefcase className="w-4 h-4 text-primary" />
                    {companyName}
                  </span>
                  <span className="flex items-center gap-1.5 text-default-500">
                    <Pin className="w-4 h-4 text-default-400" />
                    {location}
                  </span>
                </div>
              </div>
            </div>
          </Card.Description>
        </Card>

        {/* Main Interactive Form Body */}
        <Card className="border border-default-200 shadow-md bg-background">
          <Card.Description className="p-6 sm:p-8">
            <Form className="flex w-full flex-col gap-6" onSubmit={onSubmit}>
              {/* Field 1: Full Name */}
              <TextField
                isRequired
                name="fullName"
                type="text"
                validate={(value) => {
                  if (value.trim().length < 3) {
                    return "Please enter your full authentic name.";
                  }
                  return null;
                }}
              >
                <Label className="font-semibold text-default-700">
                  Full Name
                </Label>
                <Input
                  placeholder="John Doe"
                  startContent={
                    <Person className="text-default-400 w-4 h-4 mr-1" />
                  }
                />
                <FieldError className="text-xs font-medium text-danger mt-1" />
              </TextField>

              {/* Field 2: Email Address */}
              <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    return "Please enter a valid email address";
                  }
                  return null;
                }}
              >
                <Label className="font-semibold text-default-700">
                  Email Address
                </Label>
                <Input
                  placeholder="john@example.com"
                  startContent={
                    <Envelope className="text-default-400 w-4 h-4 mr-1" />
                  }
                />
                <FieldError className="text-xs font-medium text-danger mt-1" />
              </TextField>

              {/* Field 3: Contact Phone Number */}
              <TextField
                isRequired
                name="phone"
                type="tel"
                validate={(value) => {
                  if (value.length < 5) {
                    return "Please enter a valid contact phone string setup.";
                  }
                  return null;
                }}
              >
                <Label className="font-semibold text-default-700">
                  Phone Number
                </Label>
                <Input
                  placeholder="+1 (555) 000-0000"
                  startContent={
                    <Handset className="text-default-400 w-4 h-4 mr-1" />
                  }
                />
                <FieldError className="text-xs font-medium text-danger mt-1" />
              </TextField>

              {/* Field 4: Portfolio / GitHub URL link */}
              <TextField
                name="portfolioUrl"
                type="url"
                validate={(value) => {
                  if (
                    value &&
                    !value.startsWith("http://") &&
                    !value.startsWith("https://")
                  ) {
                    return "URL must begin with http:// or https://";
                  }
                  return null;
                }}
              >
                <Label className="font-semibold text-default-700">
                  Portfolio or LinkedIn URL
                </Label>
                <Input
                  placeholder="https://yourportfolio.com"
                  startContent={
                    <LinkIcon className="text-default-400 w-4 h-4 mr-1" />
                  }
                />
                <Description className="text-xs text-default-400">
                  Optional: Share a link to showcase your past products or code
                  repositories.
                </Description>
                <FieldError className="text-xs font-medium text-danger mt-1" />
              </TextField>

              {/* Field 5: Hosted Resume link */}
              <TextField
                isRequired
                name="resumeUrl"
                type="url"
                validate={(value) => {
                  if (!value) {
                    return "A link to your resume document is required.";
                  }
                  if (
                    !value.startsWith("http://") &&
                    !value.startsWith("https://")
                  ) {
                    return "Resume link must be a valid tracking URL starting with https://";
                  }
                  return null;
                }}
              >
                <Label className="font-semibold text-default-700">
                  Hosted Resume Link
                </Label>
                <Input
                  placeholder="https://drive.google.com/file/... or cloud link"
                  startContent={
                    <FileText className="text-default-400 w-4 h-4 mr-1" />
                  }
                />
                <Description className="text-xs text-default-400">
                  Please paste a publicly shareable cloud drive link or document
                  URL.
                </Description>
                <FieldError className="text-xs font-medium text-danger mt-1" />
              </TextField>

              {/* Functional CTA Button Block */}
              <div className="flex gap-3 pt-4 border-t border-default-100 justify-end">
                <Button
                  type="reset"
                  variant="flat"
                  color="default"
                  className="font-medium px-5"
                >
                  <Xmark className="w-4 h-4" />
                  Clear Form
                </Button>
                <Button
                  type="submit"
                  color="primary"
                  variant="solid"
                  className="font-semibold shadow-sm px-6"
                >
                  <Check className="w-4 h-4" />
                  Submit Application
                </Button>
              </div>
            </Form>
          </Card.Description>
        </Card>
      </div>
    </div>
  );
};

export default JobApply;
