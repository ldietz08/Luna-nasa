import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <div>
          <h1 className="nav__logo">Luna</h1>
        </div>
        <ul className="nav__links">
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/about" className="nav__link">
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/explore" className="nav__link">
              Explore
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
