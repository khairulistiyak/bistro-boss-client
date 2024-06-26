import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useNavigate } from "react-router-dom";

const useCart = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure(); // Don't destructure here
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      console.log("res from axios", res);

      // console.log(res.data);
      return res.data;
    },
  });

  return [cart, refetch];
};

export default useCart;
