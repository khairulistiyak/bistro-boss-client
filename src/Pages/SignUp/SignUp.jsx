import React, { useContext, useState } from "react";
import { set, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const [showToggled, setShowToggled] = useState(false);
  const [passType, setPassType] = useState();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  // -----------------------------------------
  // -----------------------------------------
  // -----------------------------------------
  // -----------------------------------------
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUSer = result.user;
        updateUserProfile(data.displayName, data.photoURl)
          .then(() => {
            const saveUser = { name: data.displayName, email: data.email };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                reset();
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Your work has been saved",
                  showConfirmButton: false,
                  timer: 1500,
                });
              });
            navigate("/");
          })
          .catch((error) => {});
      })

      .catch((error) => {
        if (error.message == "Firebase: Error (auth/email-already-in-use).") {
          setError("This email already use");
        }
      });
  };
  // -----------------------------------------
  // -----------------------------------------
  const handleShow = () => {
    setShowToggled(!showToggled);
    if (showToggled) {
      setPassType("text");
    } else {
      setPassType("password");
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6  text-center">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  defaultValue=""
                  name="displayName"
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  {...register("displayName", { required: true })}
                />
                {errors.name && <span className="text-red-500">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  defaultValue=""
                  type="text"
                  placeholder="Your Photo URL"
                  className="input input-bordered"
                  {...register("photoURl", { required: true })}
                />
                {errors.name && <span className="text-red-500">Photo URL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input defaultValue="" type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                {errors.email && <span className="text-red-500">Email is required</span>}
                <small className="text-red-500 mt-2">{error}</small>
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <input
                  defaultValue=""
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  })}
                  type={passType}
                  placeholder="password "
                  className=" input input-bordered "
                />
                <div className="  w-full">
                  <div onClick={handleShow} className=" relative bottom-7 left-72 p-0">
                    {showToggled ? (
                      <>
                        <VscEye></VscEye>
                      </>
                    ) : (
                      <>
                        <VscEyeClosed />
                      </>
                    )}
                  </div>
                </div>
                {errors.password?.type === "required" && <p className="text-red-600">First is required</p>}
                {errors.password?.type === "maxLength" && <p className="text-red-600">password mustbe </p>}
                {errors.password?.type === "minLength" && <p className="text-red-600 my-3">Password minimum 6 character</p>}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600 my-3 ">Password minimum 6 and one uppercase one lowercase one special character character</p>
                )}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>

              <div className="text-center">
                displayName
                <small>
                  Already registered?{" "}
                  <Link to={"/login"} className="font-semibold text-yellow-600">
                    Go to log in
                  </Link>
                </small>
              </div>
            </form>
            <div>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
