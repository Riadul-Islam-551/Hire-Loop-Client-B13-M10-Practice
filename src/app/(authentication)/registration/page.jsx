"use client";
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
import { redirect } from "next/navigation";
import { Icon } from "@iconify/react";
import Link from "next/link";
// import toast from "react-hot-toast";

const RegistrationPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });

    if (data) {
      alert("Created account successfully !");
      redirect("/");
    }

    if (error) {
      console.error("Error creating account:", error);
    }

    // console.log({ data, error });

    console.log(user);
  };

  //   const handleGoogleSignin = async () => {
  //     await authClient.signIn.social({
  //       provider: "google",
  //     });
  //   };

  //   const handleGoogleSign = async () => {
  //     await authClient.signIn.social({
  //       provider: "google",
  //     });
  //   };

  return (
    <div className="pb-16 px-2 min-h-[70vh] pt-30  ">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center mb-2">
        Create Account
      </h1>
      <p className="text-gray-600 text-center text-sm mb-5 ">
        Search your dream job !
      </p>
      <div className="card border  border-gray-300 dark:border-gray-700 max-w-2xl mx-auto">
        <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* name */}
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input
              placeholder="Enter your name"
              className={
                "w-full bg-gray-100 dark:bg-[#212121] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              }
            />
            <FieldError />
          </TextField>
          {/* image url  */}
          <TextField isRequired name="image" type="text">
            <Label>Image URL</Label>
            <Input
              placeholder="Image url"
              className={
                "w-full bg-gray-100 dark:bg-[#212121] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              }
            />
            <FieldError />
          </TextField>
          {/* email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input
              placeholder="john@example.com"
              className={
                "w-full bg-gray-100 dark:bg-[#212121] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              }
            />
            <FieldError />
          </TextField>
          {/* password  */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
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
            <Label>Password</Label>
            <Input
              placeholder="Enter your password"
              className={
                "w-full bg-gray-100 dark:bg-[#212121]  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
              }
            />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button type="submit" className={"w-full bg-blue-500 rounded "}>
              <Check />
              Create Account
            </Button>
          </div>
        </Form>
        <div className="text-center text-sm text-gray-600 ">
          or sign in with
        </div>
        <Button
          //   onClick={handleGoogleSign}
          className="w-full rounded "
          variant="tertiary"
        >
          <Icon icon="devicon:google" />
          Sign in with Google
        </Button>
        <p className="text-xs mt-2 text-gray-600 ">Forget Password ?</p>
        <p className="mt-3 text-center text-xs ">
          Have any account?
          <Link href={"/signin"} className=" text-blue-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
