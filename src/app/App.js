import React from "react";
import { createGlobalStyle } from "styled-components";
import MessageCentre from "../pages/MessagesDashboard";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MessageCentre />
    </>
  );
};

export default App;
