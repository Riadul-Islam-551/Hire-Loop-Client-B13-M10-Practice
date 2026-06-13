"use client";

import React, { useState, useMemo } from "react";
import { Magnifier, Briefcase } from "@gravity-ui/icons";
import { JobCard } from "@/components/jobs/JobCard";

export default function JobSearchFilter({ allJobs = [] }) {
  // 1. Standard HTML form element primitive states (Strings)
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  // 2. Safely extract unique filter selections dynamically from your dataset
  const categories = useMemo(() => {
    const list = new Set(allJobs.map((j) => j.jobCategory).filter(Boolean));
    return ["all", ...Array.from(list)];
  }, [allJobs]);

  const jobTypes = useMemo(() => {
    const list = new Set(allJobs.map((j) => j.jobType).filter(Boolean));
    return ["all", ...Array.from(list)];
  }, [allJobs]);

  // 3. Simple, reliable primitive string data-matching arrays logic
  const filteredJobs = useMemo(() => {
    return allJobs.filter((job) => {
      const matchesSearch =
        !searchQuery ||
        job.jobTitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.companyName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.requirements?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        categoryFilter === "all" || job.jobCategory === categoryFilter;

      const matchesType = 
        typeFilter === "all" || job.jobType === typeFilter;

      return matchesSearch && matchesCategory && matchesType;
    });
  }, [allJobs, searchQuery, categoryFilter, typeFilter]);

  // 4. Reset handler
  const handleReset = () => {
    setSearchQuery("");
    setCategoryFilter("all");
    setTypeFilter("all");
  };

  return (
    <div className="space-y-8">
      {/* Search & Filter Section Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-background/60 backdrop-blur-md p-4 rounded-2xl border border-default-200/80 shadow-sm">
        
        {/* Search Input Box using standard html tag */}
        <div className="md:col-span-5 relative flex items-center">
          <span className="absolute left-3 text-default-400 pointer-events-none z-10">
            <Magnifier className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Search jobs, companies, skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-9 pr-4 text-sm text-default-900 bg-default-100/50 hover:bg-default-100 focus:bg-background border border-default-200 focus:border-primary rounded-xl outline-none transition-all duration-200"
          />
        </div>

        {/* Category Dropdown using native <select> tag */}
        <div className="md:col-span-3">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full h-10 px-3 text-sm text-default-900 bg-default-100/50 hover:bg-default-100 border border-default-200 rounded-xl outline-none capitalize transition-all duration-200 cursor-pointer"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat} className="text-default-900 bg-background capitalize">
                {cat === "all" ? "All Categories" : cat}
              </option>
            ))}
          </select>
        </div>

        {/* Job Type Dropdown using native <select> tag */}
        <div className="md:col-span-3">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="w-full h-10 px-3 text-sm text-default-900 bg-default-100/50 hover:bg-default-100 border border-default-200 rounded-xl outline-none capitalize transition-all duration-200 cursor-pointer"
          >
            {jobTypes.map((type) => (
              <option key={type} value={type} className="text-default-900 bg-background capitalize">
                {type === "all" ? "All Job Types" : type}
              </option>
            ))}
          </select>
        </div>

        {/* Reset Action Button Element */}
        <div className="md:col-span-1 flex items-center justify-end">
          <button
            type="button"
            onClick={handleReset}
            disabled={searchQuery === "" && categoryFilter === "all" && typeFilter === "all"}
            className="w-full h-10 text-sm font-medium text-danger hover:bg-danger-50/50 disabled:opacity-40 disabled:hover:bg-transparent rounded-xl transition-all duration-200"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Numerical Counter Tracking Row */}
      <div className="text-sm text-default-500 px-1">
        Showing <span className="font-semibold text-default-800">{filteredJobs.length}</span> out of{" "}
        <span className="font-medium">{allJobs.length}</span> entries
      </div>

      {/* Dynamic Conditional Rendering View Engine */}
      {filteredJobs.length === 0 ? (
        <div className="min-h-[30vh] flex flex-col items-center justify-center p-8 rounded-3xl border border-default-200 bg-background/50 text-center">
          <Briefcase className="w-6 h-6 text-default-400 mb-2" />
          <h3 className="text-base font-bold text-default-900">No results found</h3>
          <p className="text-default-500 text-xs max-w-xs mt-1">
            Try adjusting your search filters or selecting alternative options.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((jobData) => (
            <JobCard key={jobData._id} jobData={jobData} />
          ))}
        </div>
      )}
    </div>
  );
}