import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher, tmdbAPI } from "../../config";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./MovieDetailsPage.scss";
import MovieCart from "../movies/MovieCart";
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=
const MovieDetailsPage = () => {
  // sử dụng param lấy id
  const { id } = useParams();
  // APi get details
  const { data } = useSWR(tmdbAPI.getMovieDetails(id), fetcher);
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
          <PageSimilar />
        </div>
      </div>
    </div>
  );
};

// pagecats
const PageCastsMovie = () => {
  const { id } = useParams();
  const { data } = useSWR(
    // `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`,
    tmdbAPI.getMovieInfo(id, "credits"),
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
    // `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`,
    tmdbAPI.getMovieInfo(id, "videos"),
    fetcher
  );
  if (!data) return null;
  return (
    <>
      <div className="movie-video">
        {data.results &&
          data.results.length > 0 &&
          data.results.slice(0, 3).map((item) => (
            <div className="movie-video--trailer" key={item.id}>
              <h3 className="movie-video--title">{item.name}</h3>
              <div className="movie-video--iframe">
                <iframe
                  width="713"
                  height="401"
                  src={`https://www.youtube.com/embed/${item.key}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

// Similar
const PageSimilar = () => {
  const { id } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieInfo(id, "similar"), fetcher);
  if (!data) return null;
  console.log(
    "🚀 ~ file: MovieDetailsPage.js ~ line 123 ~ PageSimilar ~ data",
    data
  );
  return (
    <>
      <h3 className="movie-heading">Similar</h3>
      <div className="movie-list">
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {data.results &&
            data.results.length > 0 &&
            data.results.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCart item={item}></MovieCart>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default MovieDetailsPage;
