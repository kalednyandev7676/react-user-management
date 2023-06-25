import React, { useEffect } from "react";
import styled from "styled-components";

const About = (props) => {
  useEffect(() => {
    document.title = `About Us`;
  });

  const StyledDiv = styled.div`
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    height: 100vh;
    text-align: center;
    background-color: ${(props) => (props.bg === "blue" ? "blue" : "white")};
  `;

  return (
    <StyledDiv bg="white">
      <h1>About US</h1>
    </StyledDiv>
  );
};

export default About;
