import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const ManageItems = () => {
  const [menu] = useMenu();
  console.log(menu);
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
              <th> NAME</th>
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
                <td>${item.price}</td>
                <td>
                  <button className="btn btn-ghost  text-w text-xl">
                    <MdEdit></MdEdit>
                  </button>
                </td>
                <td>
                  <button className="btn btn-ghost bg-red-500 text-white">
                    <FaTrashAlt></FaTrashAlt>
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
