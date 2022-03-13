import React from "react";
import { FaStar, FaPlay } from "react-icons/fa";
const MovieCart = ({ item }) => {
  const { poster_path, title, vote_average, release_date } = item;
  return (
    <div className="movie-item">
      <div className="movie-images">
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
      </div>
      <div className="movie-content">
        <h3 className="movie-title">{title}</h3>
        <div className="movie-info">
          <div className="movie-date">{new Date(release_date).getFullYear}</div>
          <div className="movie-rate">
            <span className="movie-vote">{vote_average}</span>
            <FaStar className="movie-icon" />
          </div>
        </div>
        <button className="movie-btn button button--primary button--secondary">
          <span>Watch now</span>
          <FaPlay />
        </button>
      </div>
    </div>
  );
};

export default MovieCart;
