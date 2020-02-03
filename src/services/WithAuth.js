import React, { Component } from "react";

export default function(ComposedComponent) {
  class WithAuth extends Component {
    componentWillMount() {
      if (!localStorage.getItem("token")) {
        this.props.history.push("/login");
      }
    }

    componentWillUpdate(nextProps) {
      if (!localStorage.getItem("token")) {
        this.props.history.push("/login");
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { session: state.session };
  }

  return WithAuth;
}
