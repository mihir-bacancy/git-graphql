import React from "react";
// import "./App.css";
import Header from "./Components/Header";
import styled, { createGlobalStyle } from "styled-components";
import Provider from "./Context";

import Routes from "./routes";
const AppContainer = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// Add global styles
const GlobalStyle = createGlobalStyle`
 body {
   margin: 0;
   padding: 0;
   font-family: sans-serif;
 }
`;

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <AppContainer>
          <Provider>
            <Header />
            <Routes />
          </Provider>
        </AppContainer>
      </React.Fragment>
    );
  }
}

export default App;
