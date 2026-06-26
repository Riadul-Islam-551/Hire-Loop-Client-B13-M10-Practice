import React from "react";
import Link from "next/link";
import { XmarkShape, House } from "@gravity-ui/icons";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Animated Icon Container */}
        <div className="flex justify-center">
          <div className="p-5 bg-danger-50 rounded-full border border-danger-100 text-danger animate-pulse">
            <XmarkShape width={56} height={56} strokeWidth={1.5} />
          </div>
        </div>

        {/* Messaging Text */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Access Denied
          </h1>
          <p className="text-base text-default-500 max-w-sm mx-auto">
            You don&apos;t have permission to access this page. Please make sure
            you are signed into the correct account role.
          </p>
        </div>

        {/* Divider line */}
        <div className="border-t border-divider my-4"></div>

        {/* Server Actionable Navigation Options */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary-600 rounded-xl shadow-sm transition-all active:scale-[0.98] gap-2"
          >
            <House width={16} height={16} />
            Go to Home
          </Link>

          <Link
            href="/signin"
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-default-700 bg-default-100 hover:bg-default-200 rounded-xl transition-all active:scale-[0.98] gap-2"
          >
            Sign In Account
          </Link>
        </div>
      </div>
    </div>
  );
}
