import React from "react";
import Logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button, Drawer, Separator } from "@heroui/react";
import { Bars } from "@gravity-ui/icons";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href="#">Browse Jobs</Link>
      </li>
      <li>
        <Link href="#">Company</Link>
      </li>
      <li>
        <Link href="#">Pricing</Link>
      </li>
    </>
  );
  return (
    <div className="w-full shadow-sm shadow-gray-200 dark:shadow-gray-800">
      <div className="container mx-auto  flex items-center justify-between p-4">
        <div className="flex items-center w-25 h-7.5 ">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              height={200}
              width={200}
              className="w-full h-full "
            />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:block mr-4">
            <ul className="flex items-center gap-4">{links}</ul>
          </div>
          <Separator orientation="vertical" className=" hidden lg:block" />
          <div className="flex gap-2">
            <Button variant="ghost">Sign in</Button>
            <Button variant="outline">Get Started</Button>
          </div>
          <div className="lg:hidden">
            <Drawer>
              <Button variant="ghost">
                <Bars></Bars>
              </Button>
              <Drawer.Backdrop>
                <Drawer.Content placement="right">
                  <Drawer.Dialog>
                    <Drawer.Body>
                      <ul className="flex flex-col items-start justify-center gap-4">
                        {links}
                      </ul>
                    </Drawer.Body>
                  </Drawer.Dialog>
                </Drawer.Content>
              </Drawer.Backdrop>
            </Drawer>
          </div>
          <div>
            <ThemeToggleButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
