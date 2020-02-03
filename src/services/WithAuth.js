import React, { Component } from "react";
import { getAuthToken } from "./git";

// export default PrivateRoute;

export default function(ComposedComponent) {
  class WithAuth extends Component {
    async componentDidMount() {
      // For this block I am going to implement : validare token
      let res;
      try {
        res =
          window.location.href.split("?code=").length === 2
            ? await getAuthToken(window.location.href.split("?code=")[1])
            : undefined;

        if (res && res.access_token) {
          localStorage.setItem("token", res && res.access_token);
          window.location.href = window.location.href.split("?code=")[0];
        }
      } catch (error) {
        alert(error);
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  return WithAuth;
}
