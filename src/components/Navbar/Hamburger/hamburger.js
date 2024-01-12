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
            <h1>Schedule </h1>
          </Link>
          <Link to="/programs">
            <h1>Programs </h1>
          </Link>
        </nav>
      </aside>
    </div>
  );
}
