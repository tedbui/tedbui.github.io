import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import {
  ProjectsContainer,
  ProjectsCard,
  ProjectsWrapper,
  ProjectsIcon,
  ProjectsH2,
  ProjectsH1,
  PopupContainer,
  PopupCard,
  PopupTitle,
  CloseButton,
  PopupHeader,
  PopupContent,
  PopupImagePreview,
  PopupTitleWrapper,
  PopupSubtitle,
  MobileClose,
  CloseText,
  ContentSection,
  Description,
  ImagesGrid,
} from "./ProjectsElements";

import cebonPerfumeIcon from "../../images/projects/cebonPerfumeIcon.png";
import hanoiMidAutumn from "../../images/projects/hanoiMidAutumn.jpg";
import hanoiMidAutumnIcon from "../../images/projects/hanoiMidAutumnIcon.jpg";
import muongLat from "../../images/projects/muongLat.jfif";
import muongLatIcon from "../../images/projects/muongLatIcon.jfif";

// C'ebon Perfume images
import cebonPerfume from "../../images/projects/cebonPerfume.png";
import supplyChain from "../../images/projects/supplyChain.jpeg";

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const projects = [
    {
      icon: cebonPerfumeIcon,
      title: "C'ebon Perfume",
      date: "May 2020",
      sections: [
        {
          text: "C'ebon Perfume began as a passion project, with my bedroom serving as the first 'warehouse' for all my fragrance bottles! What started as a small collection quickly turned into an opportunity to share my love for perfume with others.",
          images: [cebonPerfume],
        },
        {
          text: "Along the way, I discovered the ins and outs of the supply chain—learning how to get the right scent into the hands of the right people.",
          images: [supplyChain],
        },
      ],
    },
    {
      icon: hanoiMidAutumnIcon,
      title: "A Hanoi Mid-Autumn Story",
      date: "Jun 2022",
      sections: [
        {
          text: "I'm pleased to share that one of my photography projects, which documents the Mid-Autumn Festival in Hanoi, has garnered significant attention, achieving 6,500 likes on Facebook.",
          images: [hanoiMidAutumn],
        },
        {
          text: "This project reflects my passion for capturing cultural moments and utilizing visual storytelling to connect with audiences.",
          images: [hanoiMidAutumnIcon],
        },
      ],
    },
    {
      icon: muongLatIcon,
      title: "Muong Lat",
      date: "May 2022",
      sections: [
        {
          text: "This experience was incredibly humbling. I had the privilege of guiding 20 university students as we rebuilt Pha Den Primary School in Muong Lat, Vietnam.",
          images: [muongLat],
        },
        {
          text: "Thanks to the support of 50+ donors, we were able to create a brighter future for these amazing kids.",
          images: [muongLatIcon],
        },
      ],
    },
  ];

  const openPopup = (index) => {
    setSelectedProjectIndex(index);
    setShowPopup(true);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setShowPopup(false);
    document.body.style.overflow = "auto";
  };

  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>Projects</ProjectsH1>

      <ProjectsWrapper childCount={projects.length}>
        {projects.map((project, index) => (
          <ProjectsCard key={index} onClick={() => openPopup(index)}>
            <ProjectsIcon src={project.icon} />
            <ProjectsH2>{project.title}</ProjectsH2>
          </ProjectsCard>
        ))}
      </ProjectsWrapper>

      {showPopup && (
        <PopupContainer visible={showPopup} onClick={closePopup}>
          <PopupCard onClick={(e) => e.stopPropagation()}>
            <PopupHeader>
              <PopupTitleWrapper>
                <PopupTitle>{projects[selectedProjectIndex].title}</PopupTitle>
                <PopupSubtitle>
                  {projects[selectedProjectIndex].date}
                </PopupSubtitle>
              </PopupTitleWrapper>
              <CloseButton onClick={closePopup}>
                <CloseText>Close</CloseText>
                <MobileClose>
                  <RxCross2 />
                </MobileClose>
              </CloseButton>
            </PopupHeader>

            <PopupContent>
              {projects[selectedProjectIndex].sections.map((section, index) => (
                <ContentSection key={index}>
                  <Description>{section.text}</Description>
                  <ImagesGrid>
                    {section.images.map((image, imgIndex) => (
                      <PopupImagePreview
                        key={imgIndex}
                        src={image}
                        alt={`${projects[selectedProjectIndex].title} ${
                          imgIndex + 1
                        }`}
                      />
                    ))}
                  </ImagesGrid>
                </ContentSection>
              ))}
            </PopupContent>
          </PopupCard>
        </PopupContainer>
      )}
    </ProjectsContainer>
  );
};

export default Projects;
