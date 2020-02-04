import React from "react";
import { client_id, redirect_uri } from "../utils/config";
import { getAuthToken } from "../services/git";
import styled from "styled-components";

class Login extends React.Component {
  async componentDidMount() {
    // For this block I am going to implement : validare token
    let res;
    try {
      res =
        window.location.href.split("?code=").length === 2
          ? await getAuthToken(window.location.href.split("?code=")[1])
          : undefined;
      console.log("res", res);
      if (res && res.access_token) {
        localStorage.setItem("token", res && res.access_token);
        console.log(res.access_token);
        window.location.href = window.location.href.split("/login")[0];
      }
    } catch (error) {
      alert(error);
    }
  }

  render() {
    const Button = styled.button`
      border-radius: 5px;
      margin-top: 4px;
      padding: 8px;
      border-color: black;
      background-color: white;
    `;
    return (
      <div className="AuthWrapper">
        <Button>
          <a
            className="AuthLink"
            href={`https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=user,repo,public_repo`}
          >
            SignIn with github
          </a>
        </Button>
      </div>
    );
  }
}

export default Login;
