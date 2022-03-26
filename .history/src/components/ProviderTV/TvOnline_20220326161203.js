import React from "react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import "./TvOnline.scss";
const TvOnline = () => {
  const { data } = useSWR(tmdbAPI.getMovieTV("on_the_air"), fetcher);
  if (!data) return null;
  const tvOnline = data?.results;
  console.log(
    "🚀 ~ file: TvOnline.js ~ line 9 ~ TvOnline ~ tvOnline",
    tvOnline
  );
  return (
    <>
      <div className="tvOnline">
        <div className="tvOnline-images">
          <img
            src="https://media.istockphoto.com/photos/woman-using-a-laptop-picture-id1137680148?b=1&k=20&m=1137680148&s=170667a&w=0&h=uUjslajj8DUlKKeAtpnzZeFAlBhiYoYGPEEQv_xo-OA="
            alt=""
          />
        </div>
        <div className="tvOnline-content">
          <div className="tvOnline-date">2003-10-21</div>
          <h3 className="tvOnline-name">Pasión de gavilanes</h3>
        </div>
      </div>
    </>
  );
};

export default TvOnline;
