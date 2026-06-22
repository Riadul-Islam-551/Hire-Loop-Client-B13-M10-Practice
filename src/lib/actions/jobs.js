"use server";

import { serverPost } from "../core/server";

// const baseUrl = process.env.NEXT_PUBLIC_URL;
// export const createJob = async (newJobData) => {
//   const res = await fetch(`${baseUrl}/api/jobs`, {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(newJobData),
//   });

//   return await res.json();
// };

export const createJob = async (newJobData) => {
  return serverPost("/api/jobs", newJobData);
};
