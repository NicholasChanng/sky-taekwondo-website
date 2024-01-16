import "./schedule.scss";
import BRschedule from "../../assets/images/RealBRSchedule.jpg";
import Cschedule from "../../assets/images/RealCSchedule.jpg";
// import BRLocation from "../../assets/images/BRLocation.JPG";

export default function Schedule() {
  return (
    <section className="top-section section schedule-section">
      <div className="container schedule-container">
        <span>Schedules</span>
        <div className="flex schedule-flex">
          {/* <button className="BaskingRidge">Basking Ridge Schedule</button> */}
          <div className="picture">
            <img id="BRschedule" src={BRschedule} alt="BRschedule" />
          </div>
          {/* <div className="BRLocation">
        <img id="picBR" src={BRLocation} alt="BRLocation" />
      </div> */}
          <div className="picture">
            <img id="Cschedule" src={Cschedule} alt="Cschedule" />
          </div>
        </div>
      </div>
    </section>
  );
}
