"use client";

import React from "react";
import { motion } from "motion/react";
import {BriefcaseFill, ChevronRight, PersonPlus, FilePlus, SparklesFill} from '@gravity-ui/icons';
import { Button } from "@heroui/react";
import Link from "next/link";

const HomeJobSection = () => {
  // Shared elegant spring dynamics configuration
  const springTransition = {
    type: "spring",
    stiffness: 100,
    damping: 15,
    mass: 0.8,
  };

  return (
    <section className="relative py-24 bg-slate-50 dark:bg-zinc-950 overflow-hidden">
      {/* Decorative Complex Ambient Grid Underlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size[32px_32px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        
        {/* Section Heading Area */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-900/40 mb-4">
            <SparklesFill className="size-3.5 text-indigo-600 dark:text-indigo-400 animate-spin animation-duration:[6s]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Get Started with HireLoop
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Choose Your Destination Path
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-500 dark:text-zinc-400 max-w-xl mx-auto">
            Whether you want to accelerate your engineering career or source vetted technical talent, we built customized frameworks for both.
          </p>
        </div>

        {/* Action Dual Card Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card A: For Job Seekers */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springTransition}
            className="group relative flex flex-col justify-between p-8 md:p-10 rounded-3xl border border-slate-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 backdrop-blur-xl shadow-md hover:shadow-2xl hover:border-indigo-500/30 dark:hover:border-indigo-500/20 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
          >
            {/* Soft Ambient Inner Blur Element */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/40 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                  <BriefcaseFill className="size-6" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-md bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 tracking-wide uppercase">
                  Talent Hub
                </span>
              </div>
              
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Looking for Your Next Role?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-zinc-400">
                Create a high-impact profile, showcase your verified technical stack, search through thousands of remote-first circulars, and directly interact with verified tech recruiters.
              </p>
              
              {/* Highlight Perks Checklist */}
              <ul className="mt-6 space-y-2.5">
                {["One-click application pipeline", "Direct chat channel with hiring managers", "Real-time application status tracker"].map((perk, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-zinc-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-zinc-800/60 flex items-center justify-between gap-4">
              <span className="text-xs font-medium text-slate-400 dark:text-zinc-500">
                Join 50k+ active job seekers
              </span>
              <Button
                as={Link}
                href="/registration"
                color="primary"
                endContent={<ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />}
                className="font-bold bg-linear-to-r from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-500/10 group-hover:shadow-indigo-500/20 transition-all rounded-xl"
              >
                <PersonPlus className="size-4" />
                Explore Jobs
              </Button>
            </div>
          </motion.div>

          {/* Card B: For Recruiters / Companies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springTransition}
            className="group relative flex flex-col justify-between p-8 md:p-10 rounded-3xl border border-slate-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 backdrop-blur-xl shadow-md hover:shadow-2xl hover:border-purple-500/30 dark:hover:border-purple-500/20 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
          >
            {/* Soft Ambient Inner Blur Element */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-purple-50 dark:bg-purple-950/60 border border-purple-100 dark:border-purple-900/40 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
                  <PersonPlus className="size-6" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-md bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 tracking-wide uppercase">
                  Recruiter Deck
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Hiring Global Tech Talent?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-zinc-400">
                Publish rich job circulars with target filters, leverage built-in access status controls (Admin/Recruiter), view applications instantly, and select your ideal candidate profile seamlessly.
              </p>

              {/* Highlight Perks Checklist */}
              <ul className="mt-6 space-y-2.5">
                {["Comprehensive dashboard analytics", "Role-based workspace access controls", "Smart filtering by specific skill sets"].map((perk, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-zinc-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-zinc-800/60 flex items-center justify-between gap-4">
              <span className="text-xs font-medium text-slate-400 dark:text-zinc-500">
                Assisting 12k+ companies
              </span>
              <Button
                as={Link}
                href="/registration"
                variant="flat"
                endContent={<ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />}
                className="font-bold bg-purple-500/10 dark:bg-purple-500/20 hover:bg-purple-600 dark:hover:bg-purple-500 text-purple-700 dark:text-purple-300 hover:text-white rounded-xl transition-all duration-200"
              >
                <FilePlus className="size-4" />
                Post a Job
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HomeJobSection;