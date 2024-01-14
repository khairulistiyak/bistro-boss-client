import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllUsers = () => {
  // const { data, refetch } = useQuery(["users"], async () => {
  //   const res = await fetch("http://localhost:5000/users");
  //   return res.json();
  // });
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      return res.json();
    },
  });
  return (
    <div>
      <p className="text-2xl">Total users : {users.length}</p>
    </div>
  );
};

export default AllUsers;
