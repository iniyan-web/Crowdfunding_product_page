import React from "react";

const MainModal = ({
  id,
  title,
  pledge,
  info,
  remaining,
  left,
  clickMModalTop,
}) => {
  return (
    <>
      <div className="modal-top">
        <div className="modal-header">
          <div className="header-left">
            <div className="radio-grp">
              <input id={`rb-${id}`} className="radio" type="radio"></input>
              <h3 id={id} onClick={(e) => clickMModalTop(e.target.id)}>
                {title}
              </h3>
            </div>
          </div>
          <div className="header-center">
            <p className="pledge">{pledge}</p>
          </div>
          <div className="header-right">
            <h3>
              {remaining}
              <span className="left">{left}</span>
            </h3>
          </div>
        </div>
        <p>{info}</p>
      </div>
    </>
  );
};

export default MainModal;
