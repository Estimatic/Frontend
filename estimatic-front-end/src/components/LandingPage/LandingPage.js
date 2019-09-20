import React from "react";
import { BasicHero } from "./LandingPageStyles";
import NavBar from "./parts/NavBar";
import InfoSection from "./parts/InfoSection";
import PricingSection from "./parts/PricingSection";
import Businesses from "./parts/Businesses";
import FinalCallToAction from "./parts/FinalCallToAction";
import LandingFooter from "./parts/LandingFooter";

import Faq from "./parts/Faq";
import { ReactComponent as HousePic } from "../../imgs/undraw_revenue_3osh.svg";
import jump from "jump.js";

import { LeftPanel, RightPanel } from "./LandingPageStyles";

export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <BasicHero id="landingHero" className="App">
        <LeftPanel>
          <h1>Build and beautify your estimates</h1>
          <p>
            YOU know how important quality materials are for your customers.
            Your customers however... may not. Estimatic's mission is to make it
            easier for you to convay quality and to increase your chances of
            selling the higher quality product.
          </p>
          <button
            onClick={() => {
              jump("#infoSection");
            }}
          >
            Learn More
          </button>
        </LeftPanel>
        <RightPanel>
          <HousePic style={{ width: "100%", margin: "auto" }} />
        </RightPanel>
      </BasicHero>
      <InfoSection />
      <PricingSection />
      <Faq />
      <Businesses />
      <FinalCallToAction />
      <LandingFooter />
    </div>
  );
}
