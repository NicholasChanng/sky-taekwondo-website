import "./socials.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Socials() {
  return (
    <section className="section socials-section">
      <div className="container socials-container">
        <ul className="cards">
          <li className="card">
            430k <span className="highlight">+</span>
            <br />
            <span className="meta-text">Subscribers on YouTube</span>
          </li>
          <li className="card">
            390M <span className="highlight">+</span>
            <br />
            <span className="meta-text">Views on YouTube</span>
          </li>
          <li className="card">
            ? <span className="highlight">+</span>
            <br />
            <span className="meta-text">Views on Instagram</span>
          </li>
        </ul>
        <div className="social-btns">
          <div className="btn">
            <a
              className="youtube"
              href="https://www.youtube.com/@skytaekwondo770"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                color="black"
                className="socials"
              />
              Youtube
            </a>
          </div>
          <div className="btn">
            <a
              className="instagram"
              href="https://www.instagram.com/skytaekwondonj/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                color="black"
                className="socials"
              />
              Instagram
            </a>
          </div>
          <div className="btn">
            <a
              className="facebook"
              href="https://www.facebook.com/baskingridgeskytkd/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                color="black"
                className="socials"
              />
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
