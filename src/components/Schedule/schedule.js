import "./schedule.scss";
import BRschedule from "../../assets/images/BRschedule.jpg";
import Cschedule from "../../assets/images/Cschedule.jpg";

export default function Schedule() {
  return (
    <section className="top-section section schedule-section">
      <div className="container schedule container">Schedules</div>
      <button className="BaskingRidge">Basking Ridge Schedule</button>
      <div className="picture1">
        <img id="BRschedule" src={BRschedule} alt="BRschedule" />
      </div>
      <div className="picture2">
        <img id="Cschedule" src={Cschedule} alt="Cschedule" />
      </div>
    </section>
  );
}
