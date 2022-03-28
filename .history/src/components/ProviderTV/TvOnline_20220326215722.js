import React from "react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { FaArrowRight } from "react-icons/fa";
import "./TvOnline.scss";
import { useNavigate } from "react-router-dom";
const TvOnline = () => {
  const { data } = useSWR(tmdbAPI.getMovieTV("on_the_air"), fetcher);
  //
  const navigate = useNavigate();
  const handleMovieDetails = (id) => {
    navigate(`tv/${id}`);
  };
  //
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
                  <div
                    className="tvOnline-content"
                    onClick={() => handleMovieDetails(item.id)}
                  >
                    <div className="tvOnline-date">{item.first_air_date}</div>
                    <h3 className="tvOnline-name">{item.name}</h3>
                    <div className="tvOnline-icon">
                      <FaArrowRight />
                    </div>
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
