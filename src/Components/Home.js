import React, { useEffect, useReducer } from "react";
import Card from "./Card";
import { getRepositories } from "../Context/Action/repository";
import { useStore } from "../Context";

function Home(props) {
  const [state, dispatch] = useStore();

  const getStartRepos = async () => {
    try {
      await getRepositories(dispatch);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getStartRepos();
  }, []);
  console.log("state", state);
  return (state.repository?.starRepos || []).map(ele => (
    <Card ele={ele.node} />
  ));
}

export default Home;
