import React from "react";
import styled from "styled-components";
import logo from "../GitHub-Mark-Light-32px.png";
import Search from "./Search";

/*
  We can create new js file to declare below css,
  But other component does not contain this much css, 
*/
const AppHeader = styled.header`
  background-color: #222;
  height: 20px;
  padding: 25px;
  color: white;
  display: block;
  width: 100%;
`;
const AppTitle = styled.span`
  margin-left: 5px;
`;
const Button = styled.div`
  border-radius: 5px;
  margin-top: 4px;
  padding: 8px;
  background-color: white;
  color: black;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between !important;
`;

const AppLogo = styled.img`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchWrapper = styled.div`
  display: flex;
  margin: auto;
  margin-right: 0;
  margin-top: -10;
`;

function Header(props) {
  return (
    <AppHeader>
      <Content>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            top: "20px",
            position: "fixed"
          }}
        >
          <AppLogo src={logo} alt="logo" />
          <AppTitle>GIT GRAPH</AppTitle>
        </div>
        <SearchWrapper>
          <Search />
          <div>
            {localStorage.getItem("token") && (
              <Button
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.reload();
                }}
              >
                Logout
              </Button>
            )}
          </div>
        </SearchWrapper>
      </Content>
    </AppHeader>
  );
}

export default Header;
