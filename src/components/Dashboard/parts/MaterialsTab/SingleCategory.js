import React from "react";
import styled from "styled-components";

export default function SingleCategory(props) {
  return (
    <Wrapper>
      <h4>{props.category.name}</h4>
      <ul>
        {props.category.materials.map(mat => {
          return <li key={mat._id}>{mat.name}</li>;
        })}
      </ul>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.5);
  font-style: italic;
  padding: 16px;
  margin-bottom: 16px;
`;
