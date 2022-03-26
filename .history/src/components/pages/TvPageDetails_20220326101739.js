import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./tvPageDetails.scss";
const TvPageDetails = () => {
  const { id } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieTV(id), fetcher);
  if (!data) return null;
  const {
    backdrop_path,
    first_air_date,
    last_air_date,
    original_name,
    overview,
  } = data;
  return (
    <>
      <div className="tvDetails">
        <div className="container">
          <div className="tvDetails-main">
            <div className="tvDetails-left">
              <div className="tvDetails-images">
                <img src={tmdbAPI.imagesOriginal(backdrop_path)} alt="" />
              </div>
            </div>
            <div className="tvDetails-right">
              <h3 className="tvDetails-title">{original_name}</h3>
              <div className="tvDetails-date">
                <span>Start: {first_air_date}</span>
                <span>End: {last_air_date}</span>
              </div>
              <p className="tvDetails-desc">{overview}</p>
              <CreditsMovieTV />
            </div>
          </div>
          <TrailerVideo />
          <TodayMovie></TodayMovie>
        </div>
      </div>
    </>
  );
};

// Cast
const CreditsMovieTV = () => {
  const { id } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieInfoTV(id, "credits"), fetcher);
  if (!data) return null;
  const casts = data?.cast;
  return (
    <div className="tvDetails-cast">
      <h3 className="tvDetails-cast--title">Casts</h3>
      <div className="tvDetails-cast--list">
        {casts &&
          casts.length > 0 &&
          casts.slice(0, 4).map((item) => (
            <div className="tvDetails-cast--img" key={item.id}>
              <img src={tmdbAPI.imagesOriginal(item.profile_path)} alt="" />
              <span>{item.name}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

// Trailer
const TrailerVideo = () => {
  const { id } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieInfoTV(id, "videos"), fetcher);
  if (!data) return null;
  const trailer = data?.results;
  return (
    <div className="tvDetails-video">
      <h3 className="tvDetails-video--title">Trailer Movie</h3>
      {trailer &&
        trailer.length > 0 &&
        trailer.slice(0, 1).map((item) => (
          <div className="movie-video--iframe" key={item.id}>
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
        ))}
    </div>
  );
};

// Today Movie
const TodayMovie = () => {
  const { data } = useSWR(tmdbAPI.getMovieTV("airing_today"), fetcher);
  if (!data) return null;
  const today = data?.results;
  console.log(
    "🚀 ~ file: TvPageDetails.js ~ line 108 ~ TodayMovie ~ today",
    today
  );
  return (
    <div className="movie-list">
      <h3 className="movie-heading">Today Movie</h3>
      <Swiper grabCursor={"true"} spaceBetween={15} slidesPerView={"auto"}>
        {today &&
          today.length > 0 &&
          today.map((item) => (
            <SwiperSlide className="swiper-img">
              <div className="tvDetails-today--images">
                <img src={tmdbAPI.imagesOriginal(item.backdrop_path)} />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default TvPageDetails;
