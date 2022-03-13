import React from "react";
import MovieCart from "./MovieCart";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
const MovieList = () => {
  return (
    <div className="movie-list">
      <Swiper>
        <div className="movie-list--swiper">
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
        </div>
      </Swiper>
    </div>
  );
};

export default MovieList;
