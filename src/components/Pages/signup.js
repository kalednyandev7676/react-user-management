import React, { useEffect } from "react";

const SignUp = () => {
  useEffect(() => {
    document.title = `Sign Up`;
  });
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "Center",
        alignItems: "Right",
        height: "100vh",
      }}
    >
      <h1>Sign Up</h1>
    </div>
  );
};

export default SignUp;
