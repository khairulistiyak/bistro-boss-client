import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaCartArrowDown } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut().then().catch();
  };
  const navMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order</Link>
      </li>
      <li>
        <Link to="/Contact">Contact</Link>
      </li>
      <li>
        <Link to="/secret">secret</Link>
      </li>
      <li>
        <Link to="/test">test</Link>
      </li>
      <li>
        <Link>
          <button class="flex items-center">
            <FaCartArrowDown className="text-2xl me-2" />

            <div class="badge badge-secondary">{cart?.length || 0}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          <li>
            <Link onClick={handleLogOut}>LogOut</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar  fixed bg-opacity-30 z-10 max-w-screen-lg bg-slate-900 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
              {navMenu}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-white">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{navMenu}</ul>
        </div>

        <div className="navbar-end">
          {user ? <p className="me-5 text-white font-bold">{user.displayName}</p> : ""}
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
