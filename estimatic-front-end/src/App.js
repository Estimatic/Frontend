import React from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <BasicHero className="App">
      <h1>Estimatic</h1>
    </BasicHero>
  );
}

export default App;

const BasicHero = styled.div`
  width: 100vw;
  height: 75vh;
  background: linear-gradient(0deg, rgb(61, 103, 216),rgb(65, 80, 170),rgb(53, 69, 115));
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center:
  align-items: center;

  h1 {
    padding: 0;
    padding-top: 8vh;
    font-size: 56px;
    margin: 0 auto;
    color: white;
  }
`;
