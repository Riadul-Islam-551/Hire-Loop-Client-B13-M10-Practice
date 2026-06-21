import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigationBar/Navbar";
import { Providers } from "./providers";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Work Lio",
  description:
    "Find the best talent for your team with WorkLio - the ultimate job board.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased `}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-[#fffaf7] dark:bg-black  text-gray-900 dark:text-gray-100 transition-colors duration-200">
        <Providers>
          <Navbar></Navbar>
          <main className="">{children}</main>
          <Footer></Footer>
        </Providers>
      </body>
    </html>
  );
}
