import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
const MovieCart = ({ item }) => {
  const { poster_path, title, vote_average, release_date, id } = item;
  // navigate page details
  const navigate = useNavigate();
  const handleClickNavigate = (e) => {
    e.preventDefault();
    navigate(`/movie/${id}`);
  };
  return (
    <div className="movie-item">
      <div className="movie-images">
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
      </div>
      <div className="movie-content">
        <h3 className="movie-title">{title}</h3>
        <div className="movie-info">
          <div className="movie-date">
            {new Date(release_date).getFullYear()}
          </div>
          <div className="movie-rate">
            <span className="movie-vote">{vote_average}</span>
            <FaStar className="movie-icon" />
          </div>
        </div>
        {/* <button
          onClick={(e) => handleClickNavigate(e)}
          className="movie-btn button button--primary button--secondary"
        >
          <span>Watch now</span>
          <FaPlay />
        </button> */}
        <Button onClick={(e) => handleClickNavigate(e)}>Watch now</Button>
      </div>
    </div>
  );
};

export default MovieCart;
