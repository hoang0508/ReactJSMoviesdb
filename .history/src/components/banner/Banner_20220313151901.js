import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import useSWR from "swr";
import { fetcher } from "../../config";
import "./Banner.scss";
const Banner = () => {
  const [banner, setBanner] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=6dc4483c77b849ecbf002144ee64855d`,
    fetcher
  );
  // useEffect(() => {

  // }, [data])
  console.log(data);
  return (
    <section className="banner">
      <div className="container">
        <BannerItem />
      </div>
    </section>
  );
};

const BannerItem = () => {
  return (
    <div className="banner-main">
      <div className="banner-images">
        <img
          src="http://genk.mediacdn.vn/2019/8/20/1-15662898065871774855253.jpg"
          alt=""
        />
      </div>
      <div className="banner-content">
        <h3 className="banner-heading">Avengers: Endgame</h3>
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
