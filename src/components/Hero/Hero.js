import React, { useState } from "react";
import Form from "../Form/Form";
import BGMobile from "../BackgrooundAnimation/BGMobile";
import { Section } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import {
  LeftSection,
  MobileAnimationDiv,
  HeroSubheading,
  HeroTitle,
  HeroContact,
  ContactTitle,
  ContactBold,
} from "./HeroStyles";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  function changeVisibility() {
    setShowForm(false);
  }
  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <HeroTitle main center>
            Our <br />
            Communication, LLC
          </HeroTitle>
          <HeroSubheading>
            Meeting communications needs throughout Michigan. Specializing in
            fiber optics, copper, cellular towers, satellite, and more.
          </HeroSubheading>
          <MobileAnimationDiv>
            <BGMobile></BGMobile>
          </MobileAnimationDiv>
          <Button
            onClick={() => {
              window.location = "/#contact";
            }}
          >
            Get Started
          </Button>
          <HeroContact>
            <ContactTitle>
              <ContactBold>Phone: </ContactBold> 616.881.6760
            </ContactTitle>
            <ContactTitle>
              <ContactBold>Email: </ContactBold> ricardo@ourcomm.net
            </ContactTitle>
          </HeroContact>
        </LeftSection>
      </Section>
      {showForm ? <Form changeVisibility={changeVisibility} /> : null}
    </>
  );
};

export default Hero;
