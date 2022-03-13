import React, { useState } from "react";
import MovieCart from "./MovieCart";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import useSWR from "swr";
import { fetcher } from "../../config";
// https://api.themoviedb.org/3/movie/now_playing?api_key=6dc4483c77b849ecbf002144ee64855d
const MovieList = () => {
  const [movie, setMovie] = useState([]);
  const { data } = useSWR(
    ` https://api.themoviedb.org/3/movie/now_playing?api_key=6dc4483c77b849ecbf002144ee64855d`,
    fetcher
  );
  console.log(data?.results);
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
