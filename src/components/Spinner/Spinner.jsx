import React from "react";

const Spinner = () => {
  return (
    <div className="h-screen w-screen grid justify-center items-center">
      <span className="loading loading-dots loading-lg"></span>
    </div>
  );
};

export default Spinner;
