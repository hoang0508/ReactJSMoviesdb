import React from "react";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import "./components/movies/Movie.scss";
import MovieList from "./components/movies/MovieList";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <section className="movie">
        <div className="container">
          <div className="movie-main">
            <h2 className="movie-heading">Now Playing</h2>
            <MovieList />
          </div>
        </div>
      </section>
      <section className="movie">
        <div className="container">
          <div className="movie-main">
            <h2 className="movie-heading">Top Rated</h2>
            <MovieList />
          </div>
        </div>
      </section>
      <section className="movie">
        <div className="container">
          <div className="movie-main">
            <h2 className="movie-heading">Trending Movie</h2>
            <MovieList />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
