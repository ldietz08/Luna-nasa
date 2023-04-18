import "./Explore.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Explore() {
  const [choice, setChoice] = useState("");
  const [apod, setApod] = useState([]);
  const API_KEY = `${import.meta.env.VITE_API_KEY}`;
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${choice}`;

  function handleInputChange(event) {
    setChoice(event.target.value);
  }

  const getPic = () => {
    axios
      .get(url)
      .then((response) => {
        setApod(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="apod">
        <input
          className="input"
          type="date"
          onChange={(e) => {
            setChoice(e.target.value);
          }}
        />
        <button onClick={getPic} className="btn">
          Get pic
        </button>
      </div>
      {apod && (
        <div>
          <h2 className="apod__title">{apod.title}</h2>
          {apod.media_type === "image" && (
            <img src={apod.url} alt={apod.title} className="apod__media" />
          )}
          {apod.media_type === "video" && (
            <iframe
              className="apod__media"
              title={apod.title}
              src={apod.url}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          )}
          <p className="apod__explanation">{apod.explanation}</p>
        </div>
      )}
    </>
  );
}
