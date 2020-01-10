import styled from "styled-components";

export const NewProjectButton = styled.button`
  width: 100%;
  padding: 8px;
  cursor: pointer;
  background: ${props => props.colors.main_color || "#f2f2f2"};
  color: ${props => props.colors.side_bar_color || "black"}
  font-weight: 200;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 16px;

  :hover {
    background: #f2f2f2;
    color: black;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.22);
  }
`;

export const SingleProjectChip = styled.div`
  width: 100%;
  margin: 8px 0;
  display: flex;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.05);

  :hover {
    background: rgba(250, 250, 250, 0.5);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;

export const SingleProjectChipStatus = styled.div`
  padding: 4px;
  background: ${props => {
    const { status } = props;

    return status === "pre"
      ? "#00B3EB"
      : status === "in-progress"
      ? "#FEC925"
      : "#5AB18F";
  }};
  margin: 0;
  margin-right: 8px;
`;

export const SingleProjectChipInfo = styled.div`
  width: 100%;
  min-height: 150px;
  padding: 8px;

  hr {
    margin-bottom: 0;
  }

  h3 {
    font-size: 20px;
    margin: 0;
    margin-bottom: 4px;
  }
  h5 {
    margin-bottom: 4px;
    margin: 0;
    font-weight: 200;
  }
  p {
    margin: 8px 0;
  }
`;

export const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
