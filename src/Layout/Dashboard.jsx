import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaCartArrowDown,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUserMinus,
  FaShapes,
  FaUtensils,
  FaHamburger,
  FaHammer,
  FaList,
  FaBookReader,
  FaBook,
  FaUsers,
} from "react-icons/fa";

import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  // TODO : LOAD DATA FROM SERVER TO HAVE DYNAMIC IS ADMIN BASED ON DATA

  const isAdmin = true;
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
        <ul className="menu p-4 w-0 min-h-full bg-[#D1A054]">
          {/* Sidebar content here */}

          {isAdmin ? (
            <>
              <li className="">
                <NavLink to="/dashboard/home">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaUtensils></FaUtensils> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaList></FaList> Mange Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/booking">
                  <FaBook></FaBook> Mange Booking
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="">
                <NavLink to="/dashboard/home">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendarAlt></FaCalendarAlt> Add Items
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
                    My Carts <small className="badge badge-secondary ms-3"> + {cart?.length || 0}</small>
                  </span>
                </NavLink>
              </li>
            </>
          )}

          <div className="divider divider-neutral"></div>

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
