import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaCartArrowDown, FaWallet, FaCalendarAlt, FaHome, FaUserMinus, FaShapes } from "react-icons/fa";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center ">
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-[#D1A054]">
          {/* Sidebar content here */}
          <li className="">
            <NavLink to="/dashboard/home">
              <FaHome></FaHome> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendarAlt></FaCalendarAlt> Reservations
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <FaWallet></FaWallet> Payment History
            </NavLink>
          </li>
          <li className="inline">
            <NavLink to="/dashboard/myCart">
              <FaCartArrowDown></FaCartArrowDown>{" "}
              <span>
                My Carts <small class="badge badge-secondary ms-3"> + {cart?.length || 0}</small>
              </span>
            </NavLink>
          </li>
          {/* <div className="divider "></div> */}
          <li>
            <NavLink to="/">
              <FaHome></FaHome> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaShapes></FaShapes> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> User Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
