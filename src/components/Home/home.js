import "./home.scss";
import logo from "../../assets/images/skytkd-white.png";
// import Park from "../Park/park";
import Youtube from "../Youtube/youtube";
import About from "../About/about";
// import Location from "../Location/location";

const Home = () => {
  return (
    <>
      <section className="section home-section">
        <div className="container home-container">
          <div className="flex home-flex">
            <img src={logo} alt="logo" />
            <h1 className="h1">SKY TAEKWONDO</h1>
            <h3 className="h3">Martial Arts School</h3>
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

      {/* <Location /> */}

      <Youtube />

      {/* <Park /> */}
    </>
  );
};

export default Home;
