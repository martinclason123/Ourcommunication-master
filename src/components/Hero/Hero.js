import React, { useState } from "react";
import Form from "../Form/Form";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Our <br />
            Communication, LLC
          </SectionTitle>
          <SectionText>
            Meeting communications needs throughout Michigan. Specializing in
            fiber optics, copper, cellular towers, satellite, and more.
          </SectionText>
          <Button
            onClick={() => {
              // window.location = "https://google.com";
              setShowForm(true);
            }}
          >
            Get Started
          </Button>
        </LeftSection>
      </Section>
      {showForm ? <Form /> : null}
    </>
  );
};

export default Hero;
