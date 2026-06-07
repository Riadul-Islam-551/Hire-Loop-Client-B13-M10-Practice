"use client";

import React from "react";
import { motion } from "motion/react";
import { Magnifier, Briefcase, ChartColumn, Star } from "@gravity-ui/icons";
import { div } from "motion/react-client";

const HomeFeatures = () => {
  const stats = [
    {
      icon: <Briefcase className="size-5 text-purple-600" />,
      value: "50K",
      label: "Active Jobs",
      glow: "group-hover:from-purple-500/10",
      border: "group-hover:border-purple-500/30",
    },
    {
      icon: <ChartColumn className="size-5 text-blue-600" />,
      value: "12K",
      label: "Companies",
      glow: "group-hover:from-blue-500/10",
      border: "group-hover:border-blue-500/30",
    },
    {
      icon: <Magnifier className="size-5 text-pink-600" />,
      value: "2M",
      label: "Job Seekers",
      glow: "group-hover:from-pink-500/10",
      border: "group-hover:border-pink-500/30",
    },
    {
      icon: <Star className="size-5 text-amber-600" />,
      value: "97%",
      label: "Satisfaction",
      glow: "group-hover:from-amber-500/10",
      border: "group-hover:border-amber-500/30",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl md:text-4xl text-center  font-black text-slate-900 dark:text-white tracking-tight">
        Success Rate
      </h2>
      <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto px-4 py-12">
        {stats.map((item, ind) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: ind * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`group relative p-6 rounded-2xl border border-slate-200/70 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-linear-to-br to-transparent ${item.glow} ${item.border}`}
          >
            <div className="flex items-center justify-between">
              <span className="p-2.5 rounded-xl bg-slate-100 dark:bg-zinc-800 group-hover:scale-110 group-hover:bg-white dark:group-hover:bg-zinc-700 transition-all duration-300">
                {item.icon}
              </span>
            </div>
            <div className="mt-5">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                {item.value}
              </h3>
              <p className="mt-0.5 text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
                {item.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomeFeatures;
