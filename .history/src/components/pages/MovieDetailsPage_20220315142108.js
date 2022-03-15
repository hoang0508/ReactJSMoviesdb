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
          <h3 className="pageDetails-title h3--hover">{title}</h3>
          <div className="pageDetails-tag">
            {genres &&
              genres.length > 0 &&
              genres.map((item) => <span key={item.id}>{item.name}</span>)}
          </div>
          <div className="pageDetails-desc">{overview}</div>
          <PageCastsMovie />
          <MovieVideo />
        </div>
      </div>
    </div>
  );
};

// pagecats
const PageCastsMovie = () => {
  const { id } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  return (
    <div className="pageDetails-casts">
      <h3 className="pageDetails-casts--title h3--hover">Casts</h3>
      <div className="pageDetails-casts--list">
        {data.cast &&
          data.cast.length > 0 &&
          data.cast.slice(0, 4).map((item) => (
            <div key={item.id}>
              <div className="pageDetails-casts--images">
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                  alt=""
                />
              </div>
              <span className="pageDetails-casts--name">{item.name}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

// MovieVideo
const MovieVideo = () => {
  const { id } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  console.log(
    "🚀 ~ file: MovieDetailsPage.js ~ line 86 ~ MovieVideo ~ data",
    data
  );
  return (
    <>
      {data.results &&
        data.results.length > 0 &&
        data.results.map((item) => (
          <div key={item.id}>
            <iframe
              width="713"
              height="401"
              src={`https://www.youtube.com/embed/${item.key}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        ))}
    </>
  );
};

export default MovieDetailsPage;
