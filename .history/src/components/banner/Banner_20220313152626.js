import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import useSWR from "swr";
import { fetcher } from "../../config";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Banner.scss";

const Banner = () => {
  const [banner, setBanner] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=6dc4483c77b849ecbf002144ee64855d`,
    fetcher
  );
  useEffect(() => {
    setBanner(data?.results);
  }, [data]);
  return (
    <section className="banner">
      <div className="container">
        <div className="banner-list">
          <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
            <SwiperSlide>
              {banner &&
                banner.length > 0 &&
                banner.map((item) => <BannerItem key={item.id} item={item} />)}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

const BannerItem = ({ item }) => {
  const { title, poster_path } = item;
  return (
    <div className="banner-main">
      <div className="banner-images">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt=""
        />
      </div>
      <div className="banner-content">
        <h3 className="banner-heading">{title}</h3>
        <div className="banner-tag">
          <span className="banner-tag--name">Action</span>
          <span className="banner-tag--name">Adventure</span>
          <span className="banner-tag--name">Drama</span>
        </div>
        <button className="banner-btn button button--primary">
          <span className="banner-btn--text">Watch now</span>
          <FaPlay />
        </button>
      </div>
    </div>
  );
};

export default Banner;
