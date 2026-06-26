"use client";

import React from "react";
import { Table, Chip, Button } from "@heroui/react";
import { Eye, Calendar, FileDollar, Pin } from "@gravity-ui/icons";
import Link from "next/link";
import Image from "next/image";

export default function AppliedJobsTable({ applicationDetails }) {
  console.log("Applications", applicationDetails);

  // Dynamic color mapper for pipeline evaluation status
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "approved":
      case "selected":
        return "success";
      case "rejected":
        return "danger";
      case "pending":
      case "reviewing":
      default:
        return "warning";
    }
  };

  return (
    <Table className="shadow-sm border border-divider rounded-xl overflow-hidden bg-content1">
      <Table.ScrollContainer>
        <Table.Content aria-label="Applied jobs status tracker table">
          <Table.Header>
            <Table.Column className="text-default-500 font-semibold bg-default-100/50">
              Company & Role
            </Table.Column>
            <Table.Column className="text-default-500 font-semibold bg-default-100/50">
              Location
            </Table.Column>
            <Table.Column className="text-default-500 font-semibold bg-default-100/50">
              Salary
            </Table.Column>
            <Table.Column className="text-default-500 font-semibold bg-default-100/50">
              Applied Date
            </Table.Column>
            <Table.Column className="text-default-500 font-semibold bg-default-100/50">
              Status
            </Table.Column>
            <Table.Column className="text-default-500 font-semibold bg-default-100/50 text-right">
              Actions
            </Table.Column>
          </Table.Header>

          <Table.Body>
            {applicationDetails.map((application) => {
              const statusLabel = application.status || "Pending";

              return (
                <Table.Row
                  key={application._id}
                  className="hover:bg-default-50/50 transition-colors border-b border-divider last:border-0"
                >
                  {/* Company & Role Cell */}
                  <Table.Cell>
                    <div className="flex items-center gap-3 py-1">
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-divider bg-white flex items-center justify-center p-1 flex-shrink-0">
                        {application.company[0].logoUrl ? (
                          <Image
                            src={application.company[0].logoUrl}
                            alt={application.company[0].name || "Company"}
                            fill
                            className="object-contain p-1"
                          />
                        ) : (
                          <span className="text-default-400 font-bold text-xs uppercase">
                            {application.company[0].name?.substring(0, 2)}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-foreground text-sm leading-tight">
                          {application.jobTitle || "Job Role"}
                        </span>
                        <span className="text-xs text-default-400 mt-0.5">
                          {application.company[0].name || "Corporate Partner"}
                        </span>
                      </div>
                    </div>
                  </Table.Cell>

                  {/* Location Cell */}
                  <Table.Cell>
                    <div className="flex items-center gap-1.5 text-sm text-default-600">
                      <Pin className="w-3.5 h-3.5 text-default-400" />
                      <span>{application.company[0].location || "Remote"}</span>
                    </div>
                  </Table.Cell>

                  {/* Salary Cell */}
                  <Table.Cell>
                    <div className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                      <FileDollar className="w-3.5 h-3.5 text-success" />
                      <span>
                        {application.salaryRange
                          ? `$${Number(application.salaryRange).toLocaleString()}/yr`
                          : "Negotiable"}
                      </span>
                    </div>
                  </Table.Cell>

                  {/* Applied Date Cell */}
                  <Table.Cell>
                    <div className="flex items-center gap-1.5 text-xs text-default-500">
                      <Calendar className="w-3.5 h-3.5 text-default-400" />
                      <span>
                        {application.createdAt
                          ? new Date(application.createdAt).toLocaleDateString(
                              undefined,
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              },
                            )
                          : "Recent"}
                      </span>
                    </div>
                  </Table.Cell>

                  {/* Status Badge Cell */}
                  <Table.Cell>
                    <Chip
                      size="sm"
                      variant="flat"
                      color={getStatusColor(statusLabel)}
                      className="capitalize font-medium px-2.5"
                    >
                      {statusLabel}
                    </Chip>
                  </Table.Cell>

                  {/* Actions Link Cell */}
                  <Table.Cell className="text-right">
                    <Button
                      as={Link}
                      // href={`/jobs/${application._id || application.id}`}
                      size="sm"
                      variant="light"
                      color="primary"
                      isIconOnly
                      className="hover:bg-primary/10 transition-colors"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}
