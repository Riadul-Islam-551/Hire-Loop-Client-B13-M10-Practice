"use client";

import React from "react";
import { motion } from "motion/react";
// import { Magnifier, Briefcase, ChartColumn, Star } from "@gravity-ui/icons";
import {
  Briefcase,
  ChevronRight,
  PersonPlus,
  FilePlus,
} from "@gravity-ui/icons";
import { Button } from "@heroui/react";

const HomeSplitAction = () => {
  return (
    <section className="relative py-20 bg-slate-50 dark:bg-zinc-950 overflow-hidden">
      <h2 className="text-3xl md:text-4xl text-center mb-9 md:mb-12 lg:mb-16 font-black text-slate-900 dark:text-white tracking-tight">
        Your next role is <br />
        already looking for you
      </h2>
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Card A: Job Seekers */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="group relative p-8 rounded-3xl border border-slate-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
                  <Briefcase className="size-5" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 bg-slate-100 dark:bg-zinc-800 px-2.5 py-1 rounded-md">
                  Talent
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
                Looking for Your Next Role?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-zinc-400">
                Build your professional profile hub, showcase skills, tracking
                status variables, and apply seamlessly to world-class teams.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-zinc-800/60 flex items-center justify-between">
              <span className="text-[11px] font-medium text-slate-400">
                Join 50k+ seekers
              </span>
              <Button
                size="sm"
                color="primary"
                className="font-bold bg-blue-600 text-white rounded-lg shadow-sm"
                endContent={
                  <ChevronRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
                }
              >
                <PersonPlus className="size-3.5" /> Find Work
              </Button>
            </div>
          </motion.div>

          {/* Card B: Recruiters */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="group relative p-8 rounded-3xl border border-slate-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400">
                  <PersonPlus className="size-5" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 bg-slate-100 dark:bg-zinc-800 px-2.5 py-1 rounded-md">
                  Recruiter
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
                Hiring Global Tech Talent?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-zinc-400">
                Publish high-visibility circular arrays, manage candidate
                evaluation columns, and leverage deep organizational controls.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-zinc-800/60 flex items-center justify-between">
              <span className="text-[11px] font-medium text-slate-400">
                Vetted pipelines
              </span>
              <Button
                size="sm"
                className="font-bold bg-purple-600 text-white rounded-lg shadow-sm"
                endContent={
                  <ChevronRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
                }
              >
                <FilePlus className="size-3.5" /> Post Job
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSplitAction;
