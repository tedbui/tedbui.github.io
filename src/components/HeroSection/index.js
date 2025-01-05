import React from "react";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from "./HeroElements";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg></HeroBg>
      <HeroContent>
        <HeroH1>Hi, I'm Ted!</HeroH1>

        <HeroP>
          <Typewriter
            words={["A supply chain specialist."]}
            cursor
            typeSpeed={140}
            delaySpeed={1700}
          />
        </HeroP>

        <HeroBtnWrapper></HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
