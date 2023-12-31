import "./scroller.scss";
import img2 from "../../../assets/images/slider/photo2.jpeg";
import img3 from "../../../assets/images/slider/photo3.jpeg";
import img4 from "../../../assets/images/slider/photo4.jpeg";
import img5 from "../../../assets/images/slider/photo5.jpeg";
import img6 from "../../../assets/images/slider/photo6.jpeg";
import img7 from "../../../assets/images/slider/photo7.jpg";
import img8 from "../../../assets/images/slider/photo8.jpg";
import img9 from "../../../assets/images/slider/photo9.jpg";

export default function Scroller() {
  return (
    <section className="section scroller-section">
      <div className="scroller">
        <ul className="skills-list scroller-inner">
          <li>
            <img src={img5} alt="img5" />
          </li>
          <li>
            <img src={img6} alt="img6" />
          </li>
          <li>
            <img src={img3} alt="img3" />
          </li>
          <li>
            <img src={img4} alt="img4" />
          </li>
          <li>
            <img src={img2} alt="img2" />
          </li>
          <li>
            <img src={img7} alt="img7" />
          </li>
          <li>
            <img src={img8} alt="img8" />
          </li>
          <li>
            <img src={img9} alt="img9" />
          </li>
          {/* Split */}
          <li>
            <img src={img5} alt="img5" />
          </li>
          <li>
            <img src={img6} alt="img6" />
          </li>
          <li>
            <img src={img3} alt="img3" />
          </li>
          <li>
            <img src={img4} alt="img4" />
          </li>
          <li>
            <img src={img2} alt="img2" />
          </li>
          <li>
            <img src={img7} alt="img7" />
          </li>
          <li>
            <img src={img8} alt="img8" />
          </li>
          <li>
            <img src={img9} alt="img9" />
          </li>
        </ul>
      </div>
    </section>
  );
}
