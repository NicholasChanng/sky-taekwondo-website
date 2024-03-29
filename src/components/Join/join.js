import { useState } from "react";
import "./join.scss";

export default function Join() {
  const [open, setOpen] = useState(true);

  document.addEventListener("keydown", function (event) {
    if (open) {
      if (event.keyCode === 27) {
        setOpen(!open);
      }
    }
  });

  return (
    // <div className="join-section">
    //   <div className={`join-container ${open ? "active" : "inactive"}`}>
    //     <div
    //       className={`button ${open ? "active" : "inactive"}`}
    //       onClick={() => {
    //         setOpen(!open);
    //       }}
    //     >
    //       {/* {!open ? "Join Now!" : "Close"} */}
    // <svg
    //   version="1.1"
    //   xmlns="http://www.w3.org/2000/svg"
    //   x="0px"
    //   y="0px"
    //   width="300px"
    //   height="300px"
    //   viewBox="0 0 300 300"
    //   enable-background="new 0 0 300 300"
    // >
    //   <defs>
    //     <path
    //       id="circlePath"
    //       d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
    //     />
    //   </defs>
    //   <circle cx="150" cy="100" r="75" fill="none" />
    //   <g>
    //     <use href="#circlePath" fill="none" />
    //     <text fill="#000">
    //       <textPath href="#circlePath">Chat Now! Chat Now!</textPath>
    //     </text>
    //   </g>
    // </svg>
    //     </div>
    //   </div>
    //   <div className={`flex content ${open ? "active" : "inactive"}`}>
    //     <div
    //       className="exit"
    //       onClick={() => {
    //         setOpen(!open);
    //       }}
    //     >
    //       <div className="x top"></div>
    //       <div className="x bottom"></div>
    //     </div>
    //     <h1>Chat</h1>
    //   </div>
    // </div>

    <section className={`join-section ${open ? "active" : "inactive"}`}>
      <div className="join-container">
        <div className="join-border">
          <div
            className="exit"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <div className="x top"></div>
            <div className="x bottom"></div>
          </div>
          <h1>PROMOTION</h1>
          <div className="promotion-container">
            <p>
              <span>FREE</span> Trial
            </p>
            <p>
              <span>FREE</span> Uniform
            </p>
            <p>
              <span>FREE</span> Registration
            </p>
            <a
              href="https://forms.gle/CpuRxXuBkvVsmryw6"
              target="_blank"
              rel="noreferrer"
            >
              Sign up now!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
