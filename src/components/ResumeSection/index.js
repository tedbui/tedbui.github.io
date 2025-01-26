import React, { useState } from "react";
import { ResumeExperiencePopup } from "./ResumeExperiencePopup";
import {
  ResumeContainer,
  ResumeHeader,
  ResumeH1,
  ResumeMenu,
  ResumeItem,
  ResumeWrapper,
  ResumeContent,
  EducationContainer,
  WorkContainer,
  ElementTitle,
  ElementSubtitle,
  ElementP,
  ElementList,
  ElementListItem,
  ElementSkills,
  ElementSkillsLogo,
  ElementHeaderWrapper,
  Link,
  ResumeExperienceSubtitle,
  SeeMoreButton,
} from "./ResumeElements";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import ekline from "../../images/resume/ekline.png";
import bpi from "../../images/resume/bpi.jpg";
import vietlay from "../../images/resume/vietclay.jpg";
import universityOfWashington from "../../images/resume/universityOfWashington.jpg";
const calculateMonthsWorked = (startDate, endDate = "Present") => {
  // Convert strings to Date objects
  const start = new Date(startDate);
  const end = endDate === "Present" ? new Date() : new Date(endDate);

  // Validate input
  if (start > end) {
    return "Start date must be before end date.";
  }

  // Calculate months worked
  const months = Math.ceil((end - start) / (1000 * 60 * 60 * 24 * 30.44));

  return months;
};
const ResumeSection = ({ toggle }) => {
  const [showEducation, setShowEducation] = useState(true);

  const educationOn = () => setShowEducation(true);
  const workOn = () => setShowEducation(false);
  const [popupContent, setPopupContent] = useState(null);
  const [popupImagePreview, setPopupImagePreview] = useState(null);
  const [companyLink, setCompanyLink] = useState(null);
  const [companyName, setCompanyName] = useState(null);
  const [position, setPosition] = useState(null);
  const openPopup = (
    content,
    imagePreview,
    companyLink,
    companyName,
    position
  ) => {
    setPopupContent(content);
    setPopupImagePreview(imagePreview);
    setCompanyLink(companyLink);
    setCompanyName(companyName);
    setPosition(position);
  };

  const closePopup = () => {
    setPopupContent(null);
    setPopupImagePreview(null);
    setCompanyLink(null);
    setCompanyName(null);
    setPosition(null);
  };

  return (
    <>
      <ResumeContainer id="resume">
        <ResumeWrapper>
          <ResumeHeader>
            <ResumeH1>My Journey</ResumeH1>
            <ResumeMenu>
              <ResumeItem onClick={educationOn}>Education</ResumeItem>
              <ResumeItem onClick={workOn}>Experience</ResumeItem>
            </ResumeMenu>
          </ResumeHeader>

          <ResumeContent>
            {showEducation && (
              <EducationContainer>
                <VerticalTimeline lineColor="#F6AE2D">
                  <VerticalTimelineElement
                    date="Jun 2024 - Jun 2025"
                    iconStyle={{ background: "#F6AE2D", color: "white" }}
                    icon={<FaGraduationCap />}
                  >
                    <ElementTitle className="vertical-timeline-element-title">
                      <Link href="https://www.washington.edu" target="_blank">
                        University of Washington
                      </Link>
                    </ElementTitle>
                    <ElementSubtitle className="vertical-timeline-element-subtitle">
                      Seattle, Washington
                    </ElementSubtitle>
                    <ElementP>Grade: 3.8/4.0</ElementP>
                    <ElementP>
                      Master's degree, Logistics, Materials and Supply Chain
                      Management
                    </ElementP>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    date="2019 - 2022"
                    iconStyle={{ background: "#F6AE2D", color: "white" }}
                    icon={<FaGraduationCap />}
                  >
                    <ElementTitle className="vertical-timeline-element-title">
                      <Link href="https://www.troy.edu" target="_blank">
                        Troy University
                      </Link>
                    </ElementTitle>
                    <ElementSubtitle className="vertical-timeline-element-subtitle">
                      University Ave, Troy
                    </ElementSubtitle>
                    <ElementP>
                      Bachelor of Business Administration - BBA, Business {"\n"}
                      Administration and Management, General
                    </ElementP>
                  </VerticalTimelineElement>
                </VerticalTimeline>
              </EducationContainer>
            )}
            {!showEducation && ( // Show Experience start from here
              <WorkContainer>
                <VerticalTimeline lineColor="#F6AE2D">
                  <VerticalTimelineElement
                    date="Nov 2024 - Present"
                    iconStyle={{ background: "#F6AE2D", color: "white" }}
                    icon={<MdWork />}
                  >
                    {/* Do nothing when open the popup, if in the future need to add more content, just add more ElementListItem and do something like the other elements below */}
                    <ElementHeaderWrapper
                      onClick={() => openPopup(null)}
                    ></ElementHeaderWrapper>
                    <ElementTitle className="vertical-timeline-element-title">
                      <Link href="https://vinaherbfoods.com/" target="_blank">
                        Supply Chain Intern
                      </Link>
                    </ElementTitle>
                    <ResumeExperienceSubtitle className="vertical-timeline-element-subtitle">
                      Nov 2024 - Present · {calculateMonthsWorked("Nov 2024")}{" "}
                      months
                    </ResumeExperienceSubtitle>
                    <ResumeExperienceSubtitle className="vertical-timeline-element-subtitle">
                      Vinaherbfoods
                    </ResumeExperienceSubtitle>
                    <ResumeExperienceSubtitle className="vertical-timeline-element-subtitle">
                      Hanoi, Vietnam
                    </ResumeExperienceSubtitle>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    date="Aug 2023 - Mar 2024"
                    iconStyle={{ background: "#F6AE2D", color: "white" }}
                    icon={<MdWork />}
                  >
                    <ElementHeaderWrapper></ElementHeaderWrapper>
                    <ElementTitle className="vertical-timeline-element-title">
                      <Link href="https://ekline.io/" target="_blank">
                        Assistant Production Coordinator
                      </Link>
                    </ElementTitle>
                    <ResumeExperienceSubtitle className="vertical-timeline-element-subtitle">
                      Aug 2023 - Mar 2024 ·{" "}
                      {calculateMonthsWorked("Aug 2023", "Mar 2024")} months
                    </ResumeExperienceSubtitle>
                    <ResumeExperienceSubtitle className="vertical-timeline-element-subtitle">
                      Ekline
                    </ResumeExperienceSubtitle>
                    <ResumeExperienceSubtitle className="vertical-timeline-element-subtitle">
                      Hanoi, Vietnam
                    </ResumeExperienceSubtitle>
                    <SeeMoreButton
                      onClick={() =>
                        openPopup(
                          <ElementList>
                            <ElementListItem>
                              Created $2,000 in yearly cost savings by
                              communicating and maintaining relationships with
                              more than 3 material and garment suppliers
                              overseas to ensure timely delivery.
                            </ElementListItem>
                            <ElementListItem>
                              Maintained up to 90% quality standards by
                              carefully assessing pre-production samples for
                              color precision and fabric length adherence,
                              resulting in a 20% reduction in time spent
                              addressing quality-related problems.
                            </ElementListItem>
                            <ElementListItem>
                              Managed and coordinated large-scale orders of up
                              to 5,000 units monthly using Excel
                            </ElementListItem>
                            <ElementSkills>
                              <ElementSkillsLogo
                                src={require("../../images/experience/assistantProductionCoordinator1.avif")}
                              />
                            </ElementSkills>
                          </ElementList>,
                          ekline,
                          "https://ekline.io/",
                          "Ekline",
                          "Assistant Production Coordinator"
                        )
                      }
                    >
                      See more
                    </SeeMoreButton>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    date="Aug 2024 - Present"
                    iconStyle={{ background: "#F6AE2D", color: "white" }}
                    icon={<MdWork />}
                  >
                    <ElementHeaderWrapper></ElementHeaderWrapper>
                    <ElementTitle className="vertical-timeline-element-title">
                      <Link href="https://www.washington.edu" target="_blank">
                        Barista/Inventory Manager
                      </Link>
                    </ElementTitle>
                    <ResumeExperienceSubtitle className="vertical-timeline-element-subtitle">
                      Aug 2024 - Present · {calculateMonthsWorked("Aug 2024")}{" "}
                      months
                    </ResumeExperienceSubtitle>
                    <ResumeExperienceSubtitle className="vertical-timeline-element-subtitle">
                      University of Washington
                    </ResumeExperienceSubtitle>
                    <ResumeExperienceSubtitle className="vertical-timeline-element-subtitle">
                      Seattle, Washington, United States
                    </ResumeExperienceSubtitle>
                    <SeeMoreButton
                      onClick={() =>
                        openPopup(
                          <ElementList>
                            <ElementListItem>
                              Efficiently managed high-volume customer traffic,
                              processing 100+ orders daily while maintaining a
                              friendly and professional demeanor.
                            </ElementListItem>
                            <ElementListItem>
                              Reduced customer wait times by 20% by proactively
                              recommending popular menu items and streamlining
                              the ordering process.
                            </ElementListItem>
                            <ElementListItem>
                              Increased daily revenue by 10% through effective
                              upselling techniques, suggesting complementary
                              items, and promoting special offers.
                            </ElementListItem>
                          </ElementList>,
                          universityOfWashington,
                          "https://www.washington.edu",
                          "University of Washington",
                          "Barista/Inventory Manager - UW Food & Housing Services"
                        )
                      }
                    >
                      See more
                    </SeeMoreButton>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    date="May 2022 - Jun 2023"
                    iconStyle={{ background: "#F6AE2D", color: "white" }}
                    icon={<MdWork />}
                  >
                    <ElementHeaderWrapper
                      onClick={() => null}
                    ></ElementHeaderWrapper>
                    <ElementTitle className="vertical-timeline-element-title">
                      <Link href="https://vietclay.com/" target="_blank">
                        Vietclay
                      </Link>
                    </ElementTitle>
                    <ResumeExperienceSubtitle className="vertical-timeline-element-subtitle">
                      May 2022 - Jun 2023 ·{" "}
                      {calculateMonthsWorked("May 2022", "Jun 2023")} months
                    </ResumeExperienceSubtitle>
                    <ResumeExperienceSubtitle className="vertical-timeline-element-subtitle">
                      Commercial Photographer
                    </ResumeExperienceSubtitle>
                    <ResumeExperienceSubtitle className="vertical-timeline-element-subtitle">
                      Hanoi, Vietnam
                    </ResumeExperienceSubtitle>
                    <SeeMoreButton
                      onClick={() =>
                        openPopup(
                          <ElementList>
                            <ElementSubtitle className="vertical-timeline-element-subtitle">
                              Commercial Photographer
                            </ElementSubtitle>
                            <ElementListItem>
                              Increased revenue by 50% during peak seasons by
                              developing and executing innovative product
                              presentation strategies across various marketing
                              channels (e.g., social media, website, brochures).
                            </ElementListItem>
                            <ElementListItem>
                              Streamlined the image processing workflow by
                              editing, organizing, resizing, cleaning surfaces,
                              removing imperfections, and correcting color,
                              ensuring high-quality final products.
                            </ElementListItem>
                            <ElementListItem>
                              Improved task efficiency by 30% by collaborating
                              with the marketing team to ensure brand
                              consistency and visual appeal across all marketing
                              materials
                            </ElementListItem>
                            <ElementSkills>
                              <ElementSkillsLogo
                                src={require("../../images/experience/commercialPhotographer1.png")}
                              />
                              <ElementSkillsLogo
                                src={require("../../images/experience/commercialPhotographer2.jpg")}
                              />
                              <ElementSkillsLogo
                                src={require("../../images/experience/commercialPhotographer3.png")}
                              />
                              <ElementSkillsLogo
                                src={require("../../images/experience/commercialPhotographer4.png")}
                              />
                              <ElementSkillsLogo
                                src={require("../../images/experience/commercialPhotographer5.png")}
                              />
                            </ElementSkills>
                          </ElementList>,
                          vietlay,
                          "https://vietclay.com/",
                          "Vietclay",
                          "Commercial Photographer"
                        )
                      }
                    >
                      See more
                    </SeeMoreButton>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    date="Feb 2023 - Apr 2023"
                    iconStyle={{ background: "#F6AE2D", color: "white" }}
                    icon={<MdWork />}
                  >
                    <ElementHeaderWrapper></ElementHeaderWrapper>
                    <ElementTitle className="vertical-timeline-element-title">
                      <Link href="http://bpi.vn/" target="_blank">
                        Supply Chain Management
                      </Link>
                    </ElementTitle>
                    <ResumeExperienceSubtitle className="vertical-timeline-element-subtitle">
                      Feb 2023 - Apr 2023 ·{" "}
                      {calculateMonthsWorked("Feb 2023", "Apr 2023")} months
                    </ResumeExperienceSubtitle>
                    <ResumeExperienceSubtitle className="vertical-timeline-element-subtitle">
                      Bpi
                    </ResumeExperienceSubtitle>
                    <ResumeExperienceSubtitle className="vertical-timeline-element-subtitle">
                      Hanoi, Vietnam
                    </ResumeExperienceSubtitle>
                    <SeeMoreButton
                      onClick={() =>
                        openPopup(
                          <ElementList>
                            <ElementListItem>
                              Improved documentation management efficiency by
                              30% by collaborating with internal teams to
                              integrate fumigation-related documentation
                            </ElementListItem>
                            <ElementListItem>
                              Achieved smooth customs clearance for over 20
                              shipments per month by ensuring compliance with
                              international trade regulations and a 100% match
                              between invoices and packing lists.
                            </ElementListItem>
                            <ElementSkills>
                              <ElementSkillsLogo
                                src={require("../../images/experience/supplyChainManagement.png")}
                              />
                            </ElementSkills>
                          </ElementList>,
                          bpi,
                          "http://bpi.vn/",
                          "Bpi",
                          "Supply Chain Management"
                        )
                      }
                    >
                      See more
                    </SeeMoreButton>
                  </VerticalTimelineElement>
                  {/* Just comment ulsa experience */}
                  {/* <VerticalTimelineElement
                    date="Sep 2022 - Apr 2023"
                    iconStyle={{ background: "#F6AE2D", color: "white" }}
                    icon={<MdWork />}
                  >
                    <ElementHeaderWrapper
                      onClick={() =>
                        openPopup(
                          <ElementList>
                            <ElementSkills>
                              <ElementSkillsLogo
                                src={require("../../images/experience/ulsa.jfif")}
                              />
                            </ElementSkills>
                          </ElementList>
                        )
                      }
                    >
                      <ElementTitle className="vertical-timeline-element-title">
                        <Link href="http://www.ulsa.edu.vn/" target="_blank">
                          Research Fellowship
                        </Link>
                      </ElementTitle>
                      <ElementSubtitle className="vertical-timeline-element-subtitle">
                        Hanoi, Vietnam
                      </ElementSubtitle>
                    </ElementHeaderWrapper>
                  </VerticalTimelineElement> */}
                </VerticalTimeline>
              </WorkContainer>
            )}
            {popupContent && (
              <ResumeExperiencePopup
                content={popupContent}
                onClose={closePopup}
                imagePreview={popupImagePreview}
                companyLink={companyLink}
                companyName={companyName}
                position={position}
              />
            )}
          </ResumeContent>
        </ResumeWrapper>
      </ResumeContainer>
    </>
  );
};

export default ResumeSection;
