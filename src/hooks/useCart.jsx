import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
const useCart = () => {
  const { user } = useAuth();
  const [axios, axiosSecure] = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      // console.log("res from axios", res);
      return res.data; // Use res.data instead of res.data() for Axios
    },
  });

  return [cart, refetch];
};

export default useCart;
