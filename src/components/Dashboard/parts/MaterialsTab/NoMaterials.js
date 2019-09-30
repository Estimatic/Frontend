import React from "react";
import styled from "styled-components";

export default function NoMaterials() {
  return (
    <NoMatsWrapper>
      <p>
        You currently have 0 material groups created. Begin by clicking the
        "create a material group" button, then proceed to add single materials
        into that subset.
      </p>
    </NoMatsWrapper>
  );
}

const NoMatsWrapper = styled.div`
  background: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.5);
  font-style: italic;
  padding: 16px;
`;
