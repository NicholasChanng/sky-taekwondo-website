import "./navbar.scss";
import skytkd from "../../assets/images/skytkd.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  return (
    <>
      <div className="navbar-section">
        <div className="container navbar-container">
          <div className="flex navbar-flex">
            <div className="logo">
              <a href="/">
                <img className="img-logo" src={skytkd} alt="skytkd" />
              </a>
              <a href="/">
                <h1>Sky Taekwondo</h1>
              </a>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
