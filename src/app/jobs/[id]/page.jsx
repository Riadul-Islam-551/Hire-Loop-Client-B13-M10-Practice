import React from "react";

const jobDetailsPage = async ({ params }) => {
  const id = await params;
  console.log(id);

  return (
    <div className="mt-30">
      <h1>job Details</h1>
    </div>
  );
};

export default jobDetailsPage;
