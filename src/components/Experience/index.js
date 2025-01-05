import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import {
  ExperienceContainer,
  ExperienceWrapper,
  ExperienceCard,
  ExperienceH1,
  PopupContainer,
  PopupCard,
  PopupHeader,
  PopupContent,
  PopupDescription,
  CloseButton,
  PopupTitleWrapper,
  PopupTitle,
  PopupSubtitle,
  ExperienceIconWrapper,
  PopupIcon,
  MobileClose,
  CloseText,
  ExperienceP,
  ExperienceH2,
  Link,
  ExperienceIcon,
  ExperienceH6,
} from "./ExperienceElements";
// supplyChainManagement image
import supplyChainManagement from "../../images/experience/supplyChainManagement.png";

// comercialPhotographer image
import commercialPhotographer1 from "../../images/experience/commercialPhotographer1.png";
import commercialPhotographer2 from "../../images/experience/commercialPhotographer2.jpg";
import commercialPhotographer3 from "../../images/experience/commercialPhotographer3.png";
import commercialPhotographer4 from "../../images/experience/commercialPhotographer4.png";
import commercialPhotographer5 from "../../images/experience/commercialPhotographer5.png";

// assistantProductionCoordinator image
import assistantProductionCoordinator1 from "../../images/experience/assistantProductionCoordinator1.avif";

// companyLogo image
import vinaHerbFoods from "../../images/experience/companyLogo/vinaHerbFoods.png";
import ekLine from "../../images/experience/companyLogo/ekLine.jfif";
import ekLineImage from "../../images/experience/companyLogo/ekLine.png";
import vietClay from "../../images/experience/companyLogo/vietClay.jfif";
import vietClayImage from "../../images/experience/companyLogo/vietClayImage.webp";
import bpiVietnam from "../../images/experience/companyLogo/bpiVietnam.png";
import UW from "../../images/experience/companyLogo/University-of-Washington-Emblem.png";
const Experiences = () => {
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const experiences = [
    {
      position: "Supply Chain Management",
      date: "Feb 2023 - Apr 2023",
      company: "BPI Vietnam",
      address: "Ha Noi, Vietnam",
      link: "http://bpi.vn",
      fullyDescription: [
        "Improved documentation management efficiency by 30% by collaborating with internal teams to integrate fumigation-related documentation.",
        "Achieved smooth customs clearance for over 20 shipments per month by ensuring compliance with international trade regulations and a 100% match between invoices and packing lists.",
      ],
      icon: [supplyChainManagement],
      companyLogo: bpiVietnam,
    },
    {
      position: "Commercial Photographer",
      date: "May 2022 - Jun 2023",
      company: "Vietclay",
      link: "https://vietclay.com",
      fullyDescription: [
        "Improved task efficiency by 30% by collaborating with the marketing team to ensure brand consistency.",
        "Increased revenue by 50% during peak seasons by developing and executing innovative product presentation strategies across various marketing channels.",
        "Streamlined the image processing workflow by editing, organizing, resizing, cleaning surfaces, removing imperfections, and correcting color.",
      ],
      icon: [
        commercialPhotographer1,
        commercialPhotographer2,
        commercialPhotographer3,
        commercialPhotographer4,
        commercialPhotographer5,
      ],
      companyLogo: vietClay,
      companyImage: vietClayImage,
    },
    {
      position: "Student Assistant",
      date: "Aug 2023 - Mar 2024",
      company: "University of Washington",
      address: "Seattle, Washington",
      link: "https://washington.edu",
      fullyDescription: [
        "Reduced customer wait times by 20% by proactively recommending popular menu items.",
        "Efficiently managed high-volume customer traffic, processing 100+ orders daily while maintaining a friendly and professional demeanor.",

        "Increased daily revenue by 10% through effective upselling techniques.",
      ],
      companyLogo: UW,
    },
    {
      position: "Assistant Production Coordinator",
      address: "Hanoi, Vietnam",
      date: "Aug 2023 - Mar 2024",
      company: "EkLine",
      link: "https://ekline.io",
      fullyDescription: [
        "Managed and coordinated large-scale orders of up to 5,000 units monthly using Excel.",
        "Created $2,000 in yearly cost savings by communicating and maintaining relationships with more than 3 material and garment suppliers overseas to ensure timely delivery.",
        "Maintained up to 90% quality standards by carefully assessing pre-production samples for color precision and fabric length adherence, resulting in a 20% reduction in time spent addressing quality-related problems.",
      ],
      icon: [assistantProductionCoordinator1],
      companyLogo: ekLine,
      companyImage: ekLineImage,
    },
    {
      position: "Supply Chain Intern",
      date: "Nov 2024 - Present",
      company: "Vinaherbfoods",
      address: "Hanoi, Vietnam",
      link: "https://vinaherbfoods.com",
      fullyDescription: [],
      companyLogo: vinaHerbFoods,
      companyImage: vinaHerbFoods,
    },
  ];

  const openPopup = (index, experience) => {
    setSelectedExperienceIndex(index);
    setShowPopup(true ? experience.fullyDescription?.length > 0 : false);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setShowPopup(false);
    document.body.style.overflow = "auto";
  };

  return (
    <ExperienceContainer id="experiences">
      <ExperienceH1>Experiences</ExperienceH1>
      <ExperienceWrapper childCount={experiences.length}>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            onClick={() => openPopup(index, experience)}
          >
            <ExperienceIcon src={experience.companyLogo} />
            <ExperienceH2>
              <Link href={experience.link} target="_blank">
                {experience.company}
              </Link>
            </ExperienceH2>
            <ExperienceP>{experience.position}</ExperienceP>
          </ExperienceCard>
        ))}
      </ExperienceWrapper>
      {showPopup && (
        <PopupContainer visible={showPopup} onClick={closePopup}>
          <PopupCard onClick={(e) => e.stopPropagation()}>
            <PopupHeader>
              <PopupTitleWrapper>
                <PopupTitle>
                  {experiences[selectedExperienceIndex].company}
                </PopupTitle>
                <ExperienceH6>
                  {experiences[selectedExperienceIndex].position}
                </ExperienceH6>
                <PopupSubtitle>
                  {experiences[selectedExperienceIndex].date}
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
              <PopupDescription>
                {experiences[selectedExperienceIndex].fullyDescription &&
                  experiences[selectedExperienceIndex].fullyDescription.map(
                    (val, elem) => <li key={elem}>{val}</li>
                  )}
                <ExperienceIconWrapper>
                  {experiences[selectedExperienceIndex].icon &&
                    experiences[selectedExperienceIndex].icon.map(
                      (_, index) => (
                        <PopupIcon
                          src={experiences[selectedExperienceIndex].icon[index]}
                          key={index}
                        ></PopupIcon>
                      )
                    )}
                </ExperienceIconWrapper>
              </PopupDescription>
            </PopupContent>
          </PopupCard>
        </PopupContainer>
      )}
    </ExperienceContainer>
  );
};

export default Experiences;
