import React from "react";
import {
  CallToActionInnerWrapper,
  CallToActionWrapper
} from "../LandingPageStyles";

export default function FinalCallToAction() {
  return (
    <CallToActionWrapper>
      <CallToActionInnerWrapper>
        <h4>All of that sound good?</h4>
        <button>Sign Up Now</button>
      </CallToActionInnerWrapper>
    </CallToActionWrapper>
  );
}
