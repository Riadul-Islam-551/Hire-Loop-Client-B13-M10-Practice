import { getCompanyJobs } from "@/lib/api/jobs";
import React from "react";
import { Table } from "@heroui/react";

const page = async () => {
  const companyId = "abcd_1234"; //todo next
  const jobs = await getCompanyJobs(companyId);
  console.log("company jobs", jobs);

  const {jobTitle, status, location, } = jobs;

  return (
    <div>
      <h1>Recruiter job </h1>
      <section className="mt-9 mx-4 ">
        <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="min-w-150">
            <Table.Header>
              <Table.Column isRowHeader>Job Title</Table.Column>
              <Table.Column>Type / Category</Table.Column>
              <Table.Column>Location</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Actions</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Kate Moore</Table.Cell>
                <Table.Cell>CEO</Table.Cell>
                <Table.Cell>CEO</Table.Cell>
                <Table.Cell>Active</Table.Cell>
                <Table.Cell>kate@acme.com</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
      </section>
    </div>
  );
};

export default page;
