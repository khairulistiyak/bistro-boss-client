import React from "react";

const FoodCard = ({ item }) => {
  const { name, price, image, category, recipe } = item;
  return (
    <div className="card w-full bg-base-100 shadow-xl ">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-900 bg-opacity-70 text-white  absolute right-0 rounded p-1">${price} </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-yellow-400 mt-3">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
