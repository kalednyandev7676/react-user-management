import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/context";
import { Navigate } from "react-router-dom";
const Blogs = () => {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    document.title = `Blogs`;
  });
  if (authCtx.isLoggedIn !== true) {
    return <Navigate to="/login" />;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "Center",
        alignItems: "Right",
        height: "100vh",
      }}
    >
      <h1>Blogs</h1>
    </div>
  );
};

export default Blogs;
