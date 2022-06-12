import { createContext, useState } from "react";

export const MissionContext = createContext({
  //initial state for auto completion
  isMissionMode: false,
  setMissionMode: () => {},
});

const MissionContextProvider = (props) => {
  const [isMission, setIsMission] = useState(false);

  const setMissionMode = () => {
    setIsMission((prevState) => !prevState);
  };

  const missionValue = {
    isMissionMode: isMission,
    setMissionMode: setMissionMode,
  };

  return (
    <MissionContext.Provider value={missionValue}>
      {props.children}
    </MissionContext.Provider>
  );
};

export default MissionContextProvider;
