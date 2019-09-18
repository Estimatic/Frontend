import styled from "styled-components";

export const BasicHero = styled.div`
  width: 100vw;
  height: 80vh;
  background: linear-gradient(
      52deg,
      rgba(163, 163, 163, 0.09) 0%,
      rgba(163, 163, 163, 0.09) 33.3%,
      rgba(100, 100, 100, 0.09) 33.3%,
      rgba(100, 100, 100, 0.09) 66.6%,
      rgba(162, 162, 162, 0.09) 66.6%,
      rgba(162, 162, 162, 0.09) 99%
    ),
    linear-gradient(
      258deg,
      rgba(193, 193, 193, 0.06) 0%,
      rgba(193, 193, 193, 0.06) 33.3%,
      rgba(169, 169, 169, 0.06) 33.3%,
      rgba(169, 169, 169, 0.06) 66.6%,
      rgba(92, 92, 92, 0.06) 66.6%,
      rgba(92, 92, 92, 0.06) 99%
    ),
    linear-gradient(
      129deg,
      rgba(45, 45, 45, 0.03) 0%,
      rgba(45, 45, 45, 0.03) 33.3%,
      rgba(223, 223, 223, 0.03) 33.3%,
      rgba(223, 223, 223, 0.03) 66.6%,
      rgba(173, 173, 173, 0.03) 66.6%,
      rgba(173, 173, 173, 0.03) 99%
    ),
    linear-gradient(
      280deg,
      rgba(226, 226, 226, 0.06) 0%,
      rgba(226, 226, 226, 0.06) 33.3%,
      rgba(81, 81, 81, 0.06) 33.3%,
      rgba(81, 81, 81, 0.06) 66.6%,
      rgba(186, 186, 186, 0.06) 66.6%,
      rgba(186, 186, 186, 0.06) 99%
    ),
    linear-gradient(
      85deg,
      rgba(225, 225, 225, 0.04) 0%,
      rgba(225, 225, 225, 0.04) 33.3%,
      rgba(95, 95, 95, 0.04) 33.3%,
      rgba(95, 95, 95, 0.04) 66.6%,
      rgba(39, 39, 39, 0.04) 66.6%,
      rgba(39, 39, 39, 0.04) 99%
    ),
    linear-gradient(
      128deg,
      rgba(184, 184, 184, 0.06) 0%,
      rgba(184, 184, 184, 0.06) 33.3%,
      rgba(0, 0, 0, 0.06) 33.3%,
      rgba(0, 0, 0, 0.06) 66.6%,
      rgba(140, 140, 140, 0.06) 66.6%,
      rgba(140, 140, 140, 0.06) 99.89999999999999%
    ),
    linear-gradient(
      323deg,
      rgba(40, 40, 40, 0.07) 0%,
      rgba(40, 40, 40, 0.07) 33.3%,
      rgba(214, 214, 214, 0.07) 33.3%,
      rgba(214, 214, 214, 0.07) 66.6%,
      rgba(190, 190, 190, 0.07) 66.6%,
      rgba(190, 190, 190, 0.07) 99.89999999999999%
    ),
    linear-gradient(
      61deg,
      rgba(230, 230, 230, 0) 0%,
      rgba(230, 230, 230, 0) 33.3%,
      rgba(241, 241, 241, 0) 33.3%,
      rgba(241, 241, 241, 0) 66.6%,
      rgba(55, 55, 55, 0) 66.6%,
      rgba(55, 55, 55, 0) 99%
    ),
    linear-gradient(0deg, #2625e3, #0bbaef);
  margin: 0;
  padding: 0;
  padding-top: 20vh;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.45);
`;

export const NavBarWrapper = styled.div`
  width: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  z-axis: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  h3 {
    margin: 16px 32px;
    padding: 0;
    font-size: 32px;
  }

  ul {
    display: flex;
    margin-right: 16px;
    li {
      list-style-type: none;
      padding: 0 16px;
      cursor: pointer;
    }
  }
`;

export const LeftPanel = styled.div`
  width: 55%;
  height: 100%;
  max-width: 600px;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;

  button {
    margin-left: 32px;
    width: 160px;
    padding: 12px 0;
    border-radius: 32px;
    background: #3b49b8;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 800;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);
  }

  h1 {
    padding: 32px;
    padding-bottom: 16px;
    font-weight: 300;
    font-size: 48px;
    text-align: left;
    margin: 0 auto;
    color: white;
  }
  p {
    color: white;
    text-align: left;
    padding-left: 32px;
    font-size: 16px;
    line-height: 24px;
  }
`;
