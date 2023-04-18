import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Explore from "./components/explore/Explore";

export default function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    </>
  );
}
