import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import "./WatchTVMovie.scss";
const WatchTvMovie = () => {
  //
  const { id } = useParams();
  //
  const { data } = useSWR(tmdbAPI.getMovieTV(id), fetcher);

  //
  const [query, setQuery] = useState();
  const [url, setUrl] = useState(
    `https://www.2embed.ru/embed/tmdb/tv?id=${id}&s=${query}&e=1`
  );
  const handleChangeOption = (e) => {
    setQuery(e.target.value);
    console.log(e.target.value);
  };
  //
  // useEffect(() => {
  //   if (query) {
  //     setUrl(`https://www.2embed.ru/embed/tmdb/tv?id=${id}&s=${query}&e=1`);
  //   } else {
  //     setUrl(`https://www.2embed.ru/embed/tmdb/tv?id=${id}&s=1&e=1`);
  //   }
  // }, [id, query]);
  if (!data) return null;
  const optionData = data?.seasons;
  return (
    <>
      <div className="watchTV">
        <div className="container">
          <h3 className="movie-heading">WatchTV Movie</h3>
          <div className="watchMovie-video watchTV-video">
            <div className="watchMovie-video--iframe watchTV-video--iframe">
              {/* <iframe
                id="iframe"
                src={url}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> */}
            </div>
          </div>

          <select
            className="watchTV-select"
            onChange={(e) => handleChangeOption(e)}
          >
            {optionData &&
              optionData.length > 0 &&
              optionData.slice(1).map((item) => (
                <option key={item.id} value={item} className="watchTV-option">
                  Season {item.season_number}
                </option>
              ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default WatchTvMovie;
