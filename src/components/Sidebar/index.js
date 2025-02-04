import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarLink2,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            About
          </SidebarLink>
          <SidebarLink
            to="resume"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Resume
          </SidebarLink>
          <SidebarLink
            to="projects"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Projects
          </SidebarLink>
          <SidebarLink2>
            <a
              href="https://www.flickr.com/photos/198630723@N02/albums/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "white",
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
          </SidebarLink2>
          <SidebarLink
            to="certificates"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Certificates
          </SidebarLink>
          <SidebarLink
            to="extracurricular"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Extracurricular
          </SidebarLink>
          <SidebarLink
            to="contact"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
// i have that's certificates from LinkedIn and i want you create a page with template like my code i was uploaded but my code its a template, you must base from my code and create a page with certificates from LinkedIn, The displayed content must be the same as the information at LinkedIn
