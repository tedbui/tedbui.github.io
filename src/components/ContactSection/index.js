import React from "react";
import {
  ContactContainer,
  ContactRow,
  ContactWrapper,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  LinkButton,
  LinkIconWrapper,
  LinkWrapper,
} from "./ContactElements";
import { FaLinkedin, FaInstagram, FaFlickr } from "react-icons/fa";

const Contact = () => {
  const linkedinProfileUrl = "https://www.linkedin.com/in/tedbui123/";
  const instagramProfileUrl = "https://www.instagram.com/__thanh.bui";

  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <ContactRow>
          <Column1>
            <TextWrapper>
              <TopLine>Hope you had a wonderful time exploring.</TopLine>
              <Heading lightText={true}>Let's Talk!</Heading>
              <Subtitle darkText={false}>
                Seeking Full-time Opportunities
                <span role="img" aria-label="eyes">
                  {" "}
                  👀
                </span>
              </Subtitle>
              <LinkWrapper>
                <LinkButton
                  href="https://www.flickr.com/photos/198630723@N02/albums/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIconWrapper>
                    <FaFlickr />
                  </LinkIconWrapper>
                  Flickr
                </LinkButton>
                <LinkButton
                  href={linkedinProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIconWrapper>
                    <FaLinkedin />
                  </LinkIconWrapper>
                  LinkedIn
                </LinkButton>
                <LinkButton
                  href={instagramProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIconWrapper>
                    <FaInstagram />
                  </LinkIconWrapper>
                  Instagram
                </LinkButton>
              </LinkWrapper>
            </TextWrapper>
          </Column1>
        </ContactRow>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
