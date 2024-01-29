import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user, loading } = useAuth();

  const axiosSecure = useAxiosSecure(); // Don't destructure here
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [cart, refetch];
};

export default useCart;
