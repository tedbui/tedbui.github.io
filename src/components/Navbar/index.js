import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  LogoImg,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <LogoImg
              scrollNav={scrollNav}
              src={require("../../images/TedBuiIcon.png")}
              alt="Logo"
            />
          </NavLogo>
          <MobileIcon scrollNav={scrollNav} onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                scrollNav={scrollNav}
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                scrollNav={scrollNav}
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
              <NavLinks
                scrollNav={scrollNav}
                to="resume"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Resume
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                scrollNav={scrollNav}
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                scrollNav={scrollNav}
                to="experiences"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Experiences
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                scrollNav={scrollNav}
                to="photography"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Photography
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                scrollNav={scrollNav}
                to="extracurricular"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Extracurricular
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                scrollNav={scrollNav}
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
