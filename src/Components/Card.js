import React from "react";
import styled from "styled-components";
import { unstar } from "../services/git";
import { getRepositories } from "../Context/Action/repository";
import { useStore } from "../Context";

const StyledCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
  margin: 5px;
  ${props => props.container && `padding: 2px 16px;`};
`;

const Button = styled.button`
  border-radius: 5px;
  margin-top: 4px;
  padding: 8px;
  border-color: black;
  background-color: white;
`;

function Card({ ele, id }) {
  const [, dispatch] = useStore();

  const unStarRepo = async id => {
    try {
      await unstar({ id });
      await getRepositories(dispatch);
      // alert("success");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <StyledCard container id={id}>
      <h4>{ele.name}</h4>
      <p>{ele.description}</p>
      <Button
        onClick={() => unStarRepo(ele.id)}
        className="btn btn-primary btn-sm"
      >
        UNSTAR
      </Button>
    </StyledCard>
  );
}

export default Card;
