import { loggedInUser } from "@/lib/core/session";
import {
  Bell,
  House,
  Magnifier,
  LayoutSideContentLeft,
  Briefcase,
  Bookmark,
  File,
  FileDollar,
  Gear,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";

export async function SidebarMenu() {
  const user = await loggedInUser();
  const role = user?.role;

  const sidebarLinks = {
    recruiter: [
      { icon: House, href: "/dashboard/recruiter", label: "Dashboard" },
      { icon: Magnifier, href: "/dashboard/recruiter/job", label: "Jobs" },
      {
        icon: Bell,
        href: "/dashboard/recruiter/job/newJob",
        label: "Post A Job",
      },
      {
        icon: Briefcase,
        href: "/dashboard/recruiter/company",
        label: "Company Details",
      },
    ],
    seeker: [
      { icon: House, href: "/dashboard/recruiter", label: "Dashboard" },
      { icon: Magnifier, href: "/dashboard/recruiter/job", label: "Jobs" },
      {
        icon: Bookmark,
        href: "/dashboard/recruiter/job/newJob",
        label: "Save Jobs",
      },
      {
        icon: File,
        href: "/dashboard/recruiter/company",
        label: "Applications ",
      },
      {
        icon: FileDollar,
        href: "/dashboard/recruiter/company",
        label: "Billing ",
      },
      {
        icon: Gear,
        href: "/dashboard/recruiter/company",
        label: "Settings ",
      },
    ],
  };

  const navItems = sidebarLinks[role];

  const navSection = (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
          type="button"
        >
          <item.icon className="size-5 text-muted" />
          {item.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <>
      <aside className="hidden lg:block w-64  border-r border-zinc-300 dark:border-zinc-700 ">
        <h1 className="font-bold text-2xl m-4  ">WorkLio</h1>
        {navSection}
      </aside>
      <Drawer className="flex-1">
        <Button variant="secondary" className={"lg:hidden"}>
          <LayoutSideContentLeft className="" />
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>WorkLio</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>{navSection}</Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}
