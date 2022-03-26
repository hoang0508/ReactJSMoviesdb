import React from "react";
import Banner from "../banner/Banner";
import MovieList from "../movies/MovieList";
import ProviderTV from "../ProviderTV/ProviderTV";
import TvOnline from "../ProviderTV/TvOnline";

const HomePage = () => {
  return (
    <>
      <Banner />
      <section className="movie">
        <div className="container">
          <div className="movie-main">
            <h2 className="movie-heading">Now Playing</h2>
            <MovieList type="now_playing"></MovieList>
          </div>
        </div>
      </section>
      <section className="movie">
        <div className="container">
          <div className="movie-main">
            <h2 className="movie-heading">Top Rated</h2>
            <MovieList type="top_rated"></MovieList>
          </div>
        </div>
      </section>
      <section className="movie">
        <div className="container">
          <div className="movie-main">
            <h2 className="movie-heading">Trending Movie</h2>
            <MovieList type="popular"></MovieList>
          </div>
        </div>
      </section>
      <section className="movie">
        <div className="container">
          <div className="movie-main">
            <h2 className="movie-heading">Tv Online</h2>
            <TvOnline />
          </div>
        </div>
      </section>
      <section className="movie">
        <div className="container">
          <div className="movie-main">
            <h2 className="movie-heading">Watch Provider</h2>
            <ProviderTV />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
