import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const FoodCard = ({ item }) => {
  const { name, price, image, recipe } = item;
  const { user } = useContext(AuthContext);
  // console.log(user);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user) {
      fetch("http://localhost:5000//carts")
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

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
          <button onClick={() => handleAddToCart(item)} className="btn bg-yellow-400 mt-3">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
