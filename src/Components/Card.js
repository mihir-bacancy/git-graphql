import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
  ${props => props.container && `padding: 2px 16px;`}
`;

function Card() {
  return (
    <StyledCard container>
      <h4>
        <b>John Doe</b>
      </h4>
      <p>Architect & Engineer</p>
    </StyledCard>
  );
}

export default Card;
