import React from "react";
import { FaPlay } from "react-icons/fa";
const Banner = () => {
  return (
    <section className="banner">
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
          <button className="button button--primary">
            <span className="banner-btn">Watch now</span>
            <FaPlay />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
