import React from "react";
import { FooterWrapper, FooterInnerWrapper } from "../LandingPageStyles";
import jump from "jump.js";

export default function LandingFooter() {
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
        <p>login</p>
        <p>sign up</p>
      </FooterInnerWrapper>
    </FooterWrapper>
  );
}
