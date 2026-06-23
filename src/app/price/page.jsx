"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardFooter, Chip } from "@heroui/react";
import { Check, ShieldCheck, Star, HandOk, Rocket } from "@gravity-ui/icons";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

export default function Pricing() {
  // Toggle state: 'seeker' or 'recruiter'
  const [userRole, setUserRole] = useState("seeker");

  // Expanded Pricing Tiers (3 Offers per role)
  const plansData = {
    seeker: [
      {
        name: "Starter Loop",
        id: "seeker-free",
        price: "0",
        description: "Essential tools to kickstart your professional path.",
        features: [
          "Apply to 3 jobs per month",
          "Standard profile viewability",
          "Basic AI resume parsing",
          "Community system support",
        ],
        isPopular: false,
        buttonText: "Current Plan",
        buttonVariant: "flat",
        buttonColor: "default",
        icon: <HandOk className="text-default-500" size={24} />,
      },
      {
        name: "Pro Hunter",
        id: "seeker-pro",
        price: "19",
        description: "Accelerate your hiring success with premium visibility.",
        features: [
          "Apply to 10 jobs per month",
          "Priority application processing",
          "Featured 'Top Candidate' badge",
          "Direct recruiter messaging channel",
          "AI Mock Interview Assistant",
        ],
        isPopular: true,
        buttonText: "Upgrade to Pro",
        buttonVariant: "solid",
        buttonColor: "primary",
        icon: <Star className="text-primary" size={24} />,
      },
      {
        name: "Elite Career",
        id: "seeker-elite",
        price: "39",
        description: "Full-scale white-glove career advancement suite.",
        features: [
          "Everything in Pro Hunter tier",
          "1-on-1 expert resume review",
          "Exclusive access to hidden unlisted roles",
          "Automated salary insight comparison",
          "Continuous profile boosting metrics",
        ],
        isPopular: false,
        buttonText: "Go Elite",
        buttonVariant: "bordered",
        buttonColor: "primary",
        icon: <Rocket className="text-warning" size={24} />,
      },
    ],
    recruiter: [
      {
        name: "Growth Engine",
        id: "recruiter-growth",
        price: "0",
        description:
          "Perfect for fast-moving startups looking for initial hires.",
        features: [
          "Post up to 5 active job circulars",
          "Basic applicant tracking pipeline",
          "Resume database lookup (50 views)",
          "Email support response within 24h",
        ],
        isPopular: false,
        buttonText: "Get Started",
        buttonVariant: "bordered",
        buttonColor: "primary",
        icon: <HandOk className="text-default-500" size={24} />,
      },
      {
        name: "Enterprise Loop",
        id: "recruiter-enterprise",
        price: "49",
        description:
          "Maximum outreach and high-volume corporate talent pipelines.",
        features: [
          "Unlimited active job postings",
          "Automated smart applicant filtering",
          "Uncapped candidate profile downloads",
          "Company profile verification badge",
          "Dedicated priority account manager",
        ],
        isPopular: true,
        buttonText: "Deploy Enterprise",
        buttonVariant: "solid",
        buttonColor: "primary",
        icon: <ShieldCheck className="text-success" size={24} />,
      },
      {
        name: "Global Scale",
        id: "recruiter-global",
        price: "149",
        description:
          "Custom agency infrastructure built for worldwide dominance.",
        features: [
          "Multiple manager sub-accounts (up to 10)",
          "Advanced programmatic API matching integrations",
          "Custom multi-stage interview webhooks",
          "Premium cross-platform external syndication",
          "Quarterly talent market insight audits",
        ],
        isPopular: false,
        buttonText: "Contact Corporate",
        buttonVariant: "flat",
        buttonColor: "secondary",
        icon: <Rocket className="text-secondary" size={24} />,
      },
    ],
  };

  // Animation Variant definitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <section className="mt-30 min-h-screen bg-default-50/40 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <Chip
            color="primary"
            variant="flat"
            size="sm"
            className="font-semibold uppercase tracking-wider"
          >
            Pricing Plans
          </Chip>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Invest in your next big loop
          </h1>
          <p className="text-default-500 text-sm sm:text-base">
            Choose the perfect plan tailored to match your requirements. No
            hidden loops, cancel your plan anytime.
          </p>
        </div>

        {/* Dynamic Slide Toggle Button Switcher */}
        <div className="flex justify-center">
          <div className="bg-content2 p-1.5 rounded-2xl flex items-center gap-1 border border-default-200/60 shadow-inner relative z-0">
            {/* Animated Slidely Pill Indicator Background */}
            <button
              onClick={() => setUserRole("seeker")}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-colors duration-300 relative ${
                userRole === "seeker"
                  ? "text-primary"
                  : "text-default-500 hover:text-default-800"
              }`}
            >
              {userRole === "seeker" && (
                <motion.div
                  layoutId="activeRoleIndicator"
                  className="absolute inset-0 bg-content1 rounded-xl shadow-md border border-violet-400"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  style={{ zIndex: -1 }}
                />
              )}
              For Job Seekers
            </button>

            <button
              onClick={() => setUserRole("recruiter")}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-colors duration-300 relative ${
                userRole === "recruiter"
                  ? "text-primary"
                  : "text-default-500 hover:text-default-800"
              }`}
            >
              {userRole === "recruiter" && (
                <motion.div
                  layoutId="activeRoleIndicator"
                  className="absolute inset-0 bg-content1 rounded-xl shadow-md border border-violet-400"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  style={{ zIndex: -1 }}
                />
              )}
              For Recruiters
            </button>
          </div>
        </div>

        {/* Cards Wrapper Container with Fade Presence Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={userRole}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch pt-4"
          >
            {plansData[userRole].map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={cardVariants}
                className="h-full flex"
              >
                <Card
                  className={`border-medium p-4 flex flex-col justify-between transition-shadow duration-300 relative overflow-hidden bg-content1 w-full ${
                    plan.isPopular
                      ? "border-primary shadow-sm  md:scale-[1.03] md:-translate-y-2 z-10 bg-zinc-200 dark:bg-zinc-800 "
                      : "border-default-100 shadow-sm opacity-95 hover:opacity-100"
                  }`}
                >
                  {/* Highlight Ribbon badge for premium popular items */}
                  {plan.isPopular && (
                    <div className="absolute top-0 right-0">
                      <Chip
                        color="primary"
                        size="sm"
                        className="bg-violet-400 p-1  rounded-tl-none rounded-br-none font-bold uppercase tracking-wider text-[10px]"
                      >
                        Most Popular
                      </Chip>
                    </div>
                  )}

                  <div>
                    {/* Plan Header Setup */}
                    <CardHeader className="flex gap-4 items-start pb-4">
                      <div className="p-3 bg-default-100/70 rounded-xl shrink-0">
                        {plan.icon}
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold tracking-tight">
                          {plan.name}
                        </h3>
                        <p className="text-xs text-default-400 leading-snug">
                          {plan.description}
                        </p>
                      </div>
                    </CardHeader>

                    {/* Pricing Block Section */}
                    <div className="px-3 py-4 border-y border-default-100/80 my-2 flex items-baseline gap-1">
                      <span className="text-4xl font-black tracking-tight text-foreground">
                        ${plan.price}
                      </span>
                      <span className="text-default-400 text-xs font-semibold">
                        / month
                      </span>
                    </div>

                    {/* Features Checklist List */}
                    <Card.Description className="py-4 px-3 overflow-visible">
                      <ul className="space-y-3.5">
                        {plan.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm"
                          >
                            <span
                              className={`p-0.5 rounded-full mt-0.5 shrink-0 ${
                                plan.isPopular
                                  ? "bg-primary-50 text-primary"
                                  : "bg-default-100 text-default-600"
                              }`}
                            >
                              <Check size={14} />
                            </span>
                            <span className="text-default-600 font-medium leading-normal">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </Card.Description>
                  </div>

                  {/* Purchase Intent Trigger CTA Buttons */}
                  <CardFooter className="pt-6 px-3">
                    <form action="/api/checkout_sessions" method="POST">
                      <input type="hidden" name="plan_id" value={plan.id} />
                      <section>
                        <button
                          type="submit"
                          role="link"
                          className="w-full font-bold shadow-none group transition-transform active:scale-[0.98] border p-2 rounded-full bg-violet-500 text-center"
                        >
                          {plan.buttonText}
                        </button>
                      </section>
                    </form>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Security / Conversion Anchor Telemetry */}
        <p className="text-center text-xs text-default-400 pt-4">
          Secured corporate transactions via Stripe. Looking for bespoke pricing
          maps?{" "}
          <span className="text-primary font-semibold underline cursor-pointer hover:text-primary-600">
            Contact HireLoop Sales
          </span>
        </p>
      </div>
    </section>
  );
}
