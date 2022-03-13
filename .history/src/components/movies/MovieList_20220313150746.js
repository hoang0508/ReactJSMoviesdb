import React, { useEffect, useState } from "react";
import MovieCart from "./MovieCart";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import useSWR from "swr";
import { fetcher } from "../../config";
// https://api.themoviedb.org/3/movie/now_playing?api_key=6dc4483c77b849ecbf002144ee64855d
const MovieList = ({ type = "now_playing" }) => {
  const [movie, setMovie] = useState([]);
  // fetching api data
  const { data } = useSWR(
    ` https://api.themoviedb.org/3/movie/${type}?api_key=6dc4483c77b849ecbf002144ee64855d`,
    fetcher
  );
  // useEffect
  useEffect(() => {
    setMovie(data?.results);
  }, [data]);
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movie &&
          movie.length > 0 &&
          movie.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCart item={item}></MovieCart>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
