import React, { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const location = useLocation();
  const naviGate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;

        const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            naviGate(from, { replace: true });
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Successfully Login",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      })
      .catch((error) => {});
  };

  return (
    <div className="p-7">
      <div className="divider">OR</div>
      <div className="flex gap-5 w-full justify-center">
        <button className="btn btn-circle btn-outline">
          <FcGoogle onClick={handleGoogleLogin} className="text-2xl"></FcGoogle>
        </button>
        <button className="btn btn-circle btn-outline ">
          <FaFacebook className="text-2xl text-blue-500"></FaFacebook>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
