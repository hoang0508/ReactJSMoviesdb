import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/layout/Main";
import HomePage from "./components/pages/HomePage";
import MovieDetailsPage from "./components/pages/MovieDetailsPage";
import MoviePage from "./components/pages/MoviePage";
import TVPage from "./components/pages/TVPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviePage />}></Route>
          <Route path="/movie/:id" element={<MovieDetailsPage />}></Route>
          <Route path="/tv" element={<TVPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
