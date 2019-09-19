import React, { Component } from "react";
import {
  InfoSectionTwoWrapper,
  InfoTwoInnerWrapper
} from "../LandingPageStyles";

export default class PricingSection extends Component {
  render() {
    return (
      <InfoSectionTwoWrapper>
        <InfoTwoInnerWrapper>
          <h4>How Much Does it Cost?</h4>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </InfoTwoInnerWrapper>
      </InfoSectionTwoWrapper>
    );
  }
}
