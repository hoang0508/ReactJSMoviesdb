import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";

const TvPageDetails = () => {
  const { id } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieTV(id), fetcher);
  if (!data) return null;
  return (
    <>
      <div className="tvDetails">
        <div className="container">
          <div className="tvDetails-main">
            <div className="tvDetails-left">
              <img
                src="https://media.istockphoto.com/photos/our-favorite-movie-picture-id1334901221?b=1&k=20&m=1334901221&s=170667a&w=0&h=i7I4FNLTIoDbDspdgSfv8dXREReqh6T-mW3MldB7Bic="
                alt=""
              />
            </div>
            <div className="tvDetails-right"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TvPageDetails;
