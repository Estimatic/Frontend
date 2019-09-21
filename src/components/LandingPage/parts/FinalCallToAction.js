import React from "react";
import {
  CallToActionInnerWrapper,
  CallToActionWrapper
} from "../LandingPageStyles";

export default function FinalCallToAction(props) {
  return (
    <CallToActionWrapper>
      <CallToActionInnerWrapper>
        <h4>All of that sound good?</h4>
        <button
          onClick={e => {
            props.history.push("/signup");
          }}
        >
          Sign Up Now
        </button>
      </CallToActionInnerWrapper>
    </CallToActionWrapper>
  );
}
