import React, { Component } from "react";
import {
  InfoSectionWrapper,
  InfoSectionThreeColumn,
  ItemWrapper,
  AboutHeader
} from "../LandingPageStyles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHammer,
  faFilePdf,
  faReceipt
} from "@fortawesome/free-solid-svg-icons";

export default class InfoSection extends Component {
  render() {
    return (
      <InfoSectionWrapper id="infoSection">
        <AboutHeader>
          <h4>How it Works</h4>
        </AboutHeader>
        <InfoSectionThreeColumn>
          <ItemWrapper>
            <FontAwesomeIcon
              style={{ color: "#495AC7" }}
              icon={faHammer}
              size="4x"
            />
            <h4>Build your Estimate</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </ItemWrapper>
          <ItemWrapper>
            <FontAwesomeIcon
              style={{ color: "#BF283A" }}
              icon={faFilePdf}
              size="4x"
            />
            <h4>Find your Style</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </ItemWrapper>
          <ItemWrapper>
            <FontAwesomeIcon
              style={{ color: "#5A9493" }}
              icon={faReceipt}
              size="4x"
            />
            <h4>Make the Sale</h4>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </ItemWrapper>
        </InfoSectionThreeColumn>
      </InfoSectionWrapper>
    );
  }
}
