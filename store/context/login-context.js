import { createContext, useState } from "react";

export const LoginContext = createContext({
  //initial state for auto completion
  isLogin: false,
  setIsLogin: () => {},
  userProfile: {},
  setUserProfile: () => {},
});

const LoginContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});

  const loginValue = {
    isLogin: isLogin,
    setIsLogin: setIsLogin,
    userProfile: user,
    setUserProfile: setUser,
  };

  return (
    <LoginContext.Provider value={loginValue}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
