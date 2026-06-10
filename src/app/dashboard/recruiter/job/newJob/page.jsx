"use client";

import React from "react";
import {
  Check,
  Xmark,
  Briefcase,
  Layers,
  Thunderbolt,
  FileDollar,
  Pin,
  Calendar,
  Text,
  Bulb,
  ShieldCheck,
  Heart,
} from "@gravity-ui/icons";
import {
  Form,
  TextField,
  Label,
  Input,
  FieldError,
  Description,
  Button,
  Select,
  ListBox,
  toast,
} from "@heroui/react";
import { createJob } from "@/lib/actions/jobs";
import { redirect } from "next/navigation";

export default function CreateJobForm() {
  const mockCompanyData = {
    companyName: "Creative IT",
    companyId: "abcd_1234",
    status: "active",
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    data.companyName = mockCompanyData.companyName;
    data.companyId = mockCompanyData.companyId;
    data.status = mockCompanyData.status;

    // console.log("Job Vacancy Submitted Data:", data);
    // alert(
    //   `Vacancy created successfully with:\n ${JSON.stringify(data, null, 2)}`,
    // );
    console.log(data);

    const res = await createJob(data);
    console.log(res);
    if (res.insertedId) {
      toast.success("Create Job Successfully");
      e.target.reset();
      redirect("/dashboard/recruiter");
    }
  };

  return (
    <div className="w-full min-h-screen bg-default-50/50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-content1 border border-default-200/60 dark:border-default-100/10 rounded-3xl shadow-xl shadow-default-100/20 dark:shadow-none p-6 sm:p-10 transition-all duration-300">
        {/* Form Header */}
        <div className="mb-10 pb-6 border-b border-default-100 dark:border-default-800 flex flex-col justify-start items-start  gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight flex items-center gap-3">
              <div className="p-2.5 bg-primary-50 dark:bg-primary-900/30 rounded-xl text-primary shadow-sm">
                <Briefcase className="w-6 h-6" />
              </div>
              Create Job Vacancy
            </h2>
            <p className="text-sm text-default-500 mt-2 max-w-xl leading-relaxed">
              Fill out the details below to dispatch a premium professional
              circular onto the HireLoop corporate network feed.
            </p>
          </div>

          {/* Active Company Metadata Badge */}
          <div className="self-start flex items-center gap-2 px-4 py-2 bg-default-100 dark:bg-default-800/60 border border-default-200/50 dark:border-default-700/30 rounded-2xl">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-xs font-semibold text-default-500 uppercase tracking-wider">
              Recruiter:
            </span>
            <span className="text-xs font-bold text-foreground">
              {mockCompanyData.companyName}
            </span>
          </div>
        </div>

        {/* Main Structural Form Wrapper */}
        <Form
          className="flex flex-col gap-8"
          render={(props) => <form {...props} data-custom="vacancy-hub" />}
          onSubmit={onSubmit}
        >
          {/* Row 1: Job Title & Job Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextField
              isRequired
              name="jobTitle"
              type="text"
              className="w-full"
              validate={(value) => {
                if (value.trim().length < 5) {
                  return "Job Title must be at least 5 characters long";
                }
                return null;
              }}
            >
              <Label className="flex items-center gap-2 font-semibold mb-2 text-xs uppercase tracking-wider text-default-600">
                Job Title
              </Label>
              <div className="relative flex items-center">
                <Briefcase className="absolute left-4 w-4 h-4 text-default-400 z-10 pointer-events-none" />
                <Input
                  placeholder="e.g. Senior Full-Stack Engineer"
                  className="w-full pl-9"
                />
              </div>
              <FieldError className="text-xs text-danger font-medium mt-1.5" />
            </TextField>

            <div className="flex flex-col">
              <Label className="flex items-center gap-2 font-semibold mb-2 text-xs uppercase tracking-wider text-default-600">
                Job Category
              </Label>
              <Select
                name="jobCategory"
                className="w-full"
                placeholder="Select professional category"
                startContent={
                  <Layers className="w-4 h-4 text-default-400 mr-1" />
                }
              >
                <Select.Trigger className="min-h-10 bg-default-100 hover:bg-default-200/70 dark:bg-default-800/50 dark:hover:bg-default-700/50 border border-transparent rounded-xl transition-all duration-200">
                  <Select.Value className="text-sm" />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover className="border border-default-200/80 dark:border-default-700/50 bg-content1 shadow-xl rounded-xl">
                  <ListBox className="p-1">
                    <ListBox.Item
                      id="Software Development"
                      textValue="Software Development"
                      className="rounded-lg text-sm"
                    >
                      Software Development
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item
                      id="Design Creative"
                      textValue="Design & Creative"
                      className="rounded-lg text-sm"
                    >
                      Design & Creative
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item
                      id="Marketing Sales"
                      textValue="Marketing & Sales"
                      className="rounded-lg text-sm"
                    >
                      Marketing & Sales
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item
                      id="Product Management"
                      textValue="Product Management"
                      className="rounded-lg text-sm"
                    >
                      Product Management
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item
                      id="Data Science & Analytics"
                      textValue="Data Science & Analytics"
                      className="rounded-lg text-sm"
                    >
                      Data Science & Analytics
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>
          </div>

          {/* Row 2: Job Type & Salary Range */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <Label className="flex items-center gap-2 font-semibold mb-2 text-xs uppercase tracking-wider text-default-600">
                Job Type
              </Label>
              <Select
                name="jobType"
                className="w-full"
                placeholder="Select commitment type"
                startContent={
                  <Thunderbolt className="w-4 h-4 text-default-400 mr-1" />
                }
              >
                <Select.Trigger className="min-h-10 bg-default-100 hover:bg-default-200/70 dark:bg-default-800/50 dark:hover:bg-default-700/50 border border-transparent rounded-xl transition-all duration-200">
                  <Select.Value className="text-sm" />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover className="border border-default-200/80 dark:border-default-700/50 bg-content1 shadow-xl rounded-xl">
                  <ListBox className="p-1">
                    <ListBox.Item
                      id="Full Time"
                      textValue="Full Time"
                      className="rounded-lg text-sm"
                    >
                      Full-time
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item
                      id="Part Time"
                      textValue="Part Time"
                      className="rounded-lg text-sm"
                    >
                      Part-time
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item
                      id="Contractual"
                      textValue="Contractual"
                      className="rounded-lg text-sm"
                    >
                      Contractual
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item
                      id="Internship"
                      textValue="Internship"
                      className="rounded-lg text-sm"
                    >
                      Internship
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item
                      id="Remote"
                      textValue="Remote"
                      className="rounded-lg text-sm"
                    >
                      Remote
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            <TextField
              isRequired
              name="salaryRange"
              type="text"
              className="w-full"
              validate={(value) => {
                if (!value.trim())
                  return "Salary structure details are required";
                return null;
              }}
            >
              <Label className="flex items-center gap-2 font-semibold mb-2 text-xs uppercase tracking-wider text-default-600">
                Salary Range
              </Label>
              <div className="relative flex items-center">
                <FileDollar className="absolute left-4 w-4 h-4 text-default-400 z-10 pointer-events-none" />
                <Input
                  placeholder="e.g. $80,000 - $110,000 / yearly"
                  className="w-full pl-9"
                />
              </div>
              <FieldError className="text-xs text-danger font-medium mt-1.5" />
            </TextField>
          </div>

          {/* Row 3: Location & Application Deadline Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextField
              isRequired
              name="location"
              type="text"
              className="w-full"
              validate={(value) => {
                if (!value.trim()) return "Specify location or label as Remote";
                return null;
              }}
            >
              <Label className="flex items-center gap-2 font-semibold mb-2 text-xs uppercase tracking-wider text-default-600">
                Location
              </Label>
              <div className="relative flex items-center">
                <Pin className="absolute left-4 w-4 h-4 text-default-400 z-10 pointer-events-none" />
                <Input
                  placeholder="e.g. San Francisco, CA or Remote"
                  className="w-full pl-9"
                />
              </div>
              <FieldError className="text-xs text-danger font-medium mt-1.5" />
            </TextField>
            {/* deadline  */}
            <TextField
              isRequired
              name="applicationDate"
              type="date"
              className="w-full"
              validate={(value) => {
                const selectedDate = new Date(value);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                if (selectedDate < today) {
                  return "Application deadline cannot be set in the past";
                }
                return null;
              }}
            >
              <Label className="flex items-center gap-2 font-semibold mb-2 text-xs uppercase tracking-wider text-default-600">
                Application Deadline
              </Label>
              <div className="relative flex items-center">
                <Calendar className="absolute left-4 w-4 h-4 text-default-400 z-10 pointer-events-none" />
                <Input type="date" className="w-full pl-9" />
              </div>
              <FieldError className="text-xs text-danger font-medium mt-1.5" />
            </TextField>
          </div>

          {/* Row 4: Job Description (Large Input Field) */}
          <TextField
            isRequired
            name="jobDescription"
            className="w-full"
            validate={(value) => {
              if (value.trim().length < 20) {
                return "Please write a slightly detailed job overview (min 20 characters)";
              }
              return null;
            }}
          >
            <Label className="flex items-center gap-2 font-semibold mb-2 text-xs uppercase tracking-wider text-default-600">
              Job Description
            </Label>
            <div className="relative flex items-start">
              <Text className="absolute left-4 top-3.5 w-4 h-4 text-default-400 z-10 pointer-events-none" />
              <Input
                placeholder="Provide a high-level summary overview of this vacancy role..."
                className="w-full pl-7 min-h-22.5 pt-1 items-start"
              />
            </div>
            <FieldError className="text-xs text-danger font-medium mt-1.5" />
          </TextField>

          {/* Row 5: Responsibilities */}
          <TextField
            isRequired
            name="responsibilities"
            className="w-full"
            validate={(value) => {
              if (!value.trim())
                return "Responsibilities are required field elements";
              return null;
            }}
          >
            <Label className="flex items-center gap-2 font-semibold mb-2 text-xs uppercase tracking-wider text-default-600">
              Key Responsibilities
            </Label>
            <div className="relative flex items-start">
              <Bulb className="absolute left-4 top-3.5 w-4 h-4 text-default-400 z-10 pointer-events-none" />
              <Input
                placeholder="e.g. Maintain APIs, Lead design scrums, Monitor server performance"
                className="w-full pl-7 min-h-20 pt-1 items-start"
              />
            </div>
            <Description className="text-xs text-default-400 dark:text-default-500 mt-2 flex items-center gap-1.5 px-1">
              <span className="w-1 h-1 rounded-full bg-default-400" /> Separate
              tasks cleanly using commas to make it distinct.
            </Description>
            <FieldError className="text-xs text-danger font-medium mt-1.5" />
          </TextField>

          {/* Row 6: Requirements */}
          <TextField
            isRequired
            name="requirements"
            className="w-full"
            validate={(value) => {
              if (!value.trim())
                return "Core candidate criteria prerequisites are mandatory";
              return null;
            }}
          >
            <Label className="flex items-center gap-2 font-semibold mb-2 text-xs uppercase tracking-wider text-default-600">
              Requirements & Qualifications
            </Label>
            <div className="relative flex items-start">
              <ShieldCheck className="absolute left-4 top-3.5 w-4 h-4 text-default-400 z-10 pointer-events-none" />
              <Input
                placeholder="e.g. 3+ years experience in Next.js, Node.js, MongoDB database experience"
                className="w-full pl-7 min-h-20 pt-1 items-start"
              />
            </div>
            <FieldError className="text-xs text-danger font-medium mt-1.5" />
          </TextField>

          {/* Row 7: Perks / Benefits */}
          <TextField name="benefits" className="w-full">
            <Label className="flex items-center gap-2 font-semibold mb-2 text-xs uppercase tracking-wider text-default-600">
              Offerings & Benefits
            </Label>
            <div className="relative flex items-start">
              <Heart className="absolute left-4 top-3.5 w-4 h-4 text-default-400 z-10 pointer-events-none" />
              <Input
                placeholder="e.g. Health insurance, Unlimited PTO, Annual performance bonus equity"
                className="w-full pl-7 min-h-20 pt-1 items-start"
              />
            </div>
            <Description className="text-xs text-default-400 dark:text-default-500 mt-2 flex items-center gap-1.5 px-1">
              <span className="w-1 h-1 rounded-full bg-default-400" /> Optional
              field to increase candidate conversion rates.
            </Description>
            <FieldError className="text-xs text-danger font-medium mt-1.5" />
          </TextField>

          {/* Form CTA Actions Block */}
          <div className="flex flex-col sm:flex-row gap-3 justify-end mt-6 pt-6 border-t border-default-100 dark:border-default-800">
            <Button
              type="reset"
              variant="flat"
              color="default"
              className="font-medium px-5 h-11 rounded-xl text-default-600 hover:text-default-800 transition-all flex items-center justify-center gap-2Order"
            >
              <Xmark className="w-4 h-4" /> Cancel/Reset
            </Button>
            <Button
              type="submit"
              variant="solid"
              color="primary"
              className="font-semibold px-6 h-11 rounded-xl bg-primary shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4" /> Publish Circular
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
