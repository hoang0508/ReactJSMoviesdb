import React from "react";
import { FaStar, FaPlay } from "react-icons/fa";
const MovieCart = () => {
  return (
    <div className="movie-item">
      <div className="movie-images">
        <img
          src="http://genk.mediacdn.vn/2019/8/20/1-15662898065871774855253.jpg"
          alt=""
        />
      </div>
      <h3 className="movie-title">Spiderman: Homecoming</h3>
      <div className="movie-info">
        <div className="movie-date">2017</div>
        <div className="movie-rate">
          <span className="movie-vote">7.4</span>
          <FaStar className="movie-icon" />
        </div>
      </div>
      <button className="button button--primary button--secondary">
        <span>Watch now</span>
        <FaPlay />
      </button>
    </div>
  );
};

export default MovieCart;
