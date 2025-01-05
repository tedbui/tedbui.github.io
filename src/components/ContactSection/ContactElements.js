import styled from "styled-components";

export const ContactContainer = styled.div`
  color: white;
  background: linear-gradient(to bottom, #01161e, #022638);
  color: white;
  padding: 50px;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ContactWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    text-align: center;
    height: 100%;
  }
`;

export const ContactRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1";
  }
`;

export const Column1 = styled.div`
  margin-botton: 15px;
  padding: 0 15px;
  grid-area: col1;

  // @media screen and (max-width: 768px) {
  //   text-align: center;
  // }
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const Column2 = styled.div`
  margin-botton: 15px;
  padding: 0 15px;
  grid-area: col2;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const TextWrapper = styled.div`
  max-width: 555px;
  padding-top: 0px;
  padding-botton: 60px;
`;

export const TopLine = styled.p`
  color: #f6ae2d;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 555px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "white")};
  white-space: pre-line;

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const LinkButton = styled.a`
  border-radius: 50px;
  background: #f6ae2d;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  //   margin-top: 20px;
  margin-right: 10px;
  display: flex;
  // justify-content: space-between;
  //   width: 150px;
  //   align-items: center;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    background: #fff;
    color: #010606;
  }

  @media screen and (max-width: 768px) {
    width: 50%;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 480px) {
    width: 50%;
    margin-bottom: 10px;
  }
`;

export const LinkIconWrapper = styled.div`
  margin-right: 10px;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
`;
