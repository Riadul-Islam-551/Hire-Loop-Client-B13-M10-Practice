import React from "react";
import { Card, CardBody } from "@heroui/react";
import { File, Persons, ThunderboltFill, ShieldCheck } from "@gravity-ui/icons"; // Using crisp modern stroke icons matching your design wireframe

const TotalPost = () => {
  const steps = [
    {
      id: "01",
      icon: <File className="w-6 h-6 text-primary" />,
      title: "Total Job Post",
      description: "48",
      bgColor: "bg-primary-50 dark:bg-primary-900/20",
    },
    {
      id: "02",
      icon: <Persons className="w-6 h-6 text-success" />,
      title: "Total Application",
      description: "1,284",
      bgColor: "bg-success-50 dark:bg-success-900/20",
    },
    {
      id: "03",
      icon: <ThunderboltFill className="w-6 h-6 text-warning" />,
      title: "Active Jobs",
      description: "18",
      bgColor: "bg-warning-50 dark:bg-warning-900/20",
    },
    {
      id: "04",
      icon: <ShieldCheck className="w-6 h-6 text-danger" />,
      title: "Job Closed",
      description: "32",
      bgColor: "bg-danger-50 dark:bg-danger-900/20",
    },
  ];

  return (
    <div className="container mx-auto p-4 ">
      {/* 4-Column Step Display Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <Card
            key={index}
            isHoverable
            className="border border-default-100 dark:border-default-800 shadow-sm bg-content1/70 backdrop-blur-md z-10"
          >
            <Card.Content className="flex flex-col items-start gap-2 ">
              {/* Upper Badge Layer Containing Icon and Index Step Indicator */}
              <div className="w-full flex items-center justify-between">
                <div
                  className={`p-3 rounded-xl ${step.bgColor} flex items-center justify-center`}
                >
                  {step.icon}
                </div>
              </div>

              {/* Main Content Body */}
              <div className="mt-2">
                <h3 className="text-sm lg:text-md  font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-xs  lg:text-sm text-default-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Card.Content>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TotalPost;
