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
} from "@heroui/react";
import { div } from "motion/react-client";

export default function CreateJobForm() {
  const mockCompanyData = {
    companyName: "Creative IT",
    companyId: "comp_9081273948123_x",
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};

    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    data.companyName = mockCompanyData.companyName;
    data.companyId = mockCompanyData.companyId;

    console.log("Job Vacancy Submitted Data:", data);
    alert(
      `Vacancy created successfully with:\n ${JSON.stringify(data, null, 2)}`,
    );
  };


  return (
    <div className="w-full p-3 ">
        <div className="max-w-4xl mx-auto my-12 p-6 sm:p-8 bg-content1 border border-default-100 dark:border-default-800 rounded-2xl shadow-sm">
      {/* Form Header */}
      <div className="mb-8 pb-6 border-b border-default-100 dark:border-default-800">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Briefcase className="text-primary w-6 h-6" /> Create Job Vacancy
        </h2>
        <p className="border border-blue-400 rounded-xl p-2 my-2 ">
          For {mockCompanyData.comp}
        </p>
        <p className="text-sm text-default-500 mt-1">
          Fill out the details below to dispatch a professional circular onto
          the HireLoop feed.
        </p>
      </div>

      {/* Main Structural Form Wrapper */}
      <Form
        className="flex flex-col gap-6"
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
            <Label className="flex items-center gap-1.5 font-medium mb-1 text-sm text-default-700">
              <Briefcase className="w-4 h-4 text-default-400" /> Job Title
            </Label>
            <Input placeholder="e.g. Senior Full-Stack Engineer" />
            <FieldError className="text-xs text-danger mt-1" />
          </TextField>

          <div className="flex flex-col">
            <Select className="w-full" placeholder="Select one">
              <Label className="font-medium mb-1  text-sm text-default-700">
                Job Category
              </Label>
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item
                    id="software-development"
                    textValue="software development"
                  >
                    Software Development
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item
                    id="design-creative"
                    textValue="design & creative"
                  >
                    Design & Creative
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item
                    id="marketing-sales"
                    textValue="marketing & sales"
                  >
                    Marketing & Sales
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item
                    id="product-management"
                    textValue="product management"
                  >
                    Product Management
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item
                    id="data-science-analytics"
                    textValue="data science & analytics"
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
            {/* <Label className="flex items-center gap-1.5 font-medium mb-1 text-sm text-default-700">
              <Thunderbolt className="w-4 h-4 text-default-400" /> Job Type
            </Label> */}
            {/* <Select
              isRequired
              name="jobType"
              placeholder="Select commitment type"
              className="w-full"
            >
              <Select.Popover>
                <ListBox>
                  {jobTypes.map((type) => (
                    <ListBox.Item key={type.key} value={type.key}>
                      {type.label}
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>
            </Select> */}
            <Select className="w-full" placeholder="Select one">
              <Label className="font-medium mb-1  text-sm text-default-700">
                Job Type
              </Label>
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="full-time" textValue="full time">
                    Full-time
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="part-time" textValue="part time">
                    Part-time
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="contractual" textValue="contractual">
                    Contractual
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="internship" textValue="internship">
                    Internship
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="remote" textValue="remote">
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
              if (!value.trim()) return "Salary structure details are required";
              return null;
            }}
          >
            <Label className="flex items-center gap-1.5 font-medium mb-1 text-sm text-default-700">
              <FileDollar className="w-4 h-4 text-default-400" /> Salary Range
            </Label>
            <Input placeholder="e.g. $80,000 - $110,000 / yearly" />
            <FieldError className="text-xs text-danger mt-1" />
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
            <Label className="flex items-center gap-1.5 font-medium mb-1 text-sm text-default-700">
              <Pin className="w-4 h-4 text-default-400" /> Location
            </Label>
            <Input placeholder="e.g. San Francisco, CA or Remote" />
            <FieldError className="text-xs text-danger mt-1" />
          </TextField>

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
            <Label className="flex items-center gap-1.5 font-medium mb-1 text-sm text-default-700">
              <Calendar className="w-4 h-4 text-default-400" /> Application
              Deadline
            </Label>
            <Input type="date" />
            <FieldError className="text-xs text-danger mt-1" />
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
          <Label className="flex items-center gap-1.5 font-medium mb-1 text-sm text-default-700">
            <Text className="w-4 h-4 text-default-400" /> Job Description
          </Label>
          <Input
            placeholder="Provide a high-level summary overview of this vacancy role..."
            className="min-h-[70px]"
          />
          <FieldError className="text-xs text-danger mt-1" />
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
          <Label className="flex items-center gap-1.5 font-medium mb-1 text-sm text-default-700">
            <Bulb className="w-4 h-4 text-default-400" /> Key Responsibilities
          </Label>
          <Input
            placeholder="e.g. Maintain APIs, Lead design scrums, Monitor server performance"
            className="min-h-[60px]"
          />
          <Description className="text-xs text-default-400 mt-1">
            Separate tasks cleanly using commas to make it distinct.
          </Description>
          <FieldError className="text-xs text-danger mt-1" />
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
          <Label className="flex items-center gap-1.5 font-medium mb-1 text-sm text-default-700">
            <ShieldCheck className="w-4 h-4 text-default-400" /> Requirements &
            Qualifications
          </Label>
          <Input
            placeholder="e.g. 3+ years experience in Next.js, Node.js, MongoDB database experience"
            className="min-h-[60px]"
          />
          <FieldError className="text-xs text-danger mt-1" />
        </TextField>

        {/* Row 7: Perks / Benefits */}
        <TextField name="benefits" className="w-full">
          <Label className="flex items-center gap-1.5 font-medium mb-1 text-sm text-default-700">
            <Heart className="w-4 h-4 text-default-400" /> Offerings & Benefits
          </Label>
          <Input
            placeholder="e.g. Health insurance, Unlimited PTO, Annual performance bonus equity"
            className="min-h-[60px]"
          />
          <Description className="text-xs text-default-400 mt-1">
            Optional field to increase candidate conversion.
          </Description>
          <FieldError className="text-xs text-danger mt-1" />
        </TextField>

        {/* Form CTA Actions Block */}
        <div className="flex gap-3 justify-end mt-4 pt-4 border-t border-default-100 dark:border-default-800">
          <Button
            type="reset"
            variant="flat"
            color="default"
            className="font-medium"
          >
            <Xmark className="w-4 h-4" /> Cancel/Reset
          </Button>
          <Button
            type="submit"
            variant="solid"
            color="primary"
            className="font-semibold shadow-sm"
          >
            <Check className="w-4 h-4" /> Publish Circular
          </Button>
        </div>
      </Form>
    </div>
    </div>
  );
}
