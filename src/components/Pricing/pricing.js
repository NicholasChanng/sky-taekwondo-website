import "./pricing.scss";
import reviews1 from "../../assets/images/reviews1.png";
import reviews2 from "../../assets/images/reviews2.png";

export default function Pricing() {
  return (
    <section className="top-section section pricing-section">
      <div className="container pricing-container">
        Reviews
        <div className="flex pricing-flex">
          <img src={reviews1} alt="reviews"></img>
          <img src={reviews2} alt="reviews"></img>
          {/* <iframe
          src="https://widgets.sociablekit.com/google-reviews/iframe/25349060"
          frameborder="0"
          width="100%"
          height="1000"
        ></iframe> */}
        </div>
      </div>
    </section>
  );
}
