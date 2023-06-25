import React, { useEffect } from "react";

const Teams = () => {
  useEffect(() => {
    document.title = `Team`;
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
      <h1>Team</h1>
    </div>
  );
};

export default Teams;
