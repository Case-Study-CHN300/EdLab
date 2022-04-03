import React, { useState, useEffect, useContext } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnWrap,
  NavBtn1,
  NavBtn2,
  NavBtnLink1,
  NavBtnLink2,
} from "./NavbarElements";
import { UserContext } from '../../App';

const Navbar = ({ toggle }) => {
  const {state , dispatch} = useContext(UserContext);
  const [scrollnav, setscrollnav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setscrollnav(true);
    } else {
      setscrollnav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const RenderMenu = () => {
    if(state){
      return(
        <>
          <NavBtn1>
            <NavBtnLink1 scrollnav={scrollnav} to="/logout">Log Out</NavBtnLink1>
          </NavBtn1>
        </>
      )
    }
    else{
      return(
        <>
          <NavBtn1>
            <NavBtnLink1 scrollnav={scrollnav} to="/signup">Sign Up</NavBtnLink1>
          </NavBtn1>
          <NavBtn2>
            <NavBtnLink2 scrollnav={scrollnav} to="/signin">Sign In</NavBtnLink2>
          </NavBtn2>
        </>
      )
    }
  }
  return (
    <>
      <Nav scrollnav={scrollnav}>
            <NavbarContainer>
              <NavLogo scrollnav={scrollnav} to="/" onClick={toggleHome}>
                Leetcode
              </NavLogo >
              <MobileIcon scrollnav={scrollnav} onClick={toggle}>
                <FaBars />
              </MobileIcon>
              <NavMenu>
                <NavItem>
                  <NavLinks scrollnav={scrollnav}
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    About
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks scrollnav={scrollnav}
                    to="discover"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    Discover
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks scrollnav={scrollnav}
                    to="courses"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    Courses
                  </NavLinks>
                </NavItem>
              </NavMenu>
              <NavBtnWrap>
                <RenderMenu/>
              </NavBtnWrap>
            </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
