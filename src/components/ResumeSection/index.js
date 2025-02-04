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
  ElementList,
  ElementListItem,
  ElementSubtitle3,
  ElementHeaderWrapper,
  Link,
  ResumeExperienceSubtitle,
  SeeMoreButton,
  PopupImagePreview,
  ElementSubtitle2,
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
import vietclay from "../../images/resume/vietclay.jpg";
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
                    <ResumeExperienceSubtitle>
                      Grade: 3.8/4.0
                    </ResumeExperienceSubtitle>
                    <ResumeExperienceSubtitle>
                      Master's degree, Logistics, Materials and Supply Chain
                      Management
                    </ResumeExperienceSubtitle>
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
                    <ResumeExperienceSubtitle>
                      Bachelor of Business Administration - BBA, Business {"\n"}
                      Administration and Management, General
                    </ResumeExperienceSubtitle>
                  </VerticalTimelineElement>
                </VerticalTimeline>
              </EducationContainer>
            )}
            {!showEducation && ( // Show Experience start from here
              <WorkContainer>
                <VerticalTimeline lineColor="#F6AE2D">
                  <VerticalTimelineElement
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
                      Nov 2024 - Present
                    </ResumeExperienceSubtitle>
                    <ResumeExperienceSubtitle className="vertical-timeline-element-subtitle">
                      Vinaherbfoods
                    </ResumeExperienceSubtitle>
                    <ResumeExperienceSubtitle className="vertical-timeline-element-subtitle">
                      Hanoi, Vietnam
                    </ResumeExperienceSubtitle>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
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
                      Aug 2023 - Mar 2024
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
                          <div
                            style={{
                              maxHeight: "600px",
                              overflowY: "auto",
                              paddingRight: "10px",
                            }}
                          >
                            <ElementSubtitle2>
                              As an Assistant Production Coordinator at Ekline,
                              I focused on streamlining production workflows and
                              enhancing communication within the supply chain.
                            </ElementSubtitle2>
                            <PopupImagePreview src={ekline}></PopupImagePreview>
                            <ElementSubtitle3>
                              {<Link href="https://ekline.io/">Ekline </Link>}|
                              HANOI, VIETNAM | ASSISTANT PRODUCTION COORDINATOR
                              | AUG. 2023–MAR. 2024
                            </ElementSubtitle3>
                            <ElementList>
                              <ElementListItem>
                                <strong>Challenge:</strong>
                                <ul style={{ paddingLeft: "15px" }}>
                                  <li>
                                    Streamline production workflows in a dynamic
                                    garment manufacturing environment with
                                    complex international supply chains.
                                  </li>
                                </ul>
                              </ElementListItem>

                              <ElementListItem>
                                <strong>Strategic Approach:</strong>
                                <ul style={{ paddingLeft: "15px" }}>
                                  <li>Optimize supplier communication</li>
                                  <li>Reduce production costs</li>
                                  <li>Maintain rigorous quality control</li>
                                </ul>
                              </ElementListItem>

                              <ElementListItem>
                                <strong>Key Achievements:</strong>
                                <ul style={{ paddingLeft: "15px" }}>
                                  <li>
                                    Generated $2,000 annual cost savings through
                                    strategic supplier negotiations
                                  </li>
                                  <li>
                                    Managed relationships with 3+ international
                                    material suppliers
                                  </li>
                                  <li>
                                    Reduced quality issue resolution time by 20%
                                  </li>
                                  <li>
                                    Successfully handled large-scale orders (up
                                    to 5,000 units monthly)
                                  </li>
                                </ul>
                              </ElementListItem>
                              <ElementListItem>
                                <strong>Impact:</strong>
                                <ul style={{ paddingLeft: "15px" }}>
                                  <li>
                                    Consistently maintained 90% quality
                                    standards
                                  </li>
                                  <li>Improved operational efficiency</li>
                                  <li>Reduced production expenses</li>
                                </ul>
                              </ElementListItem>
                            </ElementList>
                          </div>,
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
                    iconStyle={{ background: "#F6AE2D", color: "white" }}
                    icon={<MdWork />}
                  >
                    <ElementTitle className="vertical-timeline-element-title">
                      <Link href="https://www.washington.edu" target="_blank">
                        Barista/Inventory Manager
                      </Link>
                    </ElementTitle>
                    <ResumeExperienceSubtitle className="vertical-timeline-element-subtitle">
                      Aug 2024 - Present
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
                          <div
                            style={{
                              maxHeight: "600px",
                              overflowY: "auto",
                              paddingRight: "10px",
                            }}
                          >
                            <ElementSubtitle2>
                              As a Barista and Inventory Manager at the
                              University of Washington, I focused on enhancing
                              customer service and operational efficiency.
                            </ElementSubtitle2>
                            <PopupImagePreview
                              src={universityOfWashington}
                            ></PopupImagePreview>
                            <ElementSubtitle3>
                              {
                                <Link href="https://www.washington.edu">
                                  University of Washington{" "}
                                </Link>
                              }
                              | SEATTLE, WASHINGTON | BARISTA/INVENTORY MANAGER
                              | AUG 2024–PRESENT
                            </ElementSubtitle3>
                            <br></br>
                            <ElementList>
                              <ElementListItem>
                                <strong>Challenge:</strong>
                                <ul style={{ paddingLeft: "15px" }}>
                                  <li>
                                    Manage high customer volume during peak
                                    hours.
                                  </li>
                                </ul>
                              </ElementListItem>

                              <ElementListItem>
                                <strong>Strategic Approach:</strong>
                                <ul style={{ paddingLeft: "15px" }}>
                                  <li>
                                    Optimize ordering and payment processes.
                                  </li>
                                  <li>
                                    Train staff to enhance customer service.
                                  </li>
                                </ul>
                              </ElementListItem>

                              <ElementListItem>
                                <strong>Key Achievements:</strong>
                                <ul style={{ paddingLeft: "15px" }}>
                                  <li>Reduced customer wait times by 20%.</li>
                                  <li>
                                    Increased daily revenue by 10% through
                                    upselling.
                                  </li>
                                </ul>
                              </ElementListItem>

                              <ElementListItem>
                                <strong>Impact:</strong>
                                <ul style={{ paddingLeft: "15px" }}>
                                  <li>Enhanced customer experience.</li>
                                  <li>
                                    Increased customer satisfaction and loyalty.
                                  </li>
                                </ul>
                              </ElementListItem>
                            </ElementList>
                          </div>,
                          "https://www.washington.edu",
                          "University of Washington",
                          "Barista/Inventory Manager"
                        )
                      }
                    >
                      See more
                    </SeeMoreButton>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    iconStyle={{ background: "#F6AE2D", color: "white" }}
                    icon={<MdWork />}
                  >
                    <ElementHeaderWrapper
                      onClick={() => null}
                    ></ElementHeaderWrapper>
                    <ElementTitle className="vertical-timeline-element-title">
                      <Link href="https://vietclay.com/" target="_blank">
                        Commercial Photographer
                      </Link>
                    </ElementTitle>
                    <ResumeExperienceSubtitle className="vertical-timeline-element-subtitle">
                      May 2022 - Jun 2023
                    </ResumeExperienceSubtitle>
                    <ResumeExperienceSubtitle className="vertical-timeline-element-subtitle">
                      Vietclay
                    </ResumeExperienceSubtitle>
                    <ResumeExperienceSubtitle className="vertical-timeline-element-subtitle">
                      Hanoi, Vietnam
                    </ResumeExperienceSubtitle>
                    <SeeMoreButton
                      onClick={() =>
                        openPopup(
                          <div
                            style={{
                              maxHeight: "600px",
                              overflowY: "auto",
                              paddingRight: "10px",
                            }}
                          >
                            <ElementSubtitle2>
                              As a Commercial Photographer at Vietclay, I
                              focused on creating visual content to elevate
                              brand presence and drive sales.
                            </ElementSubtitle2>
                            <PopupImagePreview
                              src={vietclay}
                            ></PopupImagePreview>
                            <ElementSubtitle3>
                              {
                                <Link href="https://vietclay.com/">
                                  Vietclay{" "}
                                </Link>
                              }
                              | HANOI, VIETNAM | COMMERCIAL PHOTOGRAPHER | MAY
                              2022–JUN 2023
                            </ElementSubtitle3>
                            <ElementList>
                              <ElementListItem>
                                <strong>Challenge:</strong>
                                <ul style={{ paddingLeft: "15px" }}>
                                  <li>
                                    Create compelling visual strategies to
                                    increase revenue during peak seasons.
                                  </li>
                                </ul>
                              </ElementListItem>

                              <ElementListItem>
                                <strong>Strategic Approach:</strong>
                                <ul style={{ paddingLeft: "15px" }}>
                                  <li>
                                    Develop a multi-channel marketing plan.
                                  </li>
                                  <li>
                                    Optimize the image processing workflow.
                                  </li>
                                </ul>
                              </ElementListItem>

                              <ElementListItem>
                                <strong>Key Achievements:</strong>
                                <ul style={{ paddingLeft: "15px" }}>
                                  <li>
                                    Increased revenue by 50% during peak seasons
                                    through attractive product imagery.
                                  </li>
                                  <li>
                                    Improved task efficiency by 30% through
                                    effective collaboration.
                                  </li>
                                </ul>
                              </ElementListItem>

                              <ElementListItem>
                                <strong>Impact:</strong>
                                <ul style={{ paddingLeft: "15px" }}>
                                  <li>
                                    Enhanced brand presence across marketing
                                    channels.
                                  </li>
                                  <li>
                                    Improved customer experience through
                                    high-quality visuals.
                                  </li>
                                </ul>
                              </ElementListItem>
                            </ElementList>
                          </div>,
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
                    iconStyle={{ background: "#F6AE2D", color: "white" }}
                    icon={<MdWork />}
                  >
                    <ElementTitle className="vertical-timeline-element-title">
                      <Link href="http://bpi.vn/" target="_blank">
                        Supply Chain Management
                      </Link>
                    </ElementTitle>
                    <ResumeExperienceSubtitle className="vertical-timeline-element-subtitle">
                      Feb 2023 - Apr 2023
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
                          <div
                            style={{
                              maxHeight: "600px",
                              overflowY: "auto",
                              paddingRight: "10px",
                            }}
                          >
                            <ElementSubtitle2>
                              In my role at Bpi, I focused on optimizing supply
                              chain processes to enhance operational efficiency
                              and compliance.
                            </ElementSubtitle2>
                            <PopupImagePreview src={bpi}></PopupImagePreview>
                            <ElementSubtitle3>
                              {<Link href="http://bpi.vn/">Bpi </Link>}| HANOI,
                              VIETNAM | SUPPLY CHAIN MANAGEMENT | FEB 2023–APR
                              2023
                            </ElementSubtitle3>
                            <ElementList>
                              <ElementListItem>
                                <strong>Challenge:</strong>
                                <ul style={{ paddingLeft: "15px" }}>
                                  <li>
                                    Ensure efficient customs clearance for
                                    multiple shipments.
                                  </li>
                                </ul>
                              </ElementListItem>

                              <ElementListItem>
                                <strong>Strategic Approach:</strong>
                                <ul style={{ paddingLeft: "15px" }}>
                                  <li>
                                    Collaborate with internal teams to improve
                                    documentation.
                                  </li>
                                  <li>
                                    Monitor processes to ensure compliance.
                                  </li>
                                </ul>
                              </ElementListItem>

                              <ElementListItem>
                                <strong>Key Achievements:</strong>
                                <ul style={{ paddingLeft: "15px" }}>
                                  <li>
                                    Achieved smooth customs clearance for over
                                    20 shipments per month.
                                  </li>
                                  <li>
                                    Improved documentation management efficiency
                                    by 30%.
                                  </li>
                                </ul>
                              </ElementListItem>

                              <ElementListItem>
                                <strong>Impact:</strong>
                                <ul style={{ paddingLeft: "15px" }}>
                                  <li>
                                    Minimized risks in the customs clearance
                                    process.
                                  </li>
                                  <li>
                                    Enhanced relationships with suppliers and
                                    customers.
                                  </li>
                                </ul>
                              </ElementListItem>
                            </ElementList>
                          </div>,
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
