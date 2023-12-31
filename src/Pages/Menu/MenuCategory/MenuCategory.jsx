import React from "react";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import Cover from "../../../Shared/Cover/Cover";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img, subHeading, heading }) => {
  return (
    <div className="">
      {title && <Cover img={img} title={title}></Cover>}
      <SectionTitle subHeading={subHeading} heading={heading}></SectionTitle>
      <div className="grid md:grid-cols-2 gap-2 ">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn bg-yellow-400 my-5"> Order Now</button>
      </Link>
    </div>
  );
};

export default MenuCategory;
