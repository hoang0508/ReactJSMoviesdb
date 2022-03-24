import React from "react";
import { FaEye, FaPlay } from "react-icons/fa";
import useSWR from "swr";
import { apiKey, fetcher } from "../../config";
import "./TVPage.scss";
const TVPage = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`,
    fetcher
  );

  if (!data) return null;
  const tvMovie = data?.results || [];
  console.log(tvMovie);
  return (
    <div className="tvPage">
      <div className="container">
        <div className="tvPage-main">
          <div className="tvPage-list">
            {tvMovie &&
              tvMovie.length > 0 &&
              tvMovie.map((item) => <TvPageItem key={item.id} item={item} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

const TvPageItem = () => {
  return (
    <div className="tvPage-item">
      <div className="tvPage-watch">
        <div className="tvPage-images">
          <img
            src="https://media.istockphoto.com/photos/woman-watching-tv-series-and-movies-via-streaming-service-at-home-picture-id1317797291?b=1&k=20&m=1317797291&s=170667a&w=0&h=6pZa-S1EXfdYy581tLA-sx2hiI-CiomD5ENPgLHx3Ms="
            alt=""
          />
        </div>
        <div className="tvPage-play">
          <FaPlay />
        </div>
      </div>
      <div className="tvPage-content">
        <h3 className="tvPage-title">Pasión de gavilanes</h3>
        <div className="tvPage-popular">
          <span></span>
          <span>
            <FaEye />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TVPage;
