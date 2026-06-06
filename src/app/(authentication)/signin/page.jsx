"use client";
import React from "react";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { redirect } from "next/navigation";

const SignInPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    if (data) {
      alert("Signed in successfully!");
      redirect("/");
    }

    if (error) {
      alert("Something went wrong!");
    }
  };

  // const handleGoogleSignin = async () => {
  //   await authClient.signIn.social({
  //     provider: "google",
  //   });
  // };

  return (
    <div className="relative min-h-screen flex items-center justify-center pb-16 px-4 pt-24 bg-slate-50 dark:bg-zinc-950 overflow-hidden">
      {/* Background Micro-Animations & Glow Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-100 h-100 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-88.5 h-88.5 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none [animation-delay:2s]" />

      <div className="relative w-full max-w-md z-10">
        {/* Decorative Badge Icon Wrapper */}
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 shadow-md">
            <div className="bg-linear-to-tr from-purple-600 to-indigo-600 p-2.5 rounded-xl text-white">
              <Icon icon="lucide:lock" className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Form Main Container */}
        <div className="border border-slate-200/80 dark:border-zinc-800/80 p-8 rounded-2xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl shadow-xl">
          <div className="text-center mb-8">
            <h1 className="font-black text-2xl md:text-3xl text-slate-900 dark:text-white tracking-tight">
              Welcome Back
            </h1>
            <p className="text-sm text-slate-500 dark:text-zinc-400 mt-2 font-medium">
              Enter your credentials to access your account
            </p>
          </div>

          <Form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Email Field */}
            <TextField
              isRequired
              name="email"
              type="email"
              className="flex flex-col gap-1.5"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                Email Address
              </Label>
              <Input
                placeholder="john@example.com"
                variant="bordered"
                size="md"
                className="w-full text-slate-900 dark:text-white transition-all duration-200"
              />
              <FieldError className="text-xs font-medium text-danger mt-1" />
            </TextField>

            {/* Password Field */}
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              className="flex flex-col gap-1.5"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <div className="flex justify-between items-center">
                <Label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                  Password
                </Label>
                <Link
                  href="#"
                  className="text-xs font-semibold text-purple-600 dark:text-purple-400 hover:underline transition-all"
                >
                  Forgot Password?
                </Link>
              </div>
              <Input
                placeholder="••••••••"
                variant="bordered"
                size="md"
                className="w-full text-slate-900 dark:text-white transition-all duration-200"
              />
              <Description className="text-[11px] text-slate-400 dark:text-zinc-500 font-medium leading-normal mt-1">
                Must contain at least 8 characters with 1 uppercase letter and 1
                number.
              </Description>
              <FieldError className="text-xs font-medium text-danger mt-1" />
            </TextField>

            {/* Main Action Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full font-bold bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-indigo-500/20 rounded-xl mt-2 group transition-all duration-300"
            >
              <Check className="w-4 h-4 transform group-hover:scale-110 transition-transform" />
              Sign In
            </Button>
          </Form>

          {/* Alternative Separation Border Section */}
          <div className="relative flex py-4 items-center my-2">
            <div className="grow border-t border-slate-200 dark:border-zinc-800"></div>
            <span className="shrink mx-4 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500">
              or continue with
            </span>
            <div className="grow border-t border-slate-200 dark:border-zinc-800"></div>
          </div>

          {/* Social Access Button */}
          <Button
            // onClick={handleGoogleSignin}
            size="lg"
            variant="bordered"
            className="w-full font-semibold border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-slate-700 dark:text-zinc-300 rounded-xl hover:bg-slate-100 dark:hover:bg-zinc-800 hover:scale-[1.01] transition-all duration-200"
          >
            <Icon icon="devicon:google" className="w-5 h-5" />
            Sign in with Google
          </Button>

          {/* Redirection Links Footnote */}
          <p className="mt-8 text-center text-sm font-medium text-slate-500 dark:text-zinc-400">
            Don&apos;t have an account?{" "}
            <Link
              href="/registration"
              className="text-purple-600 dark:text-purple-400 font-bold hover:underline transition-all"
            >
              Register Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
