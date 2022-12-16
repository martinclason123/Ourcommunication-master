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
  Img,
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
          <Img src={"/images/hero-logo.png"} />
          <HeroTitle main center>
            Our Communication, LLC
          </HeroTitle>
          <HeroSubheading>
            Meeting your communication engineering, and network construction
            needs.
          </HeroSubheading>
          <HeroSubheading>
            All mediums with a specialty in Fiber Optics.
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
