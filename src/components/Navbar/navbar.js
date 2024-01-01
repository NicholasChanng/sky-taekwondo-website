import "./navbar.scss";
import skytkd from "../../assets/images/skytkd.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Hamburger from "./Hamburger/hamburger";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar-section">
        <div className="container navbar-container">
          <div className="flex navbar-flex">
            <div className="logo">
              <Link to="/">
                <img className="img-logo" src={skytkd} alt="skytkd" />{" "}
              </Link>
              <Link to="/">
                <h1 className="sky">SKY TAEKWONDO</h1>
              </Link>
              <div className="flex email">
                <a href="tel:(908) 917-1336">
                  <h3 className="top-phone-number">(908) 917-1336</h3>
                </a>
                <h3>&nbsp; | &nbsp;</h3>
                <a href="mailto:pskyman1@gmail.com">
                  <h3 className="top-phone-number">pskyman1@gmail.com</h3>
                </a>
              </div>
            </div>
            <div className="socials">
              <a
                className="instagram"
                href="https://www.instagram.com/skytaekwondonj/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  color="black"
                  className="icon"
                />
              </a>
              <a
                className="facebook"
                href="https://www.facebook.com/baskingridgeskytkd/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  color="black"
                  className="icon"
                />
              </a>
              <a
                className="youtube"
                href="https://www.youtube.com/@skytaekwondo770"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  color="black"
                  className="icon"
                />
              </a>
              <Hamburger />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
