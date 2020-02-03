import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getRepository } from "../services/git";
function Home() {
  //   const { starRepos, setStarRepos } = useState([]);
  //   useEffect(async () => {
  //     await getRepository();
  //   }, [props.current]);

  return <Card />;
  //   return starRepos.map(ele => <Card ele />);
}

export default Home;
