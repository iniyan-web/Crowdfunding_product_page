import React, { useState, useReducer } from "react";
import mastercraft_logo from "../images/logo-mastercraft.svg";

const reducer = (state, action) => {
  if (action.type === "CLICKED") {
    return {
      ...state,
      value: "Bookmarked",
      bkCircleStyle: { fill: "hsl(176, 72%, 28%)" },
      bkStyle: { fill: "rgb(255, 255, 255)" },
    };
  } else {
    return {
      ...state,
      value: "Bookmark",
      bkCircleStyle: { fill: "rgb(47, 47, 47)" },
      bkStyle: { fill: "rgb(177, 177, 177)" },
    };
  }
};

const defaultValues = {
  value: "Bookmark",
  bkCircleStyle: { fill: "rgb(47, 47, 47)" },
  bkStyle: { fill: "rgb(177, 177, 177)" },
};

const Title = ({ clickMainModal }) => {
  const [isTrue, setIsTrue] = useState(false);
  const [state, dispatch] = useReducer(reducer, defaultValues);

  const validateClick = () => {
    setIsTrue(!isTrue);
    return isTrue
      ? dispatch({ type: "CLICKED" })
      : dispatch({ type: "NOT-CLICKED" });
  };

  return (
    <>
      <section className="title">
        <img
          className="master-craft-logo"
          src={mastercraft_logo}
          alt="Master craft logo."
        />
        <div className="title-content">
          <h1>Mastercraft Bamboo Monitor Riser</h1>
          <p>
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div className="btn-grp">
            <button
              type="button"
              className="project-btn"
              onClick={clickMainModal}
            >
              Back this project
            </button>
            <div className="bookmark" onClick={validateClick}>
              <svg
                className="bookmark-icon"
                width="56"
                height="56"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <circle
                    cx="28"
                    cy="28"
                    r="28"
                    style={state.bkCircleStyle}
                  ></circle>
                  <path
                    d="M23 19v18l5-5.058L33 37V19z"
                    style={state.bkStyle}
                  ></path>
                </g>
              </svg>
              <button type="button" className="bookmark-btn">
                {state.value}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Title;
