import React from "react";
import styled from "styled-components";
import logo from "../GitHub-Mark-Light-32px.png";
import Search from "./Search";

const AppHeader = styled.header`
  background-color: #222;
  height: 20px;
  padding: 25px;
  color: white;
`;
const AppTitle = styled.span`
  margin-left: 5px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AppLogo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Header() {
  return (
    <AppHeader>
      <Content>
        <AppLogo src={logo} alt="logo" />
        <AppTitle>GIT GRAPH</AppTitle>
        <Search />
      </Content>
    </AppHeader>
  );
}

export default Header;
