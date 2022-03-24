import React from "react";
import { FaEye } from "react-icons/fa";
const TVPage = () => {
  return (
    <div className="tvPage">
      <div className="container">
        <div className="tvPage-main">
          <div className="tvPage-list">
            <div className="tvPage-item">
              <div className="tvPage-images">
                <img
                  src="https://media.istockphoto.com/photos/woman-watching-tv-series-and-movies-via-streaming-service-at-home-picture-id1317797291?b=1&k=20&m=1317797291&s=170667a&w=0&h=6pZa-S1EXfdYy581tLA-sx2hiI-CiomD5ENPgLHx3Ms="
                  alt=""
                />
              </div>
              <div className="tvPage-content">
                <h3 className="tvPage-title">Pasión de gavilanes</h3>
                <div className="tvPage-popular">
                  <span></span>
                  <span>
                    <FaEye />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVPage;
