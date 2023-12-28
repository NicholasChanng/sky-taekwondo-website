import "./home.scss";
import logo from "../../assets/images/skytkd-white.png";

export default function Home() {
  return (
    <>
      <section className="section home-section">
        <div className="container home-container">
          <div className="flex home-flex">
            <img src={logo} alt="logo" />
            <h1 className="h1">Sky Taekwondo</h1>
            <h3 className="h3">Martial Arts School</h3>
          </div>
        </div>
      </section>
    </>
  );
}
