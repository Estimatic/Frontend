import styled from "styled-components";

// export const breakPointOne = "900px";
// export const breakPointTwo = "640px";

// const maxScreenWidth = "1300px";
const companyColor = "#3B49B8";

export const SideBarWrapper = styled.div`
  width: ${props => props.sideNavWidth};
  height: 100vh;
  position: sticky;
  top: 0;
  margin: 0;
  padding: 0 12px;
  background: ${props => props.bgColor || companyColor};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.55);
  h4 {
    margin: 0;
    padding: 24px 8px;
    text-align: center;
    font-size: 20px;
    font-weight: 300;
    color: ${props => props.fontColor || "white"};
    border-bottom: 1px solid
      ${props => props.fontColor || "rgba(255, 255, 255, 0.6)"};
  }
`;
