import React, { Component } from "react";
import { FAQWrapper, FAQItem, FAQItemTop } from "../LandingPageStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestion,
  faChartPie,
  faPalette,
  faBuilding
} from "@fortawesome/free-solid-svg-icons";

export default class Faq extends Component {
  render() {
    return (
      <FAQWrapper id="faq">
        <FAQItem flexDirection="flex-start">
          <FAQItemTop>
            <FontAwesomeIcon icon={faQuestion} size="3x" />
            <h4>Who is Estimatic useful for?</h4>
          </FAQItemTop>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </FAQItem>

        <FAQItem flexDirection="flex-end">
          <FAQItemTop>
            <h4>What do the statistics say?</h4>
            <FontAwesomeIcon icon={faChartPie} size="3x" />
          </FAQItemTop>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </FAQItem>

        <FAQItem flexDirection="flex-start">
          <FAQItemTop>
            <FontAwesomeIcon icon={faPalette} size="3x" />
            <h4>Can I use my company colors/logo?</h4>
          </FAQItemTop>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </FAQItem>

        <FAQItem flexDirection="flex-end">
          <FAQItemTop>
            <h4>What other companies are using Estimatic?</h4>
            <FontAwesomeIcon icon={faBuilding} size="3x" />
          </FAQItemTop>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </FAQItem>
      </FAQWrapper>
    );
  }
}
