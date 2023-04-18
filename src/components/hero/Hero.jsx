import "./Hero.scss";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <h1>Discover space</h1>
      </div>
      <div className="divider">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="mid">
        <h4 id="about">
          Wander through space and time with Luna and learn more about what lies
          beyond! Luna's main mission is to expose curious minds to the wonders
          of space.
        </h4>
      </div>
    </>
  );
}
