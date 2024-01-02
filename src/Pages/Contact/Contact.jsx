import React from "react";
import Cover from "../../Shared/Cover/Cover";

import img from "../../assets/contact/banner.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Contact = () => {
  return (
    <div>
      <Cover title={"Contact us"} img={img}></Cover>
      <SectionTitle heading={"our Location"} subHeading={"visit Us"}></SectionTitle>
    </div>
  );
};

export default Contact;
