import { useQueries, useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { data } from "autoprefixer";
import { useEffect } from "react";

const useAdmin = () => {
  const { user } = useAuth();
  console.log(user);
  const [axiosSecure] = useAxiosSecure();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      console.log("is admin res", res);
      return res.data.admin;
    },
  });
  console.log(data.data);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
