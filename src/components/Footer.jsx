import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LogoFacebook, LogoLinkedin, LogoTelegram } from "@gravity-ui/icons";

const Footer = () => {
  return (
    <footer className="relative bg-linear-to-b from-zinc-950 to-black text-zinc-400 border-t border-zinc-900 overflow-hidden">
      {/* Decorative Ambient Radial Gradient Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 pt-16 pb-12">
        {/* Top Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Logo & Platform Description */}
          <div className="col-span-2 space-y-5 lg:pr-8">
            <Link
              href="/"
              className="inline-block group transition-transform duration-300 hover:scale-[1.02]"
            >
              <Image
                src="/assets/logo.png"
                alt="WorkLio Logo"
                width={160}
                height={50}
                className="object-contain brightness-110"
              />
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-zinc-500">
              The AI-native career platform. Built for ambitious professionals
              who take their work and future seriously.
            </p>

            {/* Social Icons Container */}
            <div className="flex items-center gap-3 pt-2">
              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-violet-600 hover:border-violet-500 hover:scale-110 hover:shadow-lg hover:shadow-violet-600/20 transition-all duration-300"
              >
                <LogoFacebook className="w-5 h-5" />
              </Link>

              <Link
                href="#"
                aria-label="Telegram"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-violet-600 hover:border-violet-500 hover:scale-110 hover:shadow-lg hover:shadow-violet-600/20 transition-all duration-300"
              >
                <LogoTelegram className="w-5 h-5" />
              </Link>

              <Link
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-violet-600 hover:border-violet-500 hover:scale-110 hover:shadow-lg hover:shadow-violet-600/20 transition-all duration-300"
              >
                <LogoLinkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Column 1: Product Links */}
          <div className="col-span-1">
            <h3 className="mb-5 text-xs font-bold tracking-widest uppercase text-violet-400">
              Product
            </h3>
            <ul className="space-y-3 text-sm">
              {["Job discovery", "Worker AI", "Companies", "Salary data"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="inline-block hover:text-zinc-100 transform hover:translate-x-1 transition-all duration-300 ease-out font-medium text-zinc-500"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="col-span-1">
            <h3 className="mb-5 text-xs font-bold tracking-widest uppercase text-violet-400">
              Navigations
            </h3>
            <ul className="space-y-3 text-sm">
              {["Help center", "Career library", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="inline-block hover:text-zinc-100 transform hover:translate-x-1 transition-all duration-300 ease-out font-medium text-zinc-500"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources Links */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="mb-5 text-xs font-bold tracking-widest uppercase text-violet-400">
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              {["Brand Guideline", "Newsroom"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="inline-block hover:text-zinc-100 transform hover:translate-x-1 transition-all duration-300 ease-out font-medium text-zinc-500"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal Section */}
        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row gap-4 items-center justify-between text-xs text-zinc-600 font-medium">
          <p>
            &copy; {new Date().getFullYear()} — WorkLio. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="hover:text-zinc-400 transition-colors duration-200"
            >
              Terms & Policy
            </Link>
            <Link
              href="#"
              className="hover:text-zinc-400 transition-colors duration-200"
            >
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
