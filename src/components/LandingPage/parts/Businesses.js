import React from "react";
import styled from "styled-components";
import { breakPointTwo } from "../LandingPageStyles";
import { ReactComponent as FakeLogoOne } from "../../../imgs/fake_logo_1.svg";
import { ReactComponent as FakeLogoTwo } from "../../../imgs/fake_logo_2.svg";
import { ReactComponent as FakeLogoThree } from "../../../imgs/fake_logo_3.svg";
import { ReactComponent as FakeLogoFour } from "../../../imgs/fake_logo_4.svg";
import { ReactComponent as FakeLogoFive } from "../../../imgs/fake_logo_5.svg";

import {
  BusinessesWrapper,
  BusinessesInnerWrapper
} from "../LandingPageStyles";

export default function Businesses() {
  return (
    <BusinessesWrapper>
      <h4>Trusted by companies such as...</h4>
      <BusinessesInnerWrapper>
        <StyledFakeLogoOne />
        <StyledFakeLogoTwo />
        <StyledFakeLogoThree />
        <StyledFakeLogoFour />
        <StyledFakeLogoFive />
      </BusinessesInnerWrapper>
    </BusinessesWrapper>
  );
}

const StyledFakeLogoOne = styled(FakeLogoOne)`
  width: 96px;

  @media (max-width: ${breakPointTwo}) {
    width: 64px;
  }
`;

const StyledFakeLogoTwo = styled(FakeLogoTwo)`
  width: 96px;

  @media (max-width: ${breakPointTwo}) {
    width: 64px;
  }
`;

const StyledFakeLogoThree = styled(FakeLogoThree)`
  width: 96px;

  @media (max-width: ${breakPointTwo}) {
    width: 64px;
  }
`;

const StyledFakeLogoFour = styled(FakeLogoFour)`
  width: 96px;

  @media (max-width: ${breakPointTwo}) {
    width: 64px;
  }
`;

const StyledFakeLogoFive = styled(FakeLogoFive)`
  width: 96px;

  @media (max-width: ${breakPointTwo}) {
    width: 64px;
  }
`;
