import React, { useContext } from "react";
import styled from "styled-components";
import { unstar } from "../services/git";
import { getRepositories } from "../Context/Action/repository";
import { useStore } from "../Context";
// import { StarRepoContext } from "../Context";

const StyledCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
  ${props => props.container && `padding: 2px 16px;`}
`;

function Card({ ele }) {
  // const value = useContext(StarRepoContext);
  const [, dispatch] = useStore();
  const unStarRepo = async id => {
    console.log("cxalled");
    let res;
    try {
      res = await unstar({ id });
      await getRepositories(dispatch);
    } catch (error) {
      alert(error);
    }
  };

  // console.log("value", value);
  return (
    <StyledCard container>
      <h4>{ele.name}</h4>
      <p>{ele.description}</p>
      <button
        onClick={() => unStarRepo(ele.id)}
        className="btn btn-primary btn-sm"
      >
        UNSTAR
      </button>
    </StyledCard>
  );
}

export default Card;
