import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  console.log(user);
  const axiosSecure = useAxiosSecure();

  const { data: payments } = useQuery({
    queryKey: ["payment", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`payments/${user.email}`);
      return res.data;
    },
  });
  console.log(payments);
  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl">Total Payments : {payments?.length}</h2>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Category</th>
            <th>Total Price</th>
            <th>Payment data</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {payments?.map((payment, index) => (
            <tr key={payment._id}>
              <th>{index + 1}</th>
              <td>{payment.email}</td>
              <td>{payment.transactionId}</td>
              <td>${payment.price}</td>
              <td>{payment.status}</td>
            </tr>
          ))}
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
