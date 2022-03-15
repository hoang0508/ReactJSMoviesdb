import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../../config";
import "./MovieDetailsPage.scss";
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=
const MovieDetailsPage = () => {
  // sử dụng param lấy id
  const { id } = useParams();
  // APi get details
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { poster_path, backdrop_path, title, genres, overview } = data;
  console.log(data);
  return (
    <div className="pageDetails">
      <div className="pageDetails-bg">
        <div
          className="pageDetails-bg--big"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        >
          <div className="pageDetails-overlay"></div>
        </div>
      </div>
      <div className="pageDetails-bg--small">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt=""
        />
      </div>
      <div className="container">
        <div className="pageDetails-main">
          <h3 className="pageDetails-title">{title}</h3>
          <div className="pageDetails-tag">
            {genres &&
              genres.length > 0 &&
              genres.map((item) => <span key={item.id}>{item.name}</span>)}
          </div>
          <div className="pageDetails-desc">{overview}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
