import React from "react";
import Image from "next/image";
import { Button, Separator } from "@heroui/react";
import ThemeToggleButton from "./ThemeToggleButton";
import MenuToggleIcon from "./MenuToggleIcon";
import Navlinks from "./Navlinks";
import SessionToggleButton from "./SessionToggleButton";
import logo from "../../../public/assets/logo.png";

const Navbar = async () => {
  return (
    <div className="w-full fixed top-0 z-50 bg-white dark:bg-gray-900   shadow-sm shadow-gray-300 dark:shadow-gray-700">
      <div className="container mx-auto  flex items-center justify-between p-4">
        <div className="flex items-center w-14 ">
          <a href="/">
            <Image
              src={logo}
              alt="WorkLio logo"
              height={200}
              width={200}
              className="w-full h-full"
            />
            <span className="font-bold">Work<span className="text-sky-500 dark:text-green-500 font-extrabold">Lio</span></span>
          </a>
        </div>
        <div className="flex items-center">
          <div className="hidden lg:block mr-4">
            <Navlinks></Navlinks>
          </div>
          <Separator orientation="vertical" className=" hidden lg:block" />
          <div className="flex items-center lg:mr-4">
            <SessionToggleButton></SessionToggleButton>
            
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
