import styled from "styled-components";

const breakPointOne = "900px";
const maxScreenWidth = "1300px";

export const BasicHero = styled.div`
  width: 100vw;
  min-height: 100vh;

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
  display: flex;
  justify-content: center;

  @media (max-width: ${breakPointOne}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
// for some reason, clip path causing nav bar to go away?
/* 

  clip-path: polygon(0% 0%, 100% 0, 100% 95%, 50% 100%, 0 96%);

*/

export const NavBarWrapper = styled.div`
  width: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  z-axis: 20;
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

export const NavBarInnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${maxScreenWidth};
  margin: auto;
`;

export const LeftPanel = styled.div`
  width: 55%;
  height: 100%;
  max-width: 700px;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  padding-right: 16px;

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
  @media (max-width: ${breakPointOne}) {
    width: 95%;
    margin-bottom: 64px;
    padding-right: 0px;
  }
`;

export const RightPanel = styled.div`
  width: 44%;
  max-width: 600px;
  margin-right: 32px;
  height: 100%;
  min-height: 400px;
  background: rgba(0, 0, 0, 0.2);
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

  @media (max-width: ${breakPointOne}) {
    width: 95%;
    max-width: 700px;
    margin-bottom: 128px;
    margin-right: 0px;
  }
`;

export const InfoSectionWrapper = styled.div`
  width: 100%;
  height: 100vh;
  clip-path: polygon(50% 0, 100% 8%, 100% 100%, 50% 100%, 0 100%, 0 8%);
  margin-top: -80px;
  z-index: 10;
  background: white;
  box-sizing: border-box;
  padding: 80px 32px;
`;
