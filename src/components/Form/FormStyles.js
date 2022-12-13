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

export const FullScreen = styled.div`
  background: #0f1624;

  @media (max-width: 640px) {
    font-size: 1.521vw;
  }

  @media (min-width: 641px) {
    font-size: 0.667vw;
    margin: 0 0 3em 0em;
    width: 133em;
    max-width: 1050px;
    padding: 2em;
    border-radius: 2em;
    box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  }

  //   @media (min-width: 1600px) {
  //     font-size: 0.521vw;
  //     margin: 0 0 3em 5em;
  //     width: 100em;
  //     padding: 2em;
  //     border-radius: 2em;
  //     box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  //   }
  @media (min-width: 1200px) {
    font-size: 8px;
  }
`;
export const FormTextItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 2em;

  @media (max-width: 640px) {
    width: 100%;
  }
  @media (min-width: 641px) {
    width: 100%;
  }
`;
export const FormTextArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  align-items: flex-start;
  margin: 2em;

  @media (max-width: 640px) {
    width: 100%;
  }
  @media (min-width: 641px) {
    // width: 100%;
  }
`;
export const Header = styled.h2`
  margin: 0;
  font-size: 4em;
  text-align: left;
  width: 15%;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 640px) {
    width: 40%;
    font-size: 3em;
  }
  @media (min-width: 641px) {
    width: 4.5em;
    font-size: 5em;
    margin-left: 2em;
    margin-right: 3em;
  }
`;

export const TextInput = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "2em",
}))`
  border: 1px solid #fff;
  font-size: 2.4em;
  width: 30em;

  @media (max-width: 640px) {
    width: 80%;
    margin-right: 2em;
  }
  @media (min-width: 641px) {
    width: 50%;
    padding: 0.1em;
    border-radius: 0.1em;
  }
`;

export const TextArea = styled.textarea.attrs((props) => ({
  //   type: "text",
  size: props.size || "2em",
}))`
  border: 1px solid #fff;
  font-size: 2.4em;
  width: 30em;
  height: 10em;

  @media (max-width: 640px) {
    width: 80%;
    margin-right: 2em;
  }
  @media (min-width: 641px) {
    width: 50%;
    padding: 0.1em;
    border-radius: 0.1em;
  }
`;

export const Close = styled.button`
  margin: 2% 0 0 90%;
  font-size: 2.4em;
  color: #fff;
  background: transparent;
  border: transparent;
  font-weight: bold;
  display: inline;
  cursor: pointer;
`;

export const FormButton = styled.div`
  width: ${({ alt }) => (alt ? "5em" : "7em")};
  height: ${({ alt }) => (alt ? "3em" : "2em")};
  border-radius: 50px;
  font-size: ${({ alt }) => (alt ? "2.4em" : "2.4em")};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5em 0;
  //   margin: ${({ alt, form }) => (alt || form ? "0" : "0 0 80px")};
  color: #fff;
  background: ${({ alt }) =>
    alt
      ? "linear-gradient(270deg, #ff622e 0%, #B133FF 100%)"
      : "linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)"};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => (disabled ? ".5" : "1")};

  @media (min-width: 641px) {
    //width: ${({ alt }) => (alt ? "6em" : "8em")};
    // height: ${({ alt }) => (alt ? "52px" : "48px")};
    // font-size: ${({ alt }) => (alt ? "20px" : "16px")};
    // margin-bottom: ${({ alt }) => (alt ? "0" : "64px")};
    width: 8em;
    font-size: 4em;
    margin: 2em 0 2em 16.5em;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 98%;
    height: 32px;
    font-size: 14px;
    margin-bottom: ${({ alt }) => (alt ? "0" : "32px")};
  }
`;
