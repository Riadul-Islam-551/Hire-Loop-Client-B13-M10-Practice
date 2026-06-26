import { SidebarMenu } from "@/components/dashboard/SidebarMenu";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row pt-22.5 min-h-screen  ">
      <SidebarMenu></SidebarMenu>
      <main className="flex-1 mt-4">{children}</main>
    </div>
  );
};

export default DashboardLayout;
