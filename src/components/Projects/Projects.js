import React from "react";
import Head from "next/head";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  CustomerList,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { customers } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <Head>
      <title>Projects</title>
      <meta
        name="description"
        content="Read about our completed projects, including customers such as the City of Grand Rapids, and the John Ball Zoo."
      />
    </Head>
    <SectionDivider />
    <SectionTitle main>Proudly serving</SectionTitle>
    <GridContainer>
      <CustomerList>
        {customers.map((customer) => (
          <li>{customer}</li>
        ))}
      </CustomerList>
    </GridContainer>
  </Section>
);

export default Projects;
