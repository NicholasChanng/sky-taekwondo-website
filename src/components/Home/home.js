import "./home.scss";
import logo from "../../assets/images/skytkd-white.png";
// import Park from "../Park/park";
// import Slider from "../Image Containers/Slider/slider";
import Scroller from "../Image Containers/Scroller/scroller";
import About from "../About/about";
import Youtube from "../Youtube/youtube";
import Instagram from "../Instagram/instagram";

// import Location from "../Location/location";

const Home = () => {
  return (
    <>
      <section className="top-section section home-section">
        <div className="container home-container">
          <div className="flex home-flex">
            <img src={logo} alt="logo" />
            <h1>SKY TAEKWONDO</h1>
            <h3>Martial Arts School</h3>
            <div className="grid location-grid">
              <div id="basking" className="location">
                <h1>SKY Taekwondo Basking Ridge</h1>
                <h2>403 King George Rd, Basking Ridge, NJ 07920</h2>
              </div>
              <div id="clinton" className="location">
                <h1>SKY Taekwondo Clinton</h1>
                <h2>114 W Main St, Clinton, NJ 08809</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      {/* <Slider /> */}

      <Scroller />

      {/* <Location /> */}

      <Youtube />

      {/* <Park /> */}

      <Instagram />
    </>
  );
};

export default Home;
