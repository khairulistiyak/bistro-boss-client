import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaCartArrowDown, FaWallet, FaCalendarAlt, FaHome, FaShapes, FaUtensils, FaList, FaBook, FaUsers } from "react-icons/fa";

import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import Spinner from "../components/Spinner/Spinner";

const Dashboard = () => {
  const [cart] = useCart();
  // TODO : LOAD DATA FROM SERVER TO HAVE DYNAMIC IS ADMIN BASED ON DATA

  // const isAdmin = true;
  const [isAdmin, isAdminLoading] = useAdmin();

  if (isAdminLoading) {
    return <Spinner></Spinner>;
  }

  // Handle initial undefined value for isAdmin
  const isAdminTrue = isAdmin && isAdmin[0];

  // console.log(isAdmin);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center  ">
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>

        <div className="w-full px-5">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-[#D1A054]">
          {/* Sidebar content here */}

          {isAdmin ? (
            <>
              <li className="">
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItem">
                  <FaUtensils></FaUtensils> Add an Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
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
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendarAlt></FaCalendarAlt> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaWallet></FaWallet> Payment History
                </NavLink>
              </li>
              <li className="inline">
                <NavLink to="/dashboard/myCart">
                  <FaCartArrowDown></FaCartArrowDown>
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
