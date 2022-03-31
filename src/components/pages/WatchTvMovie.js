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
  const [query, setQuery] = useState(Number(1));
  const [episode, setEpisode] = useState(Number(1));
  // url
  const [url, setUrl] = useState(
    `https://www.2embed.ru/embed/tmdb/tv?id=${id}&s=${query}&e=${episode}`
  );
  const handleChangeOption = (e) => {
    setQuery(Number(e.target.value));
    setEpisode(Number(e.target.value));
  };
  //
  useEffect(() => {
    if (query || episode) {
      setUrl(
        `https://www.2embed.ru/embed/tmdb/tv?id=${id}&s=${query}&e=${episode}`
      );
    } else {
      setUrl(`https://www.2embed.ru/embed/tmdb/tv?id=${id}&s=1&e=1`);
    }
  }, [episode, id, query]);
  if (!data) return null;
  const dataSeason = data?.seasons;
  const dataInfo =
    dataSeason.length > 0 &&
    dataSeason.find((item) => item.season_number === query);
  return (
    <>
      <div className="watchTV">
        <div className="container">
          <h3 className="movie-heading">WatchTV Movie</h3>
          <div className="watchMovie-video watchTV-video">
            <div className="watchMovie-video--iframe watchTV-video--iframe">
              <iframe
                id="iframe"
                src={url}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="watchTV-select--movie">
            <div>
              <h2 className="watchTV-select--title">Movie part</h2>
              <select
                className="watchTV-select"
                onChange={(e) => handleChangeOption(e)}
              >
                {dataSeason &&
                  dataSeason.length > 0 &&
                  dataSeason.map((item) => (
                    <option
                      key={item.id}
                      value={item.season_number}
                      className="watchTV-option"
                    >
                      {`${
                        Number(item.season_number) >= 1
                          ? `Season ${Number(item.season_number)}`
                          : "Season"
                      }`}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div>
            <WatchTVinfo item={dataInfo}></WatchTVinfo>
          </div>
        </div>
      </div>
    </>
  );
};

const WatchTVinfo = ({ item }) => {
  const { overview, poster_path, name, air_date } = item;
  return (
    <>
      <div className="watchInfo">
        <h3 className="watchInfo-title">{name}</h3>
        <div className="watchInfo-season">
          <div className="watchInfo-images">
            <img src={tmdbAPI.imagesOriginal(poster_path)} alt="" />
          </div>
          <div className="watchInfo-content">
            <div className="watchInfo-desc">{overview}</div>
            <div className="watchInfo-date">{air_date}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchTvMovie;
