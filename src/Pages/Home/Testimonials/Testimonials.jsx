import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/reviews`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <>
      <div className="mx-auto w-1/2">
        <SectionTitle subHeading={"What Our Clients Say"} heading={"TESTIMONIALS"}></SectionTitle>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex justify-center  ">
              <Rating className="max-w-32 mb-10" value={review.rating} readOnly />
            </div>
            <div className=" text-center px-16">
              <p className="text-xl ">{review.name}</p>
              <p>{review.details}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonials;
