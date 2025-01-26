import React from "react";
import styled from "styled-components";

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

const PopupContent = styled.div`
  background: rgb(240, 240, 240);
  border-radius: 10px;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px;
  width: 70%;
  height: 55%;
  z-index: 200;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;
export const PopupDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  // width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 25px;
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
export const PopupImagePreview = styled.img`
  width: auto;
  height: 90%;

  @media screen and (max-width: 700px) {
    width: 100%;
    height: auto;
    margin-top: 10px;
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const ExperiencePopup = ({ content, onClose, imagePreview }) => {
  return (
    <PopupOverlay onClick={onClose}>
      <PopupContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <PopupDescription>{content}</PopupDescription>
        <PopupImagePreview src={imagePreview}></PopupImagePreview>
      </PopupContent>
    </PopupOverlay>
  );
};
