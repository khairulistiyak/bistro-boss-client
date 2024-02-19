import React, { useState } from "react";

const ActiveLink = ({ children, to }) => {
  const [isActive, setIsActive] = useState();

  return (
    <div to={to} className={isActive}>
      {children}
    </div>

  );
};

export default ActiveLink;
