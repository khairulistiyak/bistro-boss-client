import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaTrashAlt, FaUserShield, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      return res.json();
    },
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.displayName} is an admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        refetch();
      });
  };

  const handleDelete = () => {};

  return (
    <div className="overflow-x-auto">
      <div className="text-3xl font-semibold uppercase flex items-center gap-5 my-10">
        <FaUsers></FaUsers> Total users| {users.length}
      </div>
      <table className="min-w-full table-auto">
        {/* head */}
        <thead>
          <tr>
            <th className="w-1/6"> # </th>
            <th className="w-1/6"> Name </th>
            <th className="w-1/6"> Email </th>
            <th className="w-1/6"> Role </th>
            <th className="w-1/6"> Action </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.role === "admin" ? (
                  "admin"
                ) : (
                  <button className="btn bg-orange-500 text-white" onClick={() => handleMakeAdmin(user)}>
                    <FaUserShield></FaUserShield>
                  </button>
                )}
              </td>
              <td>
                <button className="btn bg-red-500" onClick={() => handleDelete()}>
                  <FaTrashAlt className=" text-white "></FaTrashAlt>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
