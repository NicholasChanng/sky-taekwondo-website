import "./bottombar.scss";
import skytkd from "../../assets/images/skytkd-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Bottombar() {
  return (
    <div className="section bottom-section">
      <div className="container bottom-container">
        <div className="flex bottom-flex">
          <div className="flex logo-flex">
            <div className="logo">
              <Link to="/">
                <img className="img-logo" src={skytkd} alt="skytkd" />
              </Link>
              <Link to="/">
                <h1 className="bottom sky">SKY TAEKWONDO</h1>
              </Link>
            </div>
            <div className="socials">
              <a
                className="youtube"
                href="https://www.youtube.com/@skytaekwondo770"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  color="black"
                  className="bottom icon"
                />
              </a>
              <a
                className="instagram"
                href="https://www.instagram.com/skytaekwondonj/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  color="black"
                  className="bottom icon"
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
                  className="bottom icon"
                />
              </a>
            </div>
            <div className="flex email">
              <a href="tel:(908) 917-1336">
                <h3 className="bottom-phone-number">(908) 917-1336</h3>
              </a>
              <h3>&nbsp; | &nbsp;</h3>
              <a href="mailto:pskyman1@gmail.com">
                <h3 className="bottom-phone-number"> pskyman1@gmail.com</h3>
              </a>
            </div>
            <div className="bottom-links-container">
              <h3 id="pages">Pages</h3>
              <nav className="bottom-links">
                <Link to="/">
                  <h3>Home </h3>
                </Link>
                <Link to="/instructors">
                  <h3>Instructors </h3>
                </Link>
                <Link to="/schedule">
                  <h3>Schedule </h3>
                </Link>
                <Link to="/reviews">
                  <h3>Reviews </h3>
                </Link>
              </nav>
            </div>
          </div>
          <div className="map-area">
            <div>
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.911851244648!2d-74.53536301049722!3d40.653873467445976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3bc472dcf9ee7%3A0xe10dd534744bf1a4!2sSKY%20Taekwondo!5e0!3m2!1sen!2sus!4v1703927654339!5m2!1sen!2sus"
                width="300"
                height="250"
                loading="lazy"
              />

              <h3 className="map-caption">Basking Ridge</h3>
              <h3 className="map-caption">
                403 King George Rd, Basking Ridge, NJ 07920
              </h3>
            </div>
            <div>
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.8376029143215!2d-74.92519902356425!3d40.63346324241916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c38b718aaa5927%3A0xc8ce7e1f5a2238ea!2sSky%20Taekwondo!5e0!3m2!1sen!2sus!4v1703927767382!5m2!1sen!2sus"
                width="300"
                height="250"
                loading="lazy"
              />
              <h3 className="map-caption"> Clinton</h3>
              <h3 className="map-caption">114 W Main St, Clinton, NJ 08809</h3>
            </div>
          </div>
        </div>
        <section className="line" />
        <div className="copyright">
          <a
            className="github"
            href="https://github.com/NicholasChanng/sky-taekwondo-website"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="black"
              className="bottom icon"
              id="github"
            />
          </a>
          <h3 id="copyright">©2024 by SKY Taekwondo. All rights reserved.</h3>
        </div>
      </div>
    </div>
  );
}
