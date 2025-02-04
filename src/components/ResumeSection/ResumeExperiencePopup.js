import React from "react";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
export const Link = styled.a`
  color: black;
  text-decoration: none;

  &:hover {
    color: #f6ae2d;
    transition: 0.2s ease-out;
  }
`;
const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupCard = styled.div`
  background: #f0f0f0;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  width: 70%;
  height: 70%;
  z-index: 200;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 90%;
  }
`;

const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const PopupTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PopupTitle = styled.u`
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const PopupSubtitle = styled.h4`
  opacity: 40%;
  margin-top: 5px;

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const PopupDescription = styled.div`
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

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #333;
  font-size: 1.2rem;
  cursor: pointer;
`;

const CloseText = styled.p`
  font-size: 1.2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileClose = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    margin-bottom: 25px;
    font-size: 1.5rem;
    cursor: pointer;
    color: black;
  }
`;
const PopupContent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 90%;
  width: 100%;
  x @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const ResumeExperiencePopup = ({ content, onClose }) => {
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  return (
    <PopupOverlay
      onClick={onClose}
      onKeyDown={(e) => {
        console.log("sssss: ", e.key);
        console.log("sssss2222: ", e);
        if (e.key === "Escape") {
          onClose();
        }
      }}
    >
      <PopupCard onClick={(e) => e.stopPropagation()}>
        <PopupHeader>
          <PopupTitleWrapper>
            <PopupTitle>ABOUT</PopupTitle>
          </PopupTitleWrapper>
          <CloseButton onClick={onClose}>
            <CloseText>Close</CloseText>
            <MobileClose>
              <RxCross2 />
            </MobileClose>
          </CloseButton>
        </PopupHeader>
        <PopupContent>
          <PopupDescription>{content}</PopupDescription>
          {/* <PopupImagePreview src={imagePreview}></PopupImagePreview> */}
        </PopupContent>
      </PopupCard>
    </PopupOverlay>
  );
};
