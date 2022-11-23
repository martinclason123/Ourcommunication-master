import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Our <br />
        Communication, LLC
      </SectionTitle>
      <SectionText>
        Over 20 years experience with data communication technologies, including
        fiber optics, copper, fixed, and satellite.
      </SectionText>
      <Button
        onClick={() => {
          window.location = "https://google.com";
        }}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
