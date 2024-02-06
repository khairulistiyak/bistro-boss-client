import React from "react";

import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";

const FoodCard = ({ item }) => {
  const { user } = useAuth();

  const { name, price, image, recipe, _id } = item;

  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    console.log(user);
    if (user && user.email) {
      const cartItem = { menuItemID: _id, name, image, price, email: user.email };

      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); // refetch carts to update  the number of item in the cart
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Food added on the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
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
          <button onClick={() => handleAddToCart(item)} className="btn btn-warning mt-3">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
