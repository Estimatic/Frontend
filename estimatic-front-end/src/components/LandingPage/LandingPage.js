import React from "react";
import { BasicHero } from "./LandingPageStyles";
import NavBar from "./parts/NavBar";
import InfoSection from "./parts/InfoSection";
import { ReactComponent as HousePic } from "../../imgs/undraw_revenue_3osh.svg";

import { LeftPanel, RightPanel } from "./LandingPageStyles";

export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <BasicHero className="App">
        <LeftPanel>
          <h1>Build and beautify your estimates</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button>Learn More</button>
        </LeftPanel>
        <RightPanel>
          <HousePic style={{ width: "100%", margin: "auto" }} />
        </RightPanel>
      </BasicHero>
      <InfoSection></InfoSection>
    </div>
  );
}
