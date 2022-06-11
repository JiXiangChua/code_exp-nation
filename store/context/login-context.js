import { createContext, useState } from "react";

export const LoginContext = createContext({
  //initial state for auto completion
  isLogin: false,
  setIsLogin: () => {},
});

const LoginContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);

  const loginValue = {
    isLogin: isLogin,
    setIsLogin: setIsLogin,
  };

  return (
    <LoginContext.Provider value={loginValue}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
