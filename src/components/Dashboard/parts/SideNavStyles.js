import styled from "styled-components";

import Close from "@material-ui/icons/Close";
import Dashboard from "@material-ui/icons/Dashboard";
import People from "@material-ui/icons/People";
import Build from "@material-ui/icons/Build";
import Assignment from "@material-ui/icons/Assignment";
import PermIdentity from "@material-ui/icons/PermIdentity";
import Message from "@material-ui/icons/Message";

export const breakPointOne = "900px";
// export const breakPointTwo = "640px";

// const maxScreenWidth = "1300px";
// const companyColor = "#3B49B8";

export const SideBarWrapper = styled.div`
  width: ${props => props.sideNavWidth};
  max-width: 230px;
  height: 100vh;
  position: sticky;
  overflow-y: scroll;
  top: 0;
  margin: 0;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.55);
  background: linear-gradient(
    186deg,
    rgba(72, 165, 209, 1) 0%,
    rgba(64, 120, 196, 1) 19%,
    rgba(59, 73, 184, 1) 94%
  );
  padding: 0 16px;

  @media (max-width: ${breakPointOne}) {
    position: absolute;
    z-index: 5;
    padding: ${props => (props.sideNavWidth === "0px" ? "0" : "0 16px")};
  }

  ul {
    color: white;
    padding: 0;
    li {
      padding: 16px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      list-style-type: none;
      display: flex;
      align-items: center;
      border-radius: 4px;
    }
  }
`;

export const StyledClose = styled(Close)`
  transform: scale(0);
  cursor: pointer;
  color: white;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 8px;
  right: 8px;
  @media (max-width: ${breakPointOne}) {
    transform: scale(0.9);
  }
`;

export const StyledDashboard = styled(Dashboard)`
  color: white;
  margin-right: 8px;
  transform: scale(0.8);
`;

export const StyledPeople = styled(People)`
  color: white;
  margin-right: 8px;
  transform: scale(0.8);
`;

export const StyledBuild = styled(Build)`
  color: white;
  margin-right: 8px;
  transform: scale(0.8);
`;

export const StyledAssignment = styled(Assignment)`
  color: white;
  margin-right: 8px;
  transform: scale(0.8);
`;

export const StyledPermIdentity = styled(PermIdentity)`
  color: white;
  margin-right: 8px;
  transform: scale(0.8);
`;

export const StyledMessage = styled(Message)`
  color: white;
  margin-right: 8px;
  transform: scale(0.8);
`;

export const ImgNameWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 32px;
  h5 {
    font-weight: 200;
    font-size: 16px;
    color: white;
    margin: 0;
    display: flex;
    align-items: center;
  }
`;
