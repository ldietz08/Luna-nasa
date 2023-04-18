import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Explore from "./components/explore/Explore";
import MarsInfo from "./components/mars-info/MarsInfo";

export default function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/Mars" element={<MarsInfo />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    </>
  );
}
