import React, { useState } from "react";
import Head from "next/head";
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
  HeroBr,
  ContactRegular,
} from "./HeroStyles";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  function changeVisibility() {
    setShowForm(false);
  }
  return (
    <>
      <Section row nopadding id="home">
        <Head>
          <title>Our Communication, LLC</title>
          <meta
            name="description"
            content="Meeting communication engineering, and network construction needs throughout the greater Grand Rapids, MI area. All mediums with a specialty in Fiber Optics."
          />
        </Head>
        <LeftSection>
          <Img src={"/images/hero-logo.png"} alt="Our Communication logo" />
          <HeroTitle main center>
            Our Communication, LLC
          </HeroTitle>
          <HeroSubheading>
            Meeting your communication engineering, and network construction
            needs.
          </HeroSubheading>
          <HeroSubheading>
            All mediums with a specialty in <HeroBr />
            Fiber Optics.
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
              <ContactBold href="tel:616-881-6760">
                Phone: <ContactRegular>616.881.6760</ContactRegular>
              </ContactBold>{" "}
            </ContactTitle>
            <ContactTitle>
              <ContactBold href="mailto:ricardo@ourcomm.net">
                Email: <ContactRegular>ricardo@ourcomm.net</ContactRegular>
              </ContactBold>
            </ContactTitle>
          </HeroContact>
        </LeftSection>
      </Section>
      {showForm ? <Form changeVisibility={changeVisibility} /> : null}
    </>
  );
};

export default Hero;
