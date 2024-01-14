import "./schedule.scss";
import BRschedule from "../../assets/images/BRschedule.jpg";
import Cschedule from "../../assets/images/Cschedule.jpg";
// import BRLocation from "../../assets/images/BRLocation.JPG";

export default function Schedule() {
  return (
    <section className="top-section section schedule-section">
      <div className="container schedule-container">
        Schedules
        {/* <button className="BaskingRidge">Basking Ridge Schedule</button> */}
        <div className="picture1">
          <img id="BRschedule" src={BRschedule} alt="BRschedule" />
        </div>
        {/* <div className="BRLocation">
        <img id="picBR" src={BRLocation} alt="BRLocation" />
      </div> */}
        <div className="picture2">
          <img id="Cschedule" src={Cschedule} alt="Cschedule" />
        </div>
      </div>
    </section>
  );
}
