import React from "react";
import { useLocalStorage } from "usehooks-ts";

type LoginContextType = {
  isLogin: boolean;
  toggleLogin: () => void;
};

const LoginContext = React.createContext<LoginContextType>({
  isLogin: false,
  toggleLogin: () => {},
});

export const LoginContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [isLogin, setIsLogin] = useLocalStorage("isLogin", false);

  function toggleLogin() {
    setIsLogin((prev) => !prev);
  }

  const loginValue: LoginContextType = {
    isLogin,
    toggleLogin,
  };

  return (
    <LoginContext.Provider value={loginValue}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
