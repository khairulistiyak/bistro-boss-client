import React, { useContext, useEffect, useRef, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const { createUser } = useContext(AuthContext);
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    loadCaptchaEnginge(4);
  }, []);

  const handleValidateCaptcha = () => {
    const userCaptchaValue = captchaRef.current.value;
    console.log(userCaptchaValue);
    if (validateCaptcha(userCaptchaValue)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-16">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                {/* captcha Validation */}

                <label className="label">
                  <LoadCanvasTemplate></LoadCanvasTemplate>
                </label>
                <input name="captcha" ref={captchaRef} type="text" placeholder="Type the text about " className="input input-bordered" required />
                <button onClick={handleValidateCaptcha} className="btn btn-outline mt-5 btn-xs">
                  Validate
                </button>
              </div>
              <div className="form-control mt-3">
                <button disabled={disabled} className="btn  btn-primary">
                  Login
                </button>
              </div>
              <p>
                <div className="text-center">
                  <small>
                    New here?{" "}
                    <Link to={"/signUp"} className="font-semibold text-yellow-600">
                      Create a New Account
                    </Link>
                  </small>
                </div>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
