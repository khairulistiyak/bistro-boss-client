import React from "react";
import FoodCard from "../../../components/FoodCard/FoodCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// TODO:  do implement pagination here on this page ?

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div>
      <div>
        <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className="grid md:grid-cols-3 gap-3 mx-5 my-10 ">
              {items.map((item) => (
                <FoodCard item={item} key={item._id}></FoodCard>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <></>
    </div>
  );
};

export default OrderTab;
