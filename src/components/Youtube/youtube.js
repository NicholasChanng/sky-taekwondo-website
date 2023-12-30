import "./youtube.scss";

export default function Youtube() {
  return (
    <>
      <section className="section youtube-section">
        <div className="container youtube-container">
          <div className="vids">
            <h1>Here are some of our students working hard!</h1>
            <div className="flex youtube-flex">
              <iframe
                id="ytplayer"
                title="vid"
                width="300"
                height="533.33"
                src="https://youtube.com/embed/j79OQMc7IEQ?si=vYG1t7nhY_gEms4l"
                frameborder="0"
                allowfullscreen="allowfullscreen"
              />
              <iframe
                id="ytplayer"
                title="vid"
                width="300"
                height="533.33"
                src="https://youtube.com/embed/roBxYEfucig?si=Tl4o4AfKZtRtvH4m"
                frameborder="0"
                allowfullscreen="allowfullscreen"
              />
              <iframe
                id="ytplayer"
                title="vid"
                width="300"
                height="533.33"
                src="https://youtube.com/embed/_RgYvgRWhKk?si=KbaVobixzMH7FlGG"
                frameborder="0"
                allowfullscreen="allowfullscreen"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
