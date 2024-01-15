import "./park.scss";
import park from "../../assets/images/MasterParkHeadshot (2).png";

export default function Park() {
  return (
    <section className="top-section section contact-section">
      <div className="container contact-containers">
        <div className="flex contact-flex">
          <div className="picture">
            <h1>Grand Master Chun Myung Park</h1>
            <img id="park" src={park} alt="park" />
          </div>
          <div className="description">
            <h1>
              Grand Master Park obtained his degree in Taekwondo from Kyunghee
              University and holds a 7th-degree Black Belt. Additionally, while
              enrolled at Fairleigh Dickinson University, he pursued a Master of
              Sports Administration. He has been instructing Taekwondo for over
              25 years, and many of his students have participated in World
              Championship tournaments. <br /> <br />
              Master Park always cares for his students and helps them achieve
              future success. Sky Taekwondo was founded with the intention of
              making sure students will have the most rewarding learning
              experience possible and will be able to change themselves for the
              better.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
