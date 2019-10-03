import React from "react";
import styled from "styled-components";

export default function SingleMaterial(props) {
  const { name, description, photoUrl, grade } = props.material;

  const returnPropperGrade = grade => {
    if (grade === "A") {
      return <h6 style={{ color: "green" }}>{grade}</h6>;
    } else if (grade === "B") {
      return <h6 style={{ color: "blue" }}>{grade}</h6>;
    } else if (grade === "C") {
      return <h6 style={{ color: "yellow" }}>{grade}</h6>;
    } else if (grade === "D") {
      return <h6 style={{ color: "orange" }}>{grade}</h6>;
    } else if (grade === "F") {
      return <h6 style={{ color: "red" }}>{grade}</h6>;
    } else {
      return <h6>{grade}</h6>;
    }
  };

  return (
    <Wrapper>
      <h5>
        title: <span>{name}</span>
      </h5>
      <hr />
      <BottomWrapper>
        <img src={photoUrl} />
        <BottomRightWrapper>
          <h5>description:</h5>
          <p>{description}</p>
          <h6>{returnPropperGrade(grade)}</h6>
        </BottomRightWrapper>
      </BottomWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 92%;
  padding: 12px;
  margin: 8px auto;
  background: white;

  h5 {
    margin: 0 0 8px 0;
    font-weight: 200;
    span {
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

const BottomWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  background: rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  img {
    width: 150px;
    height: 150px;
  }
`;

const BottomRightWrapper = styled.div`
  width: 100%;
  height: 150px;
  margin: 8px;
  box-sizing: border-box;
  padding: 8px;
  background: white;
  position: relative;
  h6 {
    position: absolute;
    margin: 0;
    top: 8px;
    right: 8px;
    font-size: 24px;
  }
`;
