import styled from "styled-components";

export const ResumeContainer = styled.div`
  background: #f0f0f0;
  // height: 800px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  //   border: solid 1px red;

  //   @media screen and (max-width: 768px) {
  //     height: 1100px;
  //   }

  //   @media screen and (max-width: 480px) {
  //     height: 1300px;
  //   }
`;

export const PopupImagePreview = styled.img`
  width: 55%;
  height: auto;
  max-height: 80%;
  margin: 0 auto;
  margin-left: 100px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-top: 20px;
    margin-left: 0;
  }
`;

export const ResumeWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  // margin: 0 auto;
  padding: 0 50px;
  padding-top: 50px;
  margin-bottom: 64px;
`;

export const ResumeHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 64px;
`;

export const ResumeH1 = styled.h1`
  font-size: 2.5rem;
  color: black;
  margin-bottom: 32px;
  text-align: center;
  width: 100%;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ResumeMenu = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-around;
  //   border: solid 1px red;

  @media screen and (max-width: 480px) {
    gap: 15px;
  }
`;

export const ResumeItem = styled.button`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01161E" : "#01161E")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "white")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "13px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "white" : "#F6AE2D")};
  }

  // @media screen and (max-width: 480px) {
  //   // padding: 10px 12px;
  //   // font-size: 16px;
  // }
`;

export const ResumeContent = styled.div`
  // border: solid 1px red;
`;

export const EducationContainer = styled.div``;

export const ElementP = styled.p`
  font-size: 0.8rem;
  white-space: pre-line;
`;

export const ElementList = styled.ul`
  padding-left: 15px;
`;

export const ElementListItem = styled.li``;

export const ElementSkills = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // width: 40%;
  padding-top: 10px;

  @media screen and (max-width: 480px) {
    max-width: 100%;
    display: block;
  }
`;

// export const ElementSkillsIcon = styled.a`
//   color: white;
//   font-size: 24px;

//   &:hover {
//     color: #f6ae2d;
//     transition: 0.3s ease-out;
// `;

export const ElementSkillsLogo = styled.img`
  width: 2rem;
  margin-right: 25px;
`;

export const ElementHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  cursor: pointer; // Add cursor to indicate clickability

  &:hover {
    opacity: 0.8; // Optional: add hover effect
    transition: opacity 0.2s ease-in-out;
  }
`;

export const ElementTitle = styled.h3`
  font-size: 1.5rem;
  padding-bottom: 5px;
`;

export const ElementSubtitle = styled.h5`
  font-size: 0.8rem;
`;
export const ElementSubtitle2 = styled.h3``;
export const ElementSubtitle3 = styled.h4``;
export const WorkContainer = styled.div``;

export const Link = styled.a`
  color: black;
  text-decoration: none;

  &:hover {
    color: #f6ae2d;
    transition: 0.2s ease-out;
  }
`;

export const ResumeExperienceSubtitle = styled.h5`
  opacity: 40%;
  margin-top: 5px;

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const SeeMoreButton = styled.button`
  position: absolute;
  bottom: 10px; /* Cách đáy 10px */
  right: 10px; /* Cách phải 10px */
  background-color: #222222;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  cursor: pointer;

  &:hover {
    background-color: #5a5a5a;
    transition: background-color 0.2s ease-in-out;
  }
`;
