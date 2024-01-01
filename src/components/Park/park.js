import "./park.scss";
import park from "../../assets/images/park.jpeg";

export default function Park() {
  return (
    <section className="top-section section contact-section">
      <div className="container contact-containers">
        <div className="flex contact-flex">
          <div className="picture">
            <h1>Grand Master Chun Myung Park</h1>
            <img id="park" src={park} alt="park" />
          </div>
        </div>
      </div>
    </section>
  );
}
