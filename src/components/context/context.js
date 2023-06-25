import { createContext, React, useState } from "react";

export const auth = {
  isLoggedIn: false,
  title: "",
  onLogin: (email, password) => {},
  onLogout: () => {
    console.log("ssss");
  },
};


export const AuthContext = createContext({
  isLoggedIn: false,
  username: "GUEST",
  onLogin: (email, password) => {},
  onLogout: () => {}
});

export const AuthContextProvide = (props) => {
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const [userName, setUserName] = useState(false);

  const loginHandler = (email, password) => {
    setIsLoggedin(true);
    setUserName(email);
    // console.log("auth provide>>", email, password);
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("userName", email);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");    
    localStorage.removeItem("userName");    
    setIsLoggedin(false);
    setUserName(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userName: userName,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
