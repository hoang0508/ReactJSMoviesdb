import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/layout/Main";

const HomePage = lazy(() => import("./components/pages/HomePage"));
const MovieDetailsPage = lazy(() =>
  import("./components/pages/MovieDetailsPage")
);
const MoviePage = lazy(() => import("./components/pages/MoviePage"));
const TVPage = lazy(() => import("./components/pages/TVPage"));
const TvPageDetails = lazy(() => import("./components/pages/TvPageDetails"));
const WatchMoviePage = lazy(() => import("./components/pages/WatchMoviePage"));

function App() {
  return (
    <>
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={<Main />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/movies" element={<MoviePage />}></Route>
            <Route path="/movie/:id" element={<MovieDetailsPage />}></Route>
            <Route path="/tv" element={<TVPage />}></Route>
            <Route path="/tv/:id" element={<TvPageDetails />}></Route>
            <Route
              path="/movie/:id/watch/:id"
              element={<WatchMoviePage />}
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
