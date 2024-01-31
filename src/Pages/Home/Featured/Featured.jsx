import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <>
      <div className="mx-auto w-1/2">
        <SectionTitle subHeading={"Check it out"} heading={"Featured item"}></SectionTitle>
      </div>
      <div className="background-img text-white py-5 md:px-10 bg-fixed">
        <div className="md:flex justify-center items-center bg-slate-900 bg-opacity-30 py-10 px-5 md:space-x-10 rounded">
          <div className="">
            <img src={featuredImg} alt="" />
          </div>
          <div className="">
            <p className="my-3">Aug 20, 2029</p>
            <p className="uppercase mb-5">Where can i get Some</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsum libero eligendi amet a dolorem porro similique cupiditate, labore
              harum reiciendis laboriosam odit magnam quasi in, quaerat quae eveniet voluptate.
            </p>
            <Link to="/menu">
              <button className="btn bg-yellow-400 mt-5"> Order Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
