import styled from "styled-components";
import MenuOpen from "@material-ui/icons/MenuOpen";
import Close from "@material-ui/icons/Close";
import NotificationImportant from "@material-ui/icons/NotificationImportant";
import HelpOutline from "@material-ui/icons/HelpOutline";
import SettingsApplications from "@material-ui/icons/SettingsApplicationsOutlined";

export const HeaderWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 8px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    font-size: 20px;
    font-weight: 200;
    color: rgba(0, 0, 0, 0.7);
    margin: 0 16px;
    padding: 0;
  }

  h5 {
    font-size: 14px;
    font-weight: 200;
    color: rgba(0, 0, 0, 0.7);
    margin: 0 8px;
    padding: 0;
    cursor: default;
  }
`;

export const LeftHeaderSection = styled.div`
  display: flex;
  align-items: center;
`;

export const RightHeaderSection = styled.div`
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

export const StyledNotification = styled(NotificationImportant)`
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  font-size: 8px;
  padding: 8px;
`;

export const StyledQuestion = styled(HelpOutline)`
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  font-size: 8px;
  padding: 8px;
`;

export const StyledSettings = styled(SettingsApplications)`
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  font-size: 8px;
  padding: 8px;
`;
