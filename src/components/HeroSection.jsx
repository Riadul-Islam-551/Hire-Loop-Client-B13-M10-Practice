import React from "react";
import { Magnifier, Briefcase } from "@gravity-ui/icons";
import { Button, Input } from "@heroui/react";

import StatsHeroSection from "./StatsHeroSection";
// import { animate } from "motion";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen pt-24 pb-16 bg-no-repeat bg-center bg-cover overflow-hidden bg-slate-50 dark:bg-zinc-950"
      style={{
        backgroundImage: `url('/assets/globe.png')`,
      }}
    >
      {/* Ambient Animated Background Glows */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/40 to-white/80 dark:via-zinc-950/40 dark:to-zinc-950 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-125 h-125 bg-purple-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />

      <div className="relative container mx-auto px-4 z-10">
        {/* Hero Main Content Content */}
        <div className="flex flex-col items-center text-center pt-12 lg:pt-20">
          {/* Top Decorative Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 dark:border-purple-900/60 bg-white/60 dark:bg-zinc-900/60 px-4 py-1.5 backdrop-blur-md shadow-sm transition-transform hover:scale-105 duration-300">
            <Briefcase className="size-4 text-purple-600 dark:text-purple-400" />
            <span className="text-xs md:text-sm font-semibold tracking-wide bg-linear-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
              50,000+ NEW JOBS THIS MONTH
            </span>
          </div>

          {/* Main Typography Header */}
          <h1 className="mt-8 max-w-4xl text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Find Your{" "}
            <span className="bg-linear-to-r from-purple-600 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
              Dream Job
            </span>{" "}
            Today
          </h1>

          <p className="mt-6 max-w-2xl text-base text-slate-600 dark:text-zinc-400 md:text-xl font-normal leading-relaxed">
            HireLoop connects top talent with world-class companies. Browse
            thousands of curated opportunities and land your next role faster.
          </p>

          {/* Fully Integrated Functional Job Search Bar */}
          <div className="w-full max-w-2xl mt-10 p-2 rounded-2xl border border-slate-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-xl flex flex-col sm:flex-row gap-2 items-center">
            <Input
              type="text"
              placeholder="Job title, keywords, or company..."
              startContent={<Magnifier className="text-zinc-400 size-5" />}
              className="w-full bg-transparent border-0 focus:ring-0 text-slate-900 dark:text-white"
              variant="flat"
              size="lg"
            />
            <Button
              color="primary"
              size="lg"
              className="w-full sm:w-auto px-8 font-semibold bg-linear-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-indigo-500/20 hover:opacity-95 transition-opacity"
            >
              Search Jobs
            </Button>
          </div>

          {/* Trending Positions Layer */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              Trending:
            </span>
            {["Product Designer", "AI Engineering", "DevOps Engineer"].map(
              (item) => (
                <button
                  key={item}
                  type="button"
                  className="rounded-full border border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-800 px-3.5 py-1 text-xs font-medium text-slate-600 dark:text-zinc-300 transition-all duration-200 shadow-sm"
                >
                  {item}
                </button>
              ),
            )}
          </div>

          {/* Mid-Section Milestone Divider */}
          <div className="mt-32 md:mt-44 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Assisting over{" "}
              <span className="text-purple-600 dark:text-purple-400">
                15,000+
              </span>{" "}
              job seekers
            </h2>
            <p className="mt-2 text-base md:text-lg font-medium text-slate-500 dark:text-zinc-400">
              in anchoring their ideal structural paths.
            </p>
          </div>
        </div>

        {/* Polished Statistics Grid Layout */}
        <StatsHeroSection></StatsHeroSection>
      </div>
    </section>
  );
};

export default HeroSection;
