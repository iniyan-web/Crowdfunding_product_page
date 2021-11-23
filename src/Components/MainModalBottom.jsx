import React, { useContext, useState } from "react";
import { ProgressValue } from "./Content";

const MainModalBottom = ({
  id,
  clickMainModal,
  clickSubModel,
  updateRemaining,
}) => {
  const [numValue, setNumValue] = useState("");
  const setCurrProgress = useContext(ProgressValue);

  const updateProgress = () => {
    let currNumValue = parseInt(numValue);
    return setCurrProgress((prev) =>
      prev !== currNumValue ? currNumValue : ++currNumValue
    );
  };

  return (
    <>
      <div id={`mb-${id}`} className="modal-bottom">
        <p>Enter your pledge</p>
        <div className="mb-grp">
          <div className="input-grp">
            <span>$</span>
            <input
              type="number"
              value={numValue}
              onChange={(e) => setNumValue(e.target.value)}
            ></input>
          </div>
          <button
            id={id}
            type="button"
            onClick={(e) => {
              clickMainModal();
              clickSubModel();
              updateProgress();
              updateRemaining(e.target.id);
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default MainModalBottom;
