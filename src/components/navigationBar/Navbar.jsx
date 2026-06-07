import React from "react";
import Image from "next/image";
import { Button, Separator } from "@heroui/react";
import ThemeToggleButton from "./ThemeToggleButton";
import MenuToggleIcon from "./MenuToggleIcon";
import Navlinks from "./Navlinks";
import SessionToggleButton from "./SessionToggleButton";

const Navbar = async () => {
  return (
    <div className="w-full fixed top-0 z-50 bg-white dark:bg-gray-900   shadow-sm shadow-gray-300 dark:shadow-gray-700">
      <div className="container mx-auto  flex items-center justify-between p-4">
        <div className="flex items-center w-25 h-7.5 ">
          <a href="/">
            <Image
              src={"/assets/logo.png"}
              alt="Logo"
              height={200}
              width={200}
              className="w-full h-full"
            />
          </a>
        </div>
        <div className="flex items-center">
          <div className="hidden lg:block mr-4">
            <Navlinks></Navlinks>
          </div>
          <Separator orientation="vertical" className=" hidden lg:block" />
          <div className="flex items-center lg:mr-4">
            <SessionToggleButton></SessionToggleButton>
            <Button variant="outline">Get Started</Button>
          </div>
          <div>
            <MenuToggleIcon />
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
