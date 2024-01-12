import React from "react";
import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const handleDelete = (item) => {
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
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="my-5 w-full">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="font-semibold flex justify-evenly items-center uppercase">
        <h1 className="uppercase text-2xl">Total Cart {cart.length}</h1>
        <h1 className="uppercase text-2xl">Total Price {total}</h1>
        <button className="btn btn-warning btn-sm  uppercase ">play</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th> Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>
                  <label>{index + 1}</label>
                </td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-end">${item.price}</td>
                <td>
                  <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-lg bg-red-500 text-white ">
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
