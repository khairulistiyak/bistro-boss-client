// useAxiosSecure.js
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          // Token is invalid or missing, log out and navigate to the login page
          await logOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );

    // Clean up interceptors when component unmounts
  }, [logOut, navigate, axiosSecure]);

  return [axios, axiosSecure];
};

export default useAxiosSecure;
