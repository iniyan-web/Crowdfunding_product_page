import React from "react";
import checkIcon from "../images/icon-check.svg";

const SubModal = ({ clickSubModel }) => {
  return (
    <>
      <div className="overlay">
        <div className="sub-modal">
          <div className="sub-modal-content">
            <div className="smodal-top">
              <img
                className="check-icon"
                src={checkIcon}
                alt="Contribution done."
              />
              <h3>Thanks for your support!</h3>
            </div>
            <div className="smodal-bottom">
              <p>
                Your pledge brings us one step closer to sharing Mastercraft
                Bamboo Monitor Riser worldwide. You will get an email once our
                campaign is completed.
              </p>
              <button type="button" onClick={clickSubModel}>
                Got it!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubModal;
