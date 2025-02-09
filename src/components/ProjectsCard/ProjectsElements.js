import styled, { keyframes } from "styled-components";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ProjectsContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #222222;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ProjectsWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-gap: 24px;
  padding: 0 50px;
  margin-bottom: 32px;

  grid-template-columns: ${(props) => {
    const childCount = props.childCount || 0;
    if (childCount <= 3) {
      return "repeat(3, 1fr)";
    } else if (childCount === 4) {
      return "repeat(4, 1fr)";
    }
    return "repeat(5, 1fr)";
  }};

  place-items: center;
  place-content: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ProjectsCard = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  width: 100%;
  max-width: 300px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    max-height: 200px;
  }
`;
export const ProjectsIconWrapper = styled.div`
  width: 75%;
  display: flex;
  align-content: center;
  background-color: red;
`;

export const ProjectsIcon = styled.img`
  height: 150px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    height: 80px;
    width: 80px;
  }
`;

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 64px;
  padding-top: 50px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ProjectsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  overflow-y: auto;
  align-items: center;
  opacity: 0;
  animation: ${fadeInAnimation} 0.3s ease-in-out forwards;
  z-index: 100;
`;

export const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const PopupTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PopupTitle = styled.h2`
  font-size: 3rem;
  // margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const PopupSubtitle = styled.h4`
  opacity: 40%;
  margin-top: 5px;

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

// Add these new styled components to your ProjectsElements.js file

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Description = styled.p`
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  max-width: 800px;
  width: 100%;
  padding: 0 1rem;
`;

export const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
`;

// Update these existing components
export const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 80px);
  overflow-y: auto;
  padding: 1rem;
`;

export const PopupImagePreview = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`;

export const PopupCard = styled.div`
  background: #f0f0f0;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 1200px;
  max-height: 90vh;
  z-index: 200;
  display: flex;
  flex-direction: column;
`;

export const PopupDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 25px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const PopupVideo = styled.iframe`
  width: 560px;
  height: 315px;
  // margin-bottom: 20px;
  border: none;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin-top: 20px;
  }
`;

export const PopupIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const PopupIconDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 0.75rem;
  }
`;

export const PopupIcon = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 25px;

  @media screen and (max-width: 768px) {
    height: 30px;
    width: 30px;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #333;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const CloseText = styled.p`
  font-size: 1.2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileClose = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    margin-bottom: 25px;
    font-size: 1.5rem;
    cursor: pointer;
    color: black;
  }
`;
