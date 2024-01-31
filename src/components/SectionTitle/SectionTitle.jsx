import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center my-8">
      <p className="text-yellow-600 mb-2 uppercase ">----{subHeading}----</p>
      <h3 className="md:text-3xl text-2xl border-y-2 py-4 uppercase">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
