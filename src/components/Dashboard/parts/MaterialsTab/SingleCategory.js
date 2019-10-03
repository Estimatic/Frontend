import React from "react";
import styled from "styled-components";
import SingleMaterial from "./SingleMaterial";

export default function SingleCategory(props) {
  return (
    <Wrapper>
      <h4>{props.category.name}</h4>

      {props.category.materials.map(mat => {
        return <SingleMaterial material={mat} key={mat._id} />;
      })}
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
