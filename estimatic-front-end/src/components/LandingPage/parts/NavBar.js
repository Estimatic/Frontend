import React from "react";
import { NavBarWrapper, NavBarInnerWrapper } from "../LandingPageStyles";

export default function NavBar() {
  return (
    <NavBarWrapper>
      <NavBarInnerWrapper>
        <h3>estimatic</h3>
        <ul>
          <li>about</li>
          <li>pricing</li>
          <li>FAQ</li>
          <button>login/sign up</button>
        </ul>
      </NavBarInnerWrapper>
    </NavBarWrapper>
  );
}
