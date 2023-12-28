import React from "react";

const MenuItem = ({ item }) => {
  console.log(item);

  const { name, price, image, category, recipe } = item;
  return (
    <div className="flex justify-between mx-5">
      <div className="flex space-x-4">
        <img style={{ borderRadius: "0 200px 200px 200px" }} src={image} className="w-20 h-20 object-cover" alt="" />
        <div>
          <p className="text-xl ">{name}-----------</p>
          <p>{recipe}</p>
        </div>
      </div>
      <div>{price}</div>
    </div>
  );
};

export default MenuItem;
