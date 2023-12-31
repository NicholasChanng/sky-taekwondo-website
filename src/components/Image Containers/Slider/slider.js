import "./slider.scss";
import img2 from "../../../assets/images/slider/photo2.jpeg";
import img3 from "../../../assets/images/slider/photo3.jpeg";
import img4 from "../../../assets/images/slider/photo4.jpeg";
import img5 from "../../../assets/images/slider/photo5.jpeg";
import img6 from "../../../assets/images/slider/photo6.jpeg";

export default function Slider() {
  return (
    <>
      <section className="section slider-section">
        <div className="container slider-container">
          <div className="slider">
            <div className="slides">
              <input type="radio" name="radio-btn" id="radio1" />
              <input type="radio" name="radio-btn" id="radio2" />
              <input type="radio" name="radio-btn" id="radio3" />
              <input type="radio" name="radio-btn" id="radio4" />
              <input type="radio" name="radio-btn" id="radio5" />
              <input type="radio" name="radio-btn" id="radio6" />

              <div className="slide first">
                <img src={img5} alt="img5" />
              </div>
              <div className="slide">
                <img src={img6} alt="img6" />
              </div>
              <div className="slide">
                <img src={img3} alt="img3" />
              </div>
              <div className="slide">
                <img src={img4} alt="img4" />
              </div>
              <div className="slide">
                <img src={img2} alt="img2" />
              </div>

              <div className="navigation-auto">
                <div className="auto-btn1"></div>
                <div className="auto-btn2"></div>
                <div className="auto-btn3"></div>
                <div className="auto-btn4"></div>
                <div className="auto-btn5"></div>
              </div>
            </div>
            <div className="navigation-manual">
              <label for="radio1" className="manual-btn"></label>
              <label for="radio2" className="manual-btn"></label>
              <label for="radio3" className="manual-btn"></label>
              <label for="radio4" className="manual-btn"></label>
              <label for="radio5" className="manual-btn"></label>
            </div>
          </div>
        </div>
      </section>
      {/* {Animation()} */}
    </>
  );
}

// function Animation() {
//   let counter = 1;
//   setInterval(() => {
//     document.createElementID("radio" + counter).checked = true;
//     counter++;
//     if (counter > 4) {
//       counter = 1;
//     }
//   }, 5000);
// }
