import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <li>
          <LinkColumn>
            <LinkTitle>Call</LinkTitle>
            <LinkItem href="tel:616-881-6760">616-881-6760</LinkItem>
          </LinkColumn>
        </li>
        <li>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:ricardocarroll72@gmail.com">
              ricardo@ourcomm.net
            </LinkItem>
          </LinkColumn>
        </li>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>On Budget. On Time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons
            href="https://www.facebook.com/profile.php?id=100084148452606"
            aria-label="Facebook"
          >
            <AiFillFacebook size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/ricardo-carroll-79830a92/"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://Instagram.com" aria-label="Instagram">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
