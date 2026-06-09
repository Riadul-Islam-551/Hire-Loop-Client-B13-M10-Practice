import { SidebarMenu } from "@/components/dashboard/SidebarMenu";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex pt-22.5 min-h-screen  ">
      <SidebarMenu></SidebarMenu>
      <main className="">{children}</main>
    </div>
  );
};

export default DashboardLayout;
