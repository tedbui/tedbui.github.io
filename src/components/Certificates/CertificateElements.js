import styled, { keyframes } from "styled-components";
const fadeInAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const CertificateIconWrapper = styled.div`
  width: 75%;
  display: flex;
  align-content: center;
  background-color: red;
`;

export const CertificateH6 = styled.h6`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  z-index: 1000;
  animation: ${fadeInAnimation} 0.2s ease-out;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const PopupCard = styled.div`
  background: #f0f0f0;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  width: 70%;
  height: 55%;
  z-index: 200;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 90%;
  }
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

export const PopupContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  width: 90%;
  max-width: 1000px;
  max-height: 80vh;
  margin: auto;
  padding: 32px;
  overflow-y: auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

export const CertificatePopupImagePreview = styled.img`
  width: calc(33.33% - 16px);
  height: 250px; // Cố định chiều cao
  object-fit: cover; // Đảm bảo ảnh không bị méo
  border-radius: 4px;
`;

export const PopupDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  width: 50%;
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

export const Link = styled.a`
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    color: #f6ae2d;
    transition: 0.2s ease-out;
  }
`;

export const CertificateContainer = styled.div`
  min-height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 2rem 1rem;

  @media screen and (max-width: 768px) {
    min-height: auto;
    padding: 1.5rem 1rem;
  }
`;

export const CertificateWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 0 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 0.5rem;
  }
`;

export const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  justify-content: flex-start;
  width: 100%;
`;

export const Badge = styled.span`
  background: #f0f0f0;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  color: #666;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
  }
`;

export const CertificateCard = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  width: 100%;
  height: 100%;
  min-height: 280px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media screen and (max-width: 768px) {
    padding: 1.25rem;
    min-height: 240px;
  }
`;

export const CertificateIcon = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const CertificateH1 = styled.h1`
  font-size: 2.5rem;
  color: black;
  margin-bottom: 3rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

export const CertificateH2 = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`;

export const CertificateP = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.4;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #666;
  margin-top: auto;
`;

// Keep other components (PopupContainer, PopupCard, etc.) as they are
// Only modifying the main certificate display components above
export const LoadingSpinner = styled.div`
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3498db;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
  margin: 2rem auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const SkeletonCard = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 10px;
  height: 250px;
  width: 100%;
  max-width: 300px;

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;
