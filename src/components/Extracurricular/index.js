import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import {
  ExtracurricularContainer,
  ExtracurricularCard,
  ExtracurricularWrapper,
  ExtracurricularIcon,
  ExtracurricularH2,
  ExtracurricularH1,
  ExtracurricularPopupContainer,
  PopupCard,
  PopupTitle,
  ExtracurricularPopupImagePreview,
  CloseButton,
  PopupHeader,
  PopupContent,
  PopupTitleWrapper,
  PopupSubtitle,
  MobileClose,
  CloseText,
} from "./ExtracurricularElements";
import cebonPerfumeIcon from "../../images/projects/cebonPerfumeIcon.png";
import hanoiMidAutumn from "../../images/projects/hanoiMidAutumn.jpg";
import muongLat from "../../images/projects/muongLat.jfif";
import muongLatIcon from "../../images/projects/muongLatIcon.jfif";
// Autumn images
import autumn1 from "../../images/photography/autumn/autumn1.jpg";
import autumn2 from "../../images/photography/autumn/autumn2.jpg";
import autumn3 from "../../images/photography/autumn/autumn3.jpg";
import autumn4 from "../../images/photography/autumn/autumn4.jpg";
import autumn5 from "../../images/photography/autumn/autumn5.jpg";

// Muong lat images
import muonglat1 from "../../images/photography/muonglat/muonglat1.jfif";
import muonglat2 from "../../images/photography/muonglat/muonglat2.jfif";
import muonglat3 from "../../images/photography/muonglat/muonglat3.jfif";
import muonglat4 from "../../images/photography/muonglat/muonglat4.jfif";

// C'ebon perfume images
import cebon1 from "../../images/photography/cebon/cebon1.jpg";
import cebon2 from "../../images/photography/cebon/cebon2.jpg";
import cebon3 from "../../images/photography/cebon/cebon3.jpg";

const Extracurricular = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const projects = [
    {
      image: cebonPerfumeIcon,
      title: "C'ebon Perfume",
      date: "May 2020",
      fullDescription: `C'ebon Perfume began as a passion project,
      with my bedroom serving as the first "warehouse" for all my fragrance bottles!
      What started as a small collection quickly turned into an opportunity to share my love for perfume with others.
      Along the way, I discovered the ins and outs of the supply chain—learning how to get the right scent into the hands of the right people.
      C’ebon is where my passion for fragrance meets the challenges of business, and I wouldn’t have it any other way!`,
      imagePreview: [cebon1, cebon2, cebon3],
    },
    {
      image: hanoiMidAutumn,
      title: "A Hanoi Mid-Autumn Story",
      date: "Jun 2022",
      fullDescription: `I'm pleased to share that one of my photography projects,
      which documents the Mid-Autumn Festival in Hanoi,
      has garnered significant attention, achieving 6,500 likes on Facebook.
      This project reflects my passion for capturing cultural moments and utilizing visual storytelling to connect with audiences.`,
      imagePreview: [
        hanoiMidAutumn,
        autumn1,
        autumn2,
        autumn3,
        autumn4,
        autumn5,
      ],
    },
    {
      image: muongLatIcon,
      title: " Muong Lat",
      date: "May 2022",
      fullDescription: `This experience was incredibly humbling. 
      I had the privilege of guiding 20 university students as we rebuilt Pha Den Primary School in Muong Lat, Vietnam.
      Thanks to the support of 50+ donors, we were able to create a brighter future for these amazing kids.`,
      imagePreview: [muongLat, muonglat1, muonglat2, muonglat3, muonglat4],
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
    <ExtracurricularContainer id="extracurricular">
      <ExtracurricularH1>Extracurricular</ExtracurricularH1>

      <ExtracurricularWrapper childCount={projects.length}>
        {projects.map((project, index) => (
          <ExtracurricularCard key={index} onClick={() => openPopup(index)}>
            <ExtracurricularIcon src={project.image} />
            <ExtracurricularH2>{project.title}</ExtracurricularH2>
          </ExtracurricularCard>
        ))}
      </ExtracurricularWrapper>
      {showPopup && (
        <ExtracurricularPopupContainer visible={showPopup} onClick={closePopup}>
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
              {projects[selectedProjectIndex].imagePreview.map((_, index) => (
                <ExtracurricularPopupImagePreview
                  src={projects[selectedProjectIndex].imagePreview[index]}
                  key={index}
                ></ExtracurricularPopupImagePreview>
              ))}
            </PopupContent>
          </PopupCard>
        </ExtracurricularPopupContainer>
      )}
    </ExtracurricularContainer>
  );
};

export default Extracurricular;
