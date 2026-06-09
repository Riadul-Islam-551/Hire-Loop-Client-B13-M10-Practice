"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  CircleCheckFill,
  Flame,
  HouseFill,
  ShieldCheck,
} from "@gravity-ui/icons";
import { Button } from "@heroui/react";

const HomeFeaturedPrice = () => {
  const [billingPeriod, setBillingPeriod] = useState("monthly"); // monthly or yearly

  const tiers = [
    {
      name: "Starter",
      icon: <HouseFill className="size-5 text-blue-500" />,
      price: { monthly: 19, yearly: 15 },
      description:
        "Perfect for independent recruiters or growing startups starting to source talent.",
      features: [
        "5 Active Job Circulars",
        "Basic Applicant Filtering",
        "Direct Chat (Limited)",
        "7-day post visibility",
      ],
      cta: "Get Started",
      popular: false,
      accent: "blue",
    },
    {
      name: "Professional",
      icon: <Flame className="size-5 text-purple-500" />,
      price: { monthly: 49, yearly: 39 },
      description:
        "Our most chosen plan for structured talent acquisition and scaling setups.",
      features: [
        "Unlimited Active Jobs",
        "Advanced AI Resume Parsing",
        "Admin + Recruiter Seats (3)",
        "Direct Chat (Unlimited)",
        "30-day post visibility",
        "Priority Helpdesk Support",
      ],
      cta: "Scale Hiring Now",
      popular: true,
      accent: "purple",
    },
    {
      name: "Enterprise",
      icon: <ShieldCheck className="size-5 text-emerald-500" />,
      price: { monthly: 99, yearly: 79 },
      description:
        "Tailored infrastructure layouts optimized for large-scale enterprise platforms.",
      features: [
        "Dedicated Workspace Domain",
        "Custom Integration Hooks",
        "Unlimited Seats & Admins",
        "Premium Verification Badges",
        "Custom Better-Auth Configs",
        "24/7 Account Manager",
      ],
      cta: "Contact Enterprise",
      popular: false,
      accent: "emerald",
    },
  ];

  return (
    <section className="relative py-24 bg-slate-50 dark:bg-zinc-950 overflow-hidden">
      {/* Background Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#8080800a_1px,transparent_1px)] bg-size:[24px_24px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Header Block */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Predictable Plans,{" "}
            <span className="bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              No Surprises
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-500 dark:text-zinc-400 max-w-md mx-auto">
            Choose the operational workspace configuration that fits your
            company&apos;s recruitment budget constraints.
          </p>

          {/* Premium Toggle Mechanism */}
          <div className="inline-flex items-center p-1 mt-10 rounded-xl bg-slate-200/60 dark:bg-zinc-900/60 border border-slate-300/40 dark:border-zinc-800/40 backdrop-blur-md">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all duration-300 ${
                billingPeriod === "monthly"
                  ? "bg-white dark:bg-zinc-800 text-slate-900 dark:text-white shadow-md"
                  : "text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-200"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`relative px-4 py-2 text-xs font-bold rounded-lg transition-all duration-300 ${
                billingPeriod === "yearly"
                  ? "bg-white dark:bg-zinc-800 text-slate-900 dark:text-white shadow-md"
                  : "text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-200"
              }`}
            >
              Yearly Billing
              <span className="absolute -top-3 -right-3 px-1.5 py-0.5 text-[9px] font-black tracking-wide bg-purple-600 text-white rounded-md uppercase animate-pulse">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.1,
              }}
              className={`relative p-8 rounded-3xl border flex flex-col justify-between h-full bg-white dark:bg-zinc-900/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 ${
                tier.popular
                  ? "border-purple-500 ring-2 ring-purple-500/20 shadow-2xl md:py-10"
                  : "border-slate-200/80 dark:border-zinc-800/80 shadow-md hover:shadow-xl"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-linear-to-r from-purple-600 to-indigo-600 text-white shadow-md">
                  Most Popular Choice
                </span>
              )}

              <div>
                {/* Tier Top Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
                    {tier.name}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-zinc-800">
                    {tier.icon}
                  </div>
                </div>

                {/* Pricing Area */}
                <div className="my-6">
                  <div className="flex items-baseline text-slate-900 dark:text-white">
                    <span className="text-2xl font-bold tracking-tight">$</span>
                    <span className="text-5xl font-black tracking-tighter transition-all duration-300">
                      {billingPeriod === "monthly"
                        ? tier.price.monthly
                        : tier.price.yearly}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500 ml-2 uppercase tracking-wider">
                      / month
                    </span>
                  </div>
                  <p className="mt-3 text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <hr className="border-slate-100 dark:border-zinc-800/60 my-6" />

                {/* Features List */}
                <ul className="space-y-3.5 mb-8">
                  {tier.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-xs font-medium text-slate-600 dark:text-zinc-300"
                    >
                      <span
                        className={`p-0.5 rounded-md mt-0.5 shrink-0 ${tier.popular ? "bg-purple-500/10 text-purple-500" : "bg-slate-100 dark:bg-zinc-800 text-slate-500"}`}
                      >
                        <CircleCheckFill className="size-3.5 stroke-3" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <Button
                size="lg"
                className={`w-full font-bold rounded-xl transition-all ${
                  tier.popular
                    ? "bg-linear-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/20 hover:opacity-95"
                    : "bg-slate-100 dark:bg-zinc-800/80 hover:bg-slate-200 dark:hover:bg-zinc-800 text-slate-800 dark:text-zinc-200"
                }`}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeaturedPrice;
