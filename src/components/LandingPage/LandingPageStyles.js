import styled from "styled-components";

export const breakPointOne = "900px";
export const breakPointTwo = "640px";

const maxScreenWidth = "1300px";
const companyColor = "#3B49B8";
// const companyRed = "#BF273A";
// const companyGreen = "#5A9493";

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
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakPointOne}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20vh;
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
    cursor: pointer;
    @media (min-width: 1350px) {
      margin-left: 8px;
    }
  }

  ul {
    display: flex;
    margin-right: 16px;
    li {
      list-style-type: none;
      padding: 0 16px;
      cursor: pointer;
      @media (max-width: ${breakPointTwo}) {
        display: none;
      }
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

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    width: 128px;
    padding: 12px 0;
    font-size: 14px;
    background: #449ece;
    color: white;
    border: none;
    border-radius: 32px;
    font-weight: 600;
    cursor: pointer;
    margin: auto;
  }
  button:hover {
    background: ${companyColor};
  }
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
    margin-top: 16px;
    width: 160px;
    padding: 12px 0;
    border-radius: 32px;
    background: ${companyColor};
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
    margin-bottom: 16px;
    padding-right: 0px;
  }
`;

export const RightPanel = styled.div`
  width: 44%;
  max-width: 600px;
  height: 400px;
  margin-right: 32px;
  border-radius: 16px;
  max-width: 600px;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;

  @media (max-width: ${breakPointOne}) {
    width: 95%;
    max-width: 700px;
    margin-bottom: 128px;
    margin-right: 0px;
  }
`;

export const InfoSectionWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  clip-path: polygon(50% 0, 100% 8%, 100% 100%, 50% 100%, 0 100%, 0 8%);
  margin-top: -80px;
  z-index: 10;
  background: white;
  box-sizing: border-box;
  padding: 120px 32px;
  @media (max-width: ${breakPointOne}) {
    clip-path: polygon(50% 0, 100% 4%, 100% 100%, 50% 100%, 0 100%, 0 4%);
  }
`;

export const InfoSectionThreeColumn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  max-width: ${maxScreenWidth};
  margin: auto;

  p {
    padding-top: 32px;
  }

  @media (max-width: ${breakPointOne}) {
    flex-direction: column;
  }
`;

export const ItemWrapper = styled.div`
  width: 33%;
  box-sizing: border-box;
  padding: 32px;
  background: rgba(0, 0, 0, 0.02);
  margin: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2px;

  h4 {
    font-weight: 600;
    font-size: 24px;
  }

  p {
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    margin: 0 auto;
    padding-top: 0;
  }

  @media (max-width: ${breakPointOne}) {
    width: 100%;
  }
`;

export const AboutHeader = styled.div`
  margin: auto;
  margin-bottom: 32px;
  width: 100%;
  max-width: ${maxScreenWidth};
  h4 {
    font-size: 36px;
    color: rgba(0, 0, 0, 0.5);
    margin: 0;
    padding: 0;
  }
`;

export const InfoSectionTwoWrapper = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.04);
`;

export const InfoTwoInnerWrapper = styled.div`
  color: black;
  max-width: ${maxScreenWidth};
  padding: 32px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    font-size: 36px;
    color: rgba(0, 0, 0, 0.5);
    margin: 0;
    margin-bottom: 24px;
    padding: 0;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    width: 60%;
    @media (max-width: ${breakPointOne}) {
      width: 80%;
    }
  }
`;

export const FAQWrapper = styled.div`
  padding: 32px;
  min-height: 900px;
  background: rgba(0, 0, 0, 0.04);
  background: white;
`;

export const FAQItem = styled.div`
  max-width: 1100px;
  box-sizing: border-box;
  min-height: 150px;
  border-radius: 16px;
  padding: 36px 32px;
  margin: 8px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => props.flexDirection || "flex-start"};
  color: ${companyColor};

  @media (max-width: ${breakPointOne}) {
    align-items: center;
    width: 100%;
  }

  h4 {
    font-size: 24px;
    margin: 0 16px;
    padding: 0;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    width: 70%;
    max-width: 800px;
    @media (max-width: ${breakPointOne}) {
      width: 90%;
    }
  }
`;

export const FAQItemTop = styled.div`
  display: flex;
  align-items: center;
`;

export const BusinessesInnerWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
`;

export const BusinessesWrapper = styled.div`
  padding: 32px;
  background: ${companyColor};
  color: #999999;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);

  h4 {
    font-weight: 600;
    font-size: 28px;
    text-align: center;
    @media (max-width: ${breakPointTwo}) {
      font-size: 20px;
      margin: 8px auto;
    }
  }
`;

export const CallToActionWrapper = styled.div`
  padding: 64px 32px;
  background: rgba(0, 0, 0, 0.04);
  color: black;

  h4 {
    font-weight: 600;
    font-size: 32px;
    margin: 0;
    text-align: center;
    @media (max-width: ${breakPointTwo}) {
      font-size: 28px;
      margin: 8px auto;
    }
  }
`;

export const CallToActionInnerWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: auto;

  button {
    margin-left: 32px;
    margin-top: 32px;
    width: 200px;
    padding: 16px 0;
    border-radius: 32px;
    background: ${companyColor};
    color: white;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 800;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  }
  button:hover {
    background: white;
    color: ${companyColor};
    border: 1px solid ${companyColor};
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const FooterWrapper = styled.div`
  padding: 16px 32px;
  background: rgba(0, 0, 0, 0.1);
  color: black;
`;

export const FooterInnerWrapper = styled.div`
  width: 100%;
  max-width: ${maxScreenWidth};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: auto;

  p {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.4);
    margin: 8px;
    cursor: pointer;
  }
  p:hover {
    color: ${companyColor};
  }
`;
