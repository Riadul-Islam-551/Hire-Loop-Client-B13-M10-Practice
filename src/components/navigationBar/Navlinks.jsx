"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const Navlinks = () => {
  const pathName = usePathname();
  const { data: session } = authClient.useSession();
  const userRole = session?.user?.role;
  const userDashboard = {
    seeker: "/dashboard/seeker",
    recruiter: "/dashboard/recruiter",
  };
  return (
    <div>
      <ul className="flex flex-col lg:flex-row items-start lg:items-center w-full lg:w-auto ">
        <li className="p-2 rounded w-full lg:w-auto  ">
          <Link
            href="/jobs"
            className={`${
              pathName === "/jobs" ? "border-b-2 border-orange-500" : ""
            } p-2 w-full lg:w-auto inline-block `}
          >
            Browse Jobs
          </Link>
        </li>
        <li className="p-2 rounded w-full lg:w-auto  ">
          <Link
            href="/company"
            className={`${
              pathName === "/company" ? "border-b-2 border-orange-500" : ""
            } p-2 w-full lg:w-auto inline-block `}
          >
            Company
          </Link>
        </li>
        <li className="p-2 rounded w-full lg:w-auto  ">
          <Link
            href="/price"
            className={`${
              pathName === "/price" ? "border-b-2 border-orange-500" : ""
            } p-2 w-full lg:w-auto inline-block `}
          >
            Pricing
          </Link>
        </li>
        <li className="p-2 rounded w-full lg:w-auto  ">
          <Link
            href={userDashboard[userRole] || "/signin"}
            className={`${
              pathName.startsWith("/dashboard")
                ? "border-b-2 border-orange-500"
                : ""
            } p-2 w-full lg:w-auto inline-block`}
          >
            Dashboard
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navlinks;
