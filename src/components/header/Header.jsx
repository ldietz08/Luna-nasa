import "./Header.scss";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <div>
          <h1 className="nav__logo">Luna</h1>
        </div>
        <ul className="nav__links">
          <li className="nav__item">
            <a href="index.html" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="/pages/mars.html" className="nav__link">
              Explore
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
