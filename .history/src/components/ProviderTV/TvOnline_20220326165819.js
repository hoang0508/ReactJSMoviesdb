import React from "react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { FaArrowRight } from "react-icons/fa";
import "./TvOnline.scss";
const TvOnline = () => {
  const { data } = useSWR(tmdbAPI.getMovieTV("on_the_air"), fetcher);
  if (!data) return null;
  const tvOnline = data?.results;
  return (
    <>
      <div className="movie-list">
        <Swiper grabCursor={"true"} spaceBetween={30} slidesPerView={"auto"}>
          {tvOnline &&
            tvOnline.length > 0 &&
            tvOnline.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="tvOnline">
                  <div className="tvOnline-images">
                    <img
                      src={tmdbAPI.imagesOriginal(item.backdrop_path)}
                      alt=""
                    />
                  </div>
                  <div className="tvOnline-content">
                    <div className="tvOnline-date">{item.first_air_date}</div>
                    <h3 className="tvOnline-name">
                      {item.name} <FaArrowRight />
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default TvOnline;
