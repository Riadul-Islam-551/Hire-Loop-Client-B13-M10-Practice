import { headers } from "next/headers";
import { auth } from "../auth";
import { redirect } from "next/navigation";

export const loggedInUser = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  return session?.user;
};

export const checkUserRole = async (role) => {
  const user = await loggedInUser();
  if (user?.role !== role) {
    redirect("/unauthorized");
  }
};
