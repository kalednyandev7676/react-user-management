import React from "react";

export const NotFound = () => {
  return (
    <div
      id="main"
      style={{
        display: "table",
        width: "100%",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <div
        class="fof"
        style={{
          display: "table-cell",
          verticalAlign: "middle",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            display: "inline-block",
            paddingRight: "12px",
            animation: "type .5s alternate infinite",
          }}
        >
          Error 404
        </h1>
      </div>
    </div>
  );
};
