import React from "react";
import { FooterWrapper, FooterInnerWrapper } from "../LandingPageStyles";
import jump from "jump.js";

export default function LandingFooter(props) {
  return (
    <FooterWrapper>
      <FooterInnerWrapper>
        <p
          onClick={() => {
            jump("#landingHero");
          }}
        >
          about
        </p>
        <p>contact</p>
        <p
          onClick={e => {
            props.history.push("/login");
          }}
        >
          login/sign up
        </p>
      </FooterInnerWrapper>
    </FooterWrapper>
  );
}
