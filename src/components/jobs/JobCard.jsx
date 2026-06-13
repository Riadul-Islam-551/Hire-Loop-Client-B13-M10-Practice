"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  Avatar,
  Chip,
  Button,
} from "@heroui/react";
import {
  Briefcase,
  Pin,
  FileDollar,
  Calendar,
  ArrowUpRight,
} from "@gravity-ui/icons";
import Link from "next/link";

export const JobCard = ({ jobData }) => {
  // console.log(jobData);

  if (!jobData) return null;

  const {
    jobTitle,
    jobCategory,
    jobType,
    salaryRange,
    location,
    applicationDate,
    jobDescription,
    companyName,
    companyLogo,
  } = jobData;

  // Format date to a readable corporate version (e.g., Jun 21, 2026)
  const formattedDate = new Date(applicationDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Card
      className="border border-default-100 bg-background/60 backdrop-blur-md hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out w-full"
      isPressable
    >
      {/* Card Header: Company Identity & Badges */}
      <CardHeader className="flex flex-col gap-4 items-start p-5 pb-3">
        <div className="flex justify-between items-start w-full">
          <div className="flex gap-3 items-center">
            {/* <Avatar alt={`${companyName} logo`} src={companyLogo} /> */}
            <Avatar>
              <Avatar.Image alt={`${companyName} logo`} src={companyLogo} />
              <Avatar.Fallback>
                <Briefcase className="w-5 h-5 text-default-400" />
              </Avatar.Fallback>
            </Avatar>
            <div className="flex flex-col text-left">
              <h4 className="text-small font-medium text-default-500 leading-tight">
                {companyName}
              </h4>
              <h3 className="text-xl font-bold text-default-900 tracking-tight mt-0.5">
                {jobTitle}
              </h3>
            </div>
          </div>
        </div>

        {/* Categorization Badges */}
        <div className="flex flex-wrap gap-2 pt-1">
          <Chip
            size="sm"
            variant="flat"
            color="primary"
            className="font-medium"
          >
            {jobType}
          </Chip>
          <Chip
            size="sm"
            variant="flat"
            color="secondary"
            className="font-medium"
          >
            {jobCategory}
          </Chip>
        </div>
      </CardHeader>

      {/* Card Body: Info Fields & Dynamic Context */}
      <Card.Content className="px-5 py-2 flex flex-col gap-4">
        <p className="text-default-600 text-sm line-clamp-2 min-h-10 text-left">
          {jobDescription}
        </p>

        {/* Detailed Meta Grid Layout */}
        <div className="grid grid-cols-2 gap-y-3 gap-x-2 bg-default-50/50 rounded-xl p-3 border border-default-100 text-small text-default-600">
          <div className="flex items-center gap-2">
            <Pin className="text-default-400 w-4 h-4 shrink-0" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <FileDollar className="text-default-400 w-4 h-4 shrink-0" />
            <span className="truncate font-semibold text-success-600">
              ${Number(salaryRange).toLocaleString()}/yr
            </span>
          </div>
          <div className="flex items-center gap-2 col-span-2 border-t border-default-100/60 pt-2 mt-1">
            <Calendar className="text-default-400 w-4 h-4 shrink-0" />
            <span className="truncate text-tiny">
              Deadline:{" "}
              <span className="font-medium text-danger-500">
                {formattedDate}
              </span>
            </span>
          </div>
        </div>
      </Card.Content>

      {/* Card Footer: Interactive Target Actions */}
      <CardFooter className="px-5 py-4 pt-2 w-full">
        <Button className={"w-full"}>
          <Link
            href={`/jobs/${jobData._id}`}
            variant="bordered"
            size="sm"
            className="font-medium border-default-200 text-default-700 hover:bg-default-100 "
          >
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
