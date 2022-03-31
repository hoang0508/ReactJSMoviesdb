import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./MovieDetailsPage.scss";
import { MovieCart } from "../movies/MovieCart";
import Button from "../button/Button";
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=
const MovieDetailsPage = () => {
  // sử dụng param lấy id
  const { id } = useParams();
  // navigate ==> Watch Movie
  const navigate = useNavigate();
  const handleWatchMovie = (id) => {
    navigate(`watch/${id}`);
  };
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
            backgroundImage: `url(${tmdbAPI.imagesOriginal(backdrop_path)})`,
          }}
        >
          <div className="overlay"></div>
        </div>
      </div>
      <div className="pageDetails-bg--small">
        <img
          // src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          src={tmdbAPI.imagesOriginal(poster_path)}
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
          <Button
            className="pageDetails-btn"
            onClick={() => handleWatchMovie(id)}
          >
            Watch Movie
          </Button>
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
