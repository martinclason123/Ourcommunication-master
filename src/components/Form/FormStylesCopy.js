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
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  //   width: 100%;
  //   z-index: 999;
  background: #0f1624;
  display: flex;
`;

export const FormContents = styled.div`
  display: block;
  @media (max-width: 640px) {
    font-size: 1.521vw;
    text-align: center;

    // border: 1px solid #fff;
    box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
    border-radius: 1em;
    width: 40%;
    margin: auto;
  }
  @media (min-width: 641px) {
    font-size: 0.521vw;
  }
  @media (min-width: 1921px) {
    font-size: 10px;
  }
`;

export const FormTextItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Header = styled.h2`
  margin: 0;
  font-size: 3em;
  width: 50%;
  text-align: left;
  color: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
`;

export const Paragraph = styled.p`
  font-size: 2em;
  text-align: center;
  margin: 1em;
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

export const Label = styled.label`
  font-size: 2.4em;
  color: #fff;
`;
export const Label2 = styled.label`
  font-size: 2.4em;
  color: #fff;
  margin-top: 1em;
`;

export const TextInput = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "2em",
}))`
  border: 1px solid #fff;
  font-size: 2.4em;
  margin: 1em;
`;
export const InputDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const InputDiv2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const messageDiv = styled.div`
  display: flex;
  justify-content: center;
  align items: center;
`;
export const TextArea = styled.textarea.attrs((props) => ({
  //   type: "text",
  size: props.size || "2em",
}))`
  border: 1px solid #fff;
  font-size: 2.4em;
  margin: 1em 2em 1em 1em;
  height: 10em;
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
  margin: 0.5em auto 2em auto;
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

  @media ${(props) => props.theme.breakpoints.md} {
    width: ${({ alt }) => (alt ? "150px" : "184px")};
    height: ${({ alt }) => (alt ? "52px" : "48px")};
    font-size: ${({ alt }) => (alt ? "20px" : "16px")};
    margin-bottom: ${({ alt }) => (alt ? "0" : "64px")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin-bottom: ${({ alt }) => (alt ? "0" : "32px")};
  }
`;
