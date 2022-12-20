import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  TechUl,
  TechLi,
  ListIcon,
} from "./TechnologiesStyles";

import { copperIcon, rfIcon, fiberIcon } from "../../constants/constants";
const copperList = [
  "High bandwidth, Short distance multi mode fiber",
  "FTTP long distance single mode fiber",
  "Piece rate builds",
  "Characterization testing and certification",
  "EMERGENCY REPAIR",
];
const ethernetList = [
  "Wiring new drops and equipment",
  "Tower wiring",
  "Connection to infrastructure",
  "Characterization testing and certification",
  "Cable management and patch panel clean-up",
];
const rfList = [
  "Building to building",
  "Tower to head-end ",
  "PTP/PTMP",
  "Tower to tower ",
];
const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>

    <List>
      <ListItem>
        <ListIcon width={"85px"} src={fiberIcon}></ListIcon>
        <ListContainer>
          <ListTitle>Fiber</ListTitle>

          <TechUl>
            {copperList.map((item) => (
              <TechLi>{`${item}`}</TechLi>
            ))}
          </TechUl>
          <ListParagraph>
            Whatever your need, we have designed, constructed, and turned up
            thousands of miles for our clients.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListIcon src={copperIcon}></ListIcon>
        <ListContainer>
          <ListTitle>Ethernet</ListTitle>
          <TechUl>
            {ethernetList.map((item) => (
              <TechLi>{`${item}`}</TechLi>
            ))}
          </TechUl>
          <ListParagraph>
            From conception to turn-up, we can manage and organize your existing
            infrastructure to create an environment of longevity, whatever the
            medium.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListIcon src={rfIcon}></ListIcon>
        <ListContainer>
          <ListTitle>RF</ListTitle>
          <TechUl>
            {rfList.map((item) => (
              <TechLi>{`${item}`}</TechLi>
            ))}
          </TechUl>
          <ListParagraph>
            We can help you engineer a design, permit, construct and turn up
            your short and long distance radio frequency signals
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
