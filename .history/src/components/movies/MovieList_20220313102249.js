import React from "react";
import { FaStar } from "react-icons/fa";
const MovieList = () => {
  return (
    <div className="movie-list">
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
        .
      </div>
    </div>
  );
};

export default MovieList;
