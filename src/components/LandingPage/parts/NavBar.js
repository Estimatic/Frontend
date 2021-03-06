import React from "react";
import { NavBarWrapper, NavBarInnerWrapper } from "../LandingPageStyles";
import jump from "jump.js";

export default function NavBar(props) {
  return (
    <NavBarWrapper>
      <NavBarInnerWrapper>
        <h3
          onClick={() => {
            jump("#landingHero");
          }}
        >
          estimatic
        </h3>
        <ul>
          <li
            onClick={() => {
              jump("#infoSection");
            }}
          >
            about
          </li>
          <li
            onClick={() => {
              jump("#pricing");
            }}
          >
            pricing
          </li>
          <li
            onClick={() => {
              jump("#faq");
            }}
          >
            FAQ
          </li>
          <button
            onClick={e => {
              props.history.push("/login");
            }}
          >
            login/sign up
          </button>
        </ul>
      </NavBarInnerWrapper>
    </NavBarWrapper>
  );
}
