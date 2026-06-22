const baseUrl = process.env.NEXT_PUBLIC_URL;

export const serverFetch = async (path) => {
  const res = await fetch(`${baseUrl}${path}`);

  return await res.json();
};

export const serverPost = async (path, data) => {
  const res = await fetch(`${baseUrl}${path}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};

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
