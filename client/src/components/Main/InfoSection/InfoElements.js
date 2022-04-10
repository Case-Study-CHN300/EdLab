import styled from "styled-components";
import { motion } from "framer-motion";

export const InfoContainer = styled(motion.div)`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#0be586" : "#001122")};
  margin-top: ${({ lightBg }) => (lightBg ? "-2rem" : "0")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled(motion.div)`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  justify-content: center;
  margin-bottom: ${({ last }) => (last ? "-10rem" : "0")};
`;

export const variants = {
  initial: {},
  animate: {
    y: [5, 0, 5],
    transition: {
      duration: 1.6,
      ease: "linear",
    },
  },
};

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  margin-top: ${({ imgStart }) => (imgStart ? "-10rem" : "0")};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled(motion.div)`
  margin-bottom: 15px;
  padding: 0 30px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 10px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 600px;
  padding: ${({ second }) => (second ? "2rem" : "0")};
`;

export const TopLine = styled.p`
  color: #4169e1;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: ${({ lightText }) => (lightText ? "#0BE586" : "#4169e1")};
`;

export const Heading = styled.h1`
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  margin-bottom: 24px;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  line-height: 24px;
  max-width: 440px;
  margin-bottom: 35px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  @media screen and (min-width: 480px) {
    padding: 32px;
  }
`;

export const Img = styled.img`
  width: 110%;
  margin: 0rem;
  display: ${({ lightBg }) => (lightBg ? "" : "none")};
`;
