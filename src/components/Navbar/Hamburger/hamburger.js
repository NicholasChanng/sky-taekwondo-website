import { Link } from "react-router-dom";
import "./hamburger.scss";

export default function Hamburger() {
  return (
    <div>
      <label className="hamburger-menu">
        <input type="checkbox" />
      </label>

      <aside className="links-container">
        <nav className="links">
          <Link to="/">
            <h1>Home </h1>
          </Link>
          <Link to="/instructors">
            <h1>Instructors </h1>
          </Link>
          <Link to="/schedule">
            <h1>Locations </h1>
          </Link>
          <Link to="/reviews">
            <h1>Reviews </h1>
          </Link>
        </nav>
      </aside>
    </div>
  );
}
