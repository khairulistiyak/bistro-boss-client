import React from "react";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import Cover from "../../../Shared/Cover/Cover";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const MenuCategory = ({ items, title, img, subHeading, heading }) => {
  return (
    <div>
      {title && <Cover img={img} title={title}></Cover>}
      <SectionTitle subHeading={subHeading} heading={heading}></SectionTitle>
      <div className="grid md:grid-cols-2 gap-2 ">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
