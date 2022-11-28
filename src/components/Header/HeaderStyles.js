import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";
export const Img = styled.img`
  width: 7em;
  object-fit: cover;
  overflow: hidden;
  @media (max-width: 640px) {
    width: 12em;
  }
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2em;
  padding: 2em;
  padding-top: 2rem;

  // @media ${(props) => props.theme.breakpoints.sm} {
  //   display: grid;
  //   grid-template-columns: repeat(5, 1fr);
  //   grid-template-rows: repeat(2, 60px);
  //   grid-column-gap: 0.5rem;
  //   grid-row-gap: 0.5rem;
  // }

  @media (max-width: 640px) {
    font-size: 0.7vw;
  }
  @media (min-width: 641px) {
    font-size: 0.641vw;
  }
  @media (min-width: 1600px) {
    font-size: 0.521vw;
  }
  @media (min-width: 1921px) {
    font-size: 10px;
  }
`;
export const Span = styled.span`
  font-size: 2rem;
`;

export const HeaderSpan = styled.span`
  font-size: 3.25em;
  white-space: nowrap;
  @media (max-width: 640px) {
    display: none;
  }
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  // @media ${(props) => props.theme.breakpoints.sm} {
  //   grid-area: 2 / 2 / 3 / 5;
  // }
  @media (max-width: 640px) {
    justify-content: flex-end;
    font-size: 1.9em;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
  @media (max-width: 640px) {
    justify-content: flex-end;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 3em;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4em;
  }
`;

// Navigation Links
export const HeaderLink = styled.a`
  font-size: 2em;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5em;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

// Social Icons

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 1em;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
  @media (max-width: 640px) {
    font-size: 1.7em;
  }
`;
