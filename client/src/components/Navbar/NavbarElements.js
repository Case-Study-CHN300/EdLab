import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollnav }) => (scrollnav ? "black" : "transparent")};
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and(max-width:960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: ${({ scrollnav }) => (scrollnav ? "white" : "black")};
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ scrollnav }) => (scrollnav ? "white" : "black")};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: ${({ scrollnav }) => (scrollnav ? "white" : "black")};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #4169e1;
  }
`;

export const NavBtn1 = styled.nav`
  display: flex;
  align-items: center;
  margin: 0.5rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn2 = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink1 = styled(LinkR)`
  border-radius: 5px;
  background: white;
  white-space: nowrap;
  padding: 10px 25px;
  color: black;
  font-size: 16px;
  outline: none;
  border: 0.2px solid black;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  float: left;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #12f84d;
    color: #f9f9f9;
    border: none;
  }
`;

export const NavBtnLink2 = styled(LinkR)`
  border-radius: 5px;
  background: #4169e1;
  white-space: nowrap;
  padding: 10px 25px;
  color: #f9f9f9;
  font-size: 16px;
  outline: none;
  border: 0.2px solid #4169e1;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  float: left;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #12f84d;
    border: none;
  }
`;

export const NavBtnWrap = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
`;