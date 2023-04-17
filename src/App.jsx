import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./App.scss";
import Header from "./components/header/Header";

const API_KEY = `${import.meta.env.VITE_API_KEY}`;

export default function App() {
  const [choice, setChoice] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");
  const [title, setTitle] = useState("");
  const [explanation, setExplanation] = useState("");

  function handleInputChange(event) {
    setChoice(event.target.value);
  }

  function handleClick() {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${choice}`;

    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="bulletin" element={<About />} />
            <Route path="explore" element={<Explore />} /> */}
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    </>
  );
}
