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
              <a
                href="https://www.flickr.com/photos/198630723@N02/albums/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: scrollNav ? "black" : "white",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  padding: "0 1rem",
                  height: "100%",
                  cursor: "pointer",
                }}
              >
                Photography
              </a>
            </NavItem>
            <NavItem>
              <NavLinks
                scrollNav={scrollNav}
                to="certificates"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Certificates
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
