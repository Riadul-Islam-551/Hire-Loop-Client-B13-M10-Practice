import { checkUserRole } from "@/lib/core/session";
import React from "react";

const layout = async ({ children }) => {
  await checkUserRole("recruiter");
  return children;
};

export default layout;
