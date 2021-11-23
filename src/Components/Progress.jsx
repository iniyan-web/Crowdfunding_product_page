import React, { useState, useEffect } from "react";
var updateVal = 0;
const Progress = React.memo(({ currProgress }) => {
  const [progress, setProgress] = useState(89914);

  const updateProgressVal = () => {
    return updateVal + 1 === currProgress
      ? (updateVal = --currProgress)
      : (updateVal = currProgress);
  };

  useEffect(() => {
    setProgress((prev) => prev + updateProgressVal());
  }, [currProgress]);

  /* Progress bar */
  const currProgressBar = progress;
  const updateProgressBar = () => {
    return currProgressBar < 100000 ? (currProgressBar / 1000).toFixed(3) : 100;
  };
  const widthVar = updateProgressBar().toString() + "%";
  const widthStyle = {
    "--width": widthVar,
  };
  /* Progress bar - End */

  return (
    <>
      <section className="stat">
        <div className="current-data">
          <div className="total-backed">
            <h1>${progress.toLocaleString("en-US")}</h1>
            <p>of $100,000 backed</p>
          </div>
          <div className="total-backers">
            <h1> 5,007 </h1>
            <p>total backers</p>
          </div>
          <div className="days-left">
            <h1> 56 </h1>
            <p>days left</p>
          </div>
        </div>
        <div className="progress-bar" style={widthStyle}></div>
      </section>
    </>
  );
});

export default Progress;
