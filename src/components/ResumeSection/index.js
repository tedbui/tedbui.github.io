import React, { useState } from "react";
import { ExperiencePopup } from "./ExperiencePopup";
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
} from "./ResumeElements";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import hanoiMidAutumn from "../../images/projects/hanoiMidAutumn.jpg";
import cebonPerfume from "../../images/projects/cebonPerfume.png";

const ResumeSection = ({ toggle }) => {
  const [showEducation, setShowEducation] = useState(true);

  const educationOn = () => setShowEducation(true);
  const workOn = () => setShowEducation(false);
  const [popupContent, setPopupContent] = useState(null);
  const [popupImagePreview, setPopupImagePreview] = useState(null);
  const openPopup = (content, imagePreview) => {
    setPopupContent(content);
    setPopupImagePreview(imagePreview);
  };

  const closePopup = () => {
    setPopupContent(null);
    setPopupImagePreview(null);
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
                    <ElementHeaderWrapper onClick={() => openPopup(null)}>
                      <ElementTitle className="vertical-timeline-element-title">
                        <Link href="https://vinaherbfoods.com/" target="_blank">
                          Supply Chain Intern
                        </Link>
                      </ElementTitle>
                      <ElementSubtitle className="vertical-timeline-element-subtitle">
                        Hanoi, Vietnam
                      </ElementSubtitle>
                    </ElementHeaderWrapper>

                    <ElementP></ElementP>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    date="Aug 2023 - Mar 2024"
                    iconStyle={{ background: "#F6AE2D", color: "white" }}
                    icon={<MdWork />}
                  >
                    <ElementHeaderWrapper
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
                          hanoiMidAutumn
                        )
                      }
                    >
                      <ElementTitle className="vertical-timeline-element-title">
                        <Link href="https://ekline.io/" target="_blank">
                          Assistant Production Coordinator
                        </Link>
                      </ElementTitle>
                      <ElementSubtitle className="vertical-timeline-element-subtitle">
                        Hanoi, Vietnam
                      </ElementSubtitle>
                    </ElementHeaderWrapper>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    date="Aug 2023 - Mar 2024"
                    iconStyle={{ background: "#F6AE2D", color: "white" }}
                    icon={<MdWork />}
                  >
                    <ElementHeaderWrapper
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
                          cebonPerfume
                        )
                      }
                    >
                      <ElementTitle className="vertical-timeline-element-title">
                        <Link href="https://www.washington.edu" target="_blank">
                          Student Assistant
                        </Link>
                      </ElementTitle>
                      <ElementSubtitle className="vertical-timeline-element-subtitle">
                        Seattle, Washington
                      </ElementSubtitle>
                    </ElementHeaderWrapper>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    date="May 2022 - Jun 2023"
                    iconStyle={{ background: "#F6AE2D", color: "white" }}
                    icon={<MdWork />}
                  >
                    <ElementHeaderWrapper
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
                          </ElementList>
                        )
                      }
                    >
                      <ElementTitle className="vertical-timeline-element-title">
                        <Link href="https://vietclay.com/" target="_blank">
                          Vietclay
                        </Link>
                      </ElementTitle>
                      <ElementSubtitle className="vertical-timeline-element-subtitle">
                        Hanoi, Vietnam
                      </ElementSubtitle>
                    </ElementHeaderWrapper>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    date="Feb 2023 - Apr 2023"
                    iconStyle={{ background: "#F6AE2D", color: "white" }}
                    icon={<MdWork />}
                  >
                    <ElementHeaderWrapper
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
                          </ElementList>
                        )
                      }
                    >
                      <ElementTitle className="vertical-timeline-element-title">
                        <Link href="http://bpi.vn/" target="_blank">
                          Supply Chain Management
                        </Link>
                      </ElementTitle>
                      <ElementSubtitle className="vertical-timeline-element-subtitle">
                        Hanoi, Vietnam
                      </ElementSubtitle>
                    </ElementHeaderWrapper>
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
              <ExperiencePopup
                content={popupContent}
                onClose={closePopup}
                imagePreview={popupImagePreview}
              />
            )}
          </ResumeContent>
        </ResumeWrapper>
      </ResumeContainer>
    </>
  );
};

export default ResumeSection;
