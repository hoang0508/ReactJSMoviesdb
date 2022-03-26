import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import "./tvPageDetails.scss";
const TvPageDetails = () => {
  const { id } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieTV(id), fetcher);
  if (!data) return null;

  return (
    <>
      <div className="tvDetails">
        <div className="container">
          <div className="tvDetails-main">
            <ItemDetailsPage />
          </div>
        </div>
      </div>
    </>
  );
};

const ItemDetailsPage = () => {
  return (
    <>
      <div className="tvDetails-left">
        <div className="tvDetails-images">
          <img
            src="https://media.istockphoto.com/photos/our-favorite-movie-picture-id1334901221?b=1&k=20&m=1334901221&s=170667a&w=0&h=i7I4FNLTIoDbDspdgSfv8dXREReqh6T-mW3MldB7Bic="
            alt=""
          />
        </div>
      </div>
      <div className="tvDetails-right">
        <h3 className="tvDetails-title">Lorem ipsum dolor</h3>
        <div className="tvDetails-date">2022-24-3</div>
        <p className="tvDetails-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id
          consectetur repellat officia libero consequuntur, eius, fugit
          voluptates quae ut quas magnam, nobis incidunt molestias sequi
          asperiores quod amet reiciendis.
        </p>
      </div>
    </>
  );
};

export default TvPageDetails;
