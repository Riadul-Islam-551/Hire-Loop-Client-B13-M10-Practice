"use client";

import React from "react";
import { motion } from "motion/react";
import { Magnifier, Briefcase, ChartColumn, Star } from "@gravity-ui/icons";

const StatsHeroSection = () => {
  const stats = [
    {
      icon: (
        <Briefcase className="size-5 text-purple-600 dark:text-purple-400" />
      ),
      value: "50K",
      label: "Active Jobs",
      glowColor:
        "group-hover:from-purple-500/10 dark:group-hover:from-purple-500/5",
      borderColor:
        "group-hover:border-purple-500/30 dark:group-hover:border-purple-500/20",
    },
    {
      icon: <ChartColumn className="size-5 text-blue-600 dark:text-blue-400" />,
      value: "12K",
      label: "Companies",
      glowColor:
        "group-hover:from-blue-500/10 dark:group-hover:from-blue-500/5",
      borderColor:
        "group-hover:border-blue-500/30 dark:group-hover:border-blue-500/20",
    },
    {
      icon: <Magnifier className="size-5 text-pink-600 dark:text-pink-400" />,
      value: "2M",
      label: "Job Seekers",
      glowColor:
        "group-hover:from-pink-500/10 dark:group-hover:from-pink-500/5",
      borderColor:
        "group-hover:border-pink-500/30 dark:group-hover:border-pink-500/20",
    },
    {
      icon: <Star className="size-5 text-amber-600 dark:text-amber-400" />,
      value: "97%",
      label: "Satisfaction Rate",
      glowColor:
        "group-hover:from-amber-500/10 dark:group-hover:from-amber-500/5",
      borderColor:
        "group-hover:border-amber-500/30 dark:group-hover:border-amber-500/20",
    },
  ];

  return (
    <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto px-4">
      {stats.map((item, ind) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            delay: ind * 0.12, // Stagger effect makes components appear smoothly sequence by sequence
            ease: [0.16, 1, 0.3, 1], // Custom snappy cubic bezier easing curve
          }}
          className={`group relative p-6 rounded-2xl border border-slate-200/70 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:bg-linear-to-br to-transparent ${item.glowColor} ${item.borderColor}`}
        >
          {/* Top Row Element Layer */}
          <div className="flex items-center justify-between relative z-10">
            <span className="p-3 rounded-xl bg-slate-100/80 dark:bg-zinc-800/70 border border-slate-200/40 dark:border-zinc-700/30 group-hover:scale-110 group-hover:bg-white dark:group-hover:bg-zinc-800 group-hover:shadow-md transition-all duration-300">
              {item.icon}
            </span>
          </div>

          {/* Typography / Text Content Wrapper */}
          <div className="mt-6 relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-slate-900 group-hover:to-slate-700 dark:group-hover:from-white dark:group-hover:to-zinc-300 bg-clip-text transition-all duration-300">
              {item.value}
            </h3>
            <p className="mt-1.5 text-[11px] md:text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest transition-colors duration-300 group-hover:text-slate-500 dark:group-hover:text-zinc-400">
              {item.label}
            </p>
          </div>

          {/* Decorative Corner Ambient Accent Element */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
        </motion.div>
      ))}
    </div>
  );
};

export default StatsHeroSection;
