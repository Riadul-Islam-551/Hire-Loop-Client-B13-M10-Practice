"use server";

const baseUrl = process.env.NEXT_PUBLIC_URL;
export const createRecruiterCompany = async (newCompanyData) => {
  const res = await fetch(`${baseUrl}/api/companies`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newCompanyData),
  });

  return await res.json();
};
