import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaEdit, FaTrash, FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { data } from "autoprefixer";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (item) => {
    console.log(item);
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
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle heading="Manage All Items" subHeading="hurry up"></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="uppercase">
              <th>
                <label>#</label>
              </th>
              <th>Image</th>
              <th>NAME</th>
              <th>Price</th>
              <th>ACTION</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-right">${item.price}</td>
                <td>
                  <button className="btn btn-ghost  text-w text-xl">
                    <MdEdit></MdEdit>
                  </button>
                </td>
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

export default ManageItems;
