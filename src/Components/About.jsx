import React from "react";
import cardData from "./Card_data";
import Card from "./Card";

const About = React.memo(({ clickMainModal }) => {
  const data = cardData;
  return (
    <>
      <section className="about">
        <div className="main-info">
          <h2>About this project</h2>
          <br />
          <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <br />
          <p>
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </div>
        <div className="cards">
          {data.map((item) => {
            return (
              item.id !== "1" && (
                <Card
                  key={item.id}
                  title={item.title}
                  pledge={item.pledge}
                  info={item.info}
                  remaining={item.remaining}
                  left={item.left}
                  reward={item.reward}
                  clickMainModal={clickMainModal}
                />
              )
            );
          })}
        </div>
      </section>
    </>
  );
});

export default About;
