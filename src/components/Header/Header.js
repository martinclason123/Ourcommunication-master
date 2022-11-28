import Link from "next/link";
import React from "react";
import Logo from "../../constants/constants";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
  Img,
  HeaderSpan,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href={"/"}>
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            // marginBottom: "20px",
          }}
        >
          <Img src={"/images/Logo.png"} />
          <HeaderSpan>Our Communication</HeaderSpan>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://facebook.com">
        <AiFillFacebook size="5em" />
      </SocialIcons>
      <SocialIcons href="https://Linkedin.com">
        <AiFillLinkedin size="5em" />
      </SocialIcons>
      <SocialIcons href="https://Instagram.com">
        <AiFillInstagram size="5em" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
