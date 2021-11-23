import React from "react";

const Card = ({
  title,
  pledge,
  info,
  remaining,
  left,
  reward,
  clickMainModal,
}) => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h2>{title}</h2>
          <p>{pledge}</p>
        </div>
        <br />
        <div className="card-body">
          <p>{info}</p>
        </div>
        <div className="card-footer">
          <h3>
            {remaining}
            <span>{left}</span>
          </h3>
          <button type="button" onClick={clickMainModal}>
            {reward}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
