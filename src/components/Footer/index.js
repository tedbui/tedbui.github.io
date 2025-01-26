import React from "react";
import { FaLinkedin, FaFlickr, FaFacebook } from "react-icons/fa";
import {
  FooterContainer,
  // FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  // FooterLinkTitle,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  // WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              {/* <FooterLinkTitle>Contact me!</FooterLinkTitle>
              <FooterLink to="/">Coming soon!</FooterLink> */}
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              Thank you for making the time for this.
            </SocialLogo>
            {/* <WebsiteRights>
              Matt © {new Date().getFullYear()}
            </WebsiteRights> */}
            <SocialIcons>
              <SocialIconLink
                href="https://www.instagram.com/__thanh.bui"
                target="_blank"
                aria-label="Instagram"
              >
                <FaFlickr />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/tedbui123/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.facebook.com/thanh.buitien.56"
                target="_blank"
                aria-label="FaceBook"
              >
                <FaFacebook />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};
export default Footer;
