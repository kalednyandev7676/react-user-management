import React, { useContext, useEffect } from "react";
import logo from "../../logo.svg";
import { AuthContext } from "../context/context";
import { Navigate } from "react-router-dom";
import Login from "../Login/Login";

const Home = () => {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    document.title = `Home`;
  });

  if (authCtx.isLoggedIn !== true) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {/* {!authCtx.isLoggedIn && <Login />} */}
      <div
        style={{
          textAlign: "center",
          justifyContent: "Center",
          alignItems: "Right",
          height: "100vh",
        }}
      >
        <h1>Welcome to React PROJECT</h1>
        <br />
        <img
          src={logo}
          style={{ height: "50%", width: "50%", margin: "10px" }}
          alt="logo"
        />
      </div>
    </>
  );
};

export default Home;
