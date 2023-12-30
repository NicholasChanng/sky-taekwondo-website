import "./bottombar.scss";
import skytkd from "../../assets/images/skytkd-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Bottombar() {
  return (
    <div className="section bottom-section">
      <div className="container bottom-container">
        <div className="flex bottom-flex">
          <div className="flex logo-flex">
            <div className="logo">
              <a href="/">
                <img className="img-logo" src={skytkd} alt="skytkd" />
              </a>
              <a href="/">
                <h1 className="bottom sky">SKY TAEKWONDO</h1>
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
            </div>
            <div className="email">
              <h3>(908) 917-1336 | pskyman1@gmail.com</h3>
            </div>
          </div>
          <div>
            <iframe
              className="maps"
              title="map"
              width="300"
              height="250"
              loading="lazy"
              allowfullscreen
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ3_fCZ0e8w4kRn-ck-uLJhuY&key=AIzaSyBTGPwNk0diOT1wrQ14fq5Swu0hQTdNtmo"
            ></iframe>
            <iframe
              className="maps"
              title="map"
              width="300"
              height="250"
              loading="lazy"
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJMyGeQ-KKw4kRxXbDJsb2Tvs&key=AIzaSyCIrki-wZ7DBxOXNKtm2ir3czMjNDy2p24"
            ></iframe>
          </div>
        </div>
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
          <h3 id="copyright">©2023 by SKY Taekwondo. All rights reserved.</h3>
        </div>
      </div>
    </div>
  );
}
