import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CreditsMovieTV = () => {
  return (
    <div className="tvDetails-cast">
      <h3 className="tvDetails-cast--title">Casts</h3>
      <div className="tvDetails-cast--list">
        <div>
          <img src="" alt="" />
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default TvPageDetails;
