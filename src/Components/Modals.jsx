import React, { useState } from "react";
import cardData from "./Card_data";
import MainModal from "./MainModal";
import MainModalBottom from "./MainModalBottom";
import closeModal from "../images/icon-close-modal.svg";
import SubModal from "./SubModal";

const Modals = React.memo(
  ({ mModalClick, clickMainModal, updateRemaining, updateId }) => {
    const data = cardData;
    const [subModal, setSubModal] = useState(false);

    const clickMModalTop = (id) => {
      const allModalBottom = document.querySelectorAll(".modal-bottom");
      const selModalBottom = document.querySelector(`#mb-${id}`);
      const selModalBottomID = selModalBottom.getAttribute("id");
      let allModalBottomArr = Array.from(allModalBottom);
      allModalBottomArr.map((curr) => {
        return curr.getAttribute("id") === selModalBottomID
          ? (selModalBottom.style.display = "flex")
          : (curr.style.display = "none");
      });

      const allModalCards = document.querySelectorAll(".modal-card");
      const selModalCard = document.querySelector(`#mc-${id}`);
      const selModalCardID = selModalCard.getAttribute("id");
      let allModalCardsArr = Array.from(allModalCards);
      allModalCardsArr.map((curr) => {
        return curr.getAttribute("id") === selModalCardID
          ? (selModalCard.style.border = "1px solid hsl(176, 50%, 47%)")
          : (curr.style.border = "1px solid hsl(0, 5%, 92.2%)");
      });

      const allRadios = document.querySelectorAll(".radio");
      const selRadio = document.querySelector(`#rb-${id}`);
      const selRadioID = selRadio.getAttribute("id");
      let allRadiosArr = Array.from(allRadios);
      allRadiosArr.map((curr) => {
        return curr.getAttribute("id") === selRadioID
          ? (selRadio.checked = true)
          : (curr.checked = false);
      });
    };

    const clickSubModel = () => {
      return setSubModal(!subModal);
    };

    const mainModalDisplay = () => {
      let modalBottomKey = data.length;
      return data.map((item) => {
        return (
          <>
            <div id={`mc-${item.id}`} className="modal-card">
              <MainModal
                key={item.id}
                id={item.id}
                title={item.title}
                pledge={item.pledge}
                info={item.info}
                remaining={
                  item.id === updateId
                    ? item.remaining !== "" && --item.remaining
                    : item.remaining
                }
                left={item.left}
                clickMModalTop={clickMModalTop}
              />
              <MainModalBottom
                key={++modalBottomKey}
                id={item.id}
                clickMainModal={clickMainModal}
                clickSubModel={clickSubModel}
                updateRemaining={updateRemaining}
              />
            </div>
          </>
        );
      });
    };

    return (
      <>
        {mModalClick && (
          <>
            <div className="overlay">
              <div className="main-modal">
                <div className="modal-content">
                  <img
                    className="close-modal"
                    src={closeModal}
                    alt="Close modal."
                    onClick={clickMainModal}
                  />
                  <h2>Back this project</h2>
                  <p>
                    Want to support us in bringing Mastercraft Bamboo Monitor
                    Riser out in the world?
                  </p>
                  {mainModalDisplay()}
                  {updateRemaining("")}
                </div>
              </div>
            </div>
          </>
        )}
        {subModal && <SubModal clickSubModel={clickSubModel} />}
      </>
    );
  }
);

export default Modals;
