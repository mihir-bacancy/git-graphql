import React, { useEffect } from "react";
import Card from "./Card";
import { getRepositories } from "../Context/Action/repository";
import { useStore } from "../Context";

function Home() {
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

  return (state.repository?.starRepos || []).map(ele => (
    <Card ele={ele.node} id={ele.node.id} />
  ));
}

export default Home;
