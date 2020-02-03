import React, { useEffect } from "react";
import { client_id, redirect_uri } from "../config";
import { getAuthToken } from "../services/git";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    let res;
    try {
      res =
        window.location.href.split("?code=").length === 2 &&
        (await getAuthToken(window.location.href.split("?code=")[1]));
      localStorage.setItem("token", res.access_token);
      window.location.href = "/";
    } catch (error) {
      alert(error);
    }
  }

  render() {
    return (
      <div className="AuthWrapper">
        <button type="button" className="btn btn-dark btn-git">
          <a
            className="AuthLink"
            href={`https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=user,repo,public_repo`}
          >
            SignIn with github
          </a>
        </button>
      </div>
    );
  }
}

export default Login;
