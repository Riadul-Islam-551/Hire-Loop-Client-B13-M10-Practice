"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Tooltip } from "@heroui/react";
import Link from "next/link";
import React from "react";

const SessionToggleButton = () => {
  const {
    data: session,
    isPending, //loading state
  } = authClient.useSession();

  const user = session?.user;
  // console.log(user, isPending);

  const signOutUser = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.reload(); // redirect to login page
        },
      },
    });
  };
  return (
    <div>
      {isPending === true ? (
        <>loading....</>
      ) : user ? (
        <>
          <div className="flex items-center ml-3 ">
            <div className="flex flex-col gap-1 items-center">
              <Avatar>
                <Avatar.Image alt="John Doe" src={user?.image} />
              </Avatar>
              <p className="text-xs text-orange-400 font-bold">{user?.name}</p>
            </div>

            <Button variant="ghost" onClick={signOutUser}>
              Sign Out
            </Button>
          </div>
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
