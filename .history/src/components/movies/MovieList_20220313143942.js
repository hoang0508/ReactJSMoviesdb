import React from "react";
import MovieCart from "./MovieCart";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
const MovieList = () => {
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        <SwiperSlide>
          <MovieCart />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCart />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCart />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCart />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCart />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCart />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MovieList;
