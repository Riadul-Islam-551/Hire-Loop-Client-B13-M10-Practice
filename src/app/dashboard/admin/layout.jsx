import { checkUserRole } from "@/lib/core/session";
import React from "react";

const AdminLayout = async ({ children }) => {
  await checkUserRole("admin");
  return children;
};

export default AdminLayout;
