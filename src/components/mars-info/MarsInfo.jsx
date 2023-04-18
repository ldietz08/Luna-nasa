import "./MarsInfo.scss";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function MarsInfo() {
  const [apod, setApod] = useState([]);
  const API_KEY = `${import.meta.env.VITE_API_KEY}`;
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=10&api_key=${API_KEY}`;

  const getPic = () => {
    axios
      .get(url)
      .then((response) => {
        setApod(response.data.photos);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="mars">
        <iframe
          src="https://giphy.com/embed/13cxHLqRer5q6s"
          width="426"
          height="480"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
          className="gif"
        ></iframe>
        <div className="rover__btn">
          <button onClick={getPic} className="button">
            Curiosity rover photos
          </button>
        </div>
        <div className="rover__photos">
          {apod?.map((photo) => (
            <img
              src={photo.img_src}
              alt={photo.id}
              key={photo.id}
              className="rover__photo"
            />
          ))}
        </div>
      </div>
    </>
  );
}
