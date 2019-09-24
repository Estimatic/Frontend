import styled from "styled-components";
import MenuOpen from "@material-ui/icons/MenuOpen";
import Close from "@material-ui/icons/Close";

export const HeaderWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 12px 0px;
  display: flex;
  align-items: center;

  h4 {
    font-size: 20px;
    font-weight: 200;
    color: rgba(0, 0, 0, 0.7);
    margin: 0 16px;
    padding: 0;
  }
`;

export const LeftHeaderSection = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledMenuOpen = styled(MenuOpen)`
  cursor: pointer;
  transform: scale(0.7);
  background: white;
  color: rgba(0, 0, 0, 0.5);
  font-size: 8px;
  padding: 12px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const StyledMenuClose = styled(Close)`
  cursor: pointer;
  transform: scale(0.7);
  background: white;
  color: rgba(0, 0, 0, 0.5);
  font-size: 8px;
  padding: 12px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
