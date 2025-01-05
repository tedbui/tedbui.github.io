import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import ResumeSection from "../components/ResumeSection";
import ProjectsCard from "../components/ProjectsCard";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { about } from "../components/InfoSection/Data";
import Photography from "../components/Photography";
import Extracurricular from "../components/Extracurricular";
import Experiences from "../components/Experience";
import Certificates from "../components/Certificates";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <InfoSection {...about} />
      <HeroSection />
      <ProjectsCard />
      <ResumeSection />
      <Experiences />
      <Certificates />
      <Photography />
      <Extracurricular />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
