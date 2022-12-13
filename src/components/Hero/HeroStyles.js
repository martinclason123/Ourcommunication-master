import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const MobileAnimationDiv = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
  top: 0;
  @media (min-width: 640px) {
    font-size: 0.521vw;
    width: 0em;
  }
`;

export const HeroSubheading = styled.p`
  max-width: 800px;
  font-size: 2.4em;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 6vw;
    margin: 1em 0;
    line-height: 1.25em;
    padding-bottom: 16px;
    width: 95%;
  }
`;

export const HeroTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.main ? "65px" : "56px")};
  line-height: ${(props) => (props.main ? "72px" : "56px")};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => (props.main ? "58px 0 16px" : "0")};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? "56px" : "48px")};
    line-height: ${(props) => (props.main ? "56px" : "48px")};
    margin-bottom: 12px;
    padding: ${(props) => (props.main ? "40px 0 12px" : "0")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 8vw;
    line-height: 1.1em;
    // font-size: ${(props) => (props.main ? "28px" : "32px")};
    // line-height: ${(props) => (props.main ? "32px" : "40px")};
    margin-bottom: 8px;
    margin-top: 1em;
    padding: ${(props) => (props.main ? "16px 0 8px" : "0")};
    max-width: 100%;
  }
`;

const HeroBr = styled.br`
  @media (max-width: 640px) {
    display: none;
  }
`;

export const HeroContact = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 0.521vw;
  margin-bottom: 15em;

  @media (min-width: 850px) {
    font-size: 5px;
  }
`;

export const ContactTitle = styled.p`
  font-size: 6em;
  @media (max-width: 640px) {
    margin: 1em;
  }
`;

export const ContactBold = styled.span`
  font-weight: bold;
`;
