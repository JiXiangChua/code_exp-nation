import { createContext, useState } from "react";

export const MissionContext = createContext({
  //initial state for auto completion
  isMissionMode: false,
  setMissionMode: () => {},
});

const MissionContextProvider = (props) => {
  const [isMission, setIsMission] = useState(false);

  const missionValue = {
    isMissionMode: isMission,
    setMissionMode: setIsMission,
  };

  return (
    <MissionContext.Provider value={missionValue}>
      {props.children}
    </MissionContext.Provider>
  );
};

export default MissionContextProvider;
