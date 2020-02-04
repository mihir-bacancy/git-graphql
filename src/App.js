import React from "react";
// import "./App.css";
import Header from "./Components/Header";
import styled, { createGlobalStyle } from "styled-components";
import Provider from "./Context";

import Routes from "./routes";
const AppContainer = styled.div`
  text-align: center;
`;

const AppIntro = styled.p`
  font-size: large;
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
          <Header {...this.props} />
          To get started, edit <code>src/App.js</code> and save to reload.
          <Provider>
            <Routes />
          </Provider>
          {/* <Card /> */}
        </AppContainer>
      </React.Fragment>
    );
  }
}

export default App;
