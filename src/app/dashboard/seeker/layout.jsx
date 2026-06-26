import { checkUserRole } from "@/lib/core/session";
import React from "react";

const SeekerLayout = async ({ children }) => {
  await checkUserRole("seeker");
  return children;
};

export default SeekerLayout;
