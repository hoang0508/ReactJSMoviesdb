import React from "react";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import "./components/movies/Movie.scss";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <section className="movie">
        <h2 className="movie-heading">Now Playing</h2>
      </section>
    </>
  );
}

export default App;
