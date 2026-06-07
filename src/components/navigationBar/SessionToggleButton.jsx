"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Spinner } from "@heroui/react";
import Link from "next/link";
import React from "react";

const SessionToggleButton = () => {
  const {
    data: session,
    isPending, //loading state
  } = authClient.useSession();

  const user = session?.user;
  console.log(user, isPending);

  const signOutUser = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); // redirect to login page
        },
      },
    });
  };
  return (
    <div>
      {isPending === true ? (
        <>
          <Spinner/>
        </>
      ) : user ? (
        <>
          <Button variant="ghost" onClick={signOutUser}>
            Sign Out
          </Button>
        </>
      ) : (
        <>
          <Link href="/signin">
            <Button variant="ghost">Sign in</Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default SessionToggleButton;
