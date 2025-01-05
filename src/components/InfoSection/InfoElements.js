import styled, { keyframes } from "styled-components";

const gradient = keyframes`
0% {
  background-position: 0% 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0% 50%;
}
`;

export const InfoContainer = styled.div`
  color: white;
  background: linear-gradient(135deg, #01161e, #022938);
  // background: linear-gradient(
  //   -45deg,
  //   #ff6962,
  //   #ff8776,
  //   #ffb092,
  //   #ffe08e,
  //   #ffd050,
  //   #ffb346
  // );
  // background-size: 400% 400%;
  // animation: ${gradient} 15s ease infinite;
  // height: 100vh;
  // background: transparent;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
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
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col2' 'col1'` : `'col1 col1' 'col2 col2'`};
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

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: 25px;

  @media screen and (max-width: 768px) {
    width: 75%;
  }
`;
