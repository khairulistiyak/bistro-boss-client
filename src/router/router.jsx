import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Test from "../components/Test/Test";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import History from "../Pages/Dashboard/History/history";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "Contact",
        element: <Contact></Contact>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
      {
        path: "test",
        element: <Test></Test>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "history",
        element: <History></History>,
      },
    ],
  },
]);
export default router;
