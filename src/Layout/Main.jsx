import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import NavBar from "../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Main = () => {
  const { loading } = useContext(AuthContext);
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signUp") || loading;
  return (
    <div>
      {noHeaderFooter || <NavBar></NavBar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
