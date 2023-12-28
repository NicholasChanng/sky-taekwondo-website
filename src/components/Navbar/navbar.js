import "./navbar.scss";
import skytkd from "../../assets/images/skytkd.png";

export default function Navbar() {
  return (
    <>
      <div className="navbar-section">
        <div className="container navbar-container">
          <div className="flex">
            <div className="logo">
              <a href="/">
                <img className="img-logo" src={skytkd} alt="skytkd" />
              </a>
              <a href="/">
                <h1>Sky Taekwondo</h1>
              </a>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
}
