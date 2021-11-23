import React, { useState } from "react";
import Modals from "./Modals";
import Title from "./Title";
import Progress from "./Progress";
import About from "./About";

export const ProgressValue = React.createContext();

const Content = () => {
  const [mModalClick, setMModalClick] = useState(false);
  const [currProgress, setCurrProgress] = useState(0);
  const [updateId, setUpdateId] = useState("");

  const clickMainModal = () => {
    return setMModalClick(!mModalClick);
  };

  const updateRemaining = (id) => {
    return setUpdateId(id);
  };

  return (
    <ProgressValue.Provider value={setCurrProgress}>
      <Modals
        mModalClick={mModalClick}
        clickMainModal={clickMainModal}
        updateRemaining={updateRemaining}
        updateId={updateId}
      />
      <main>
        <Title clickMainModal={clickMainModal} />
        <Progress currProgress={currProgress} />
        <About clickMainModal={clickMainModal} />
      </main>
    </ProgressValue.Provider>
  );
};

export default Content;
