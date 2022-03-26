import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import LoadingSkeleton from "../loading/LoadingSkeleton";
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
        <Button onClick={(e) => handleClickNavigate(e)}>Watch now</Button>
      </div>
    </div>
  );
};

const MovieCartSkeleton = () => {
  return (
    <div className="movie-item">
      <LoadingSkeleton
        width="100%"
        height="250px"
        radius="8px"
        margin="0 auto 20px"
      />
      <div className="movie-content">
        <h3 className="movie-title">
          <LoadingSkeleton width="100%" height="20px" />
        </h3>
        <div className="movie-info">
          <LoadingSkeleton width="100%" height="10px" />

          <div className="movie-rate">
            <span className="movie-vote">
              <LoadingSkeleton width="100%" height="10px" />
            </span>
            <FaStar className="movie-icon" />
          </div>
        </div>
        <LoadingSkeleton width="100%" height="45px" radius="8px" />
      </div>
    </div>
  );
};

export { MovieCart, MovieCartSkeleton };
