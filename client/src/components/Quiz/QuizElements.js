import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const Img = styled(motion.img)`
  width: 100%;
  /* height: 100%; */
  margin-bottom: -20rem;
`;
export const Img2 = styled(motion.img)`
  width: 100%;
  /* height: 100%; */
  margin-top: 0rem;
`;
export const CoursesContainer = styled.div`
  height: 1300px;
  /* width: 100%; */
  display: flex;
  z-index: 50;
  background-color: #dbe1e8;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: -5rem 0 -10rem;
`;
export const Container = styled(motion.div)`
  color: #fff;
  background-color: #ff0066;
  margin-top: -15%;

  margin-bottom: -20rem;
  min-height: 650px;
  padding: 0rem 10px 10rem;
  width: 100%;
  @media screen and (max-width: 1090px) {
    padding-top: 5rem;
  }
`;

export const Wrapper = styled(motion.div)`
  display: grid;
  z-index: 1;
  height: 200px;
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  justify-content: center;
  font-size: 4rem;
  font-weight: bold;
  color: #dbe1e8;
  text-align: center;
  @media screen and (max-width: 1090px) {
    font-size: 2.5rem;
  }
`;

export const QuestionContainer = styled(motion.div)`
  color: #fff;
  background-color: #dbe1e8;
  margin-top: -22rem;
  margin-bottom: -22rem;
  min-height: 600px;
  padding: 0rem 10px 0rem;
  width: 100%;
  @media screen and (max-width: 1600px) {
    padding: 0rem 10px 30rem;
    margin-top: -16rem;
  }
  @media screen and (max-width: 1200px) {
    padding: 2rem 10px 30rem;
    margin-top: -12rem;
  }
  @media screen and (max-width: 900px) {
    padding: 7rem 10px 30rem;
    margin-top: -12rem;
  }
  @media screen and (max-width: 448px) {
    padding: 8rem 10px 30rem;
    margin-top: -7rem;
  }
`;

export const QuestionWrapper = styled(motion.div)`
  display: grid;
  z-index: 1;
  height: 200px;
  max-width: 450px;
  /* min-width: 400px; */
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  text-align: center;
`;

export const ResultContainer = styled(motion.div)`
  color: #fff;
  background-color: #dbe1e8;
  margin-top: -15rem;
  margin-bottom: -22rem;
  min-height: 600px;
  padding: 0rem 10px 0rem;
  width: 100%;
  @media screen and (max-width: 1600px) {
    padding: 0rem 10px 25rem;
    margin-top: -16rem;
  }
  @media screen and (max-width: 1200px) {
    padding: 2rem 10px 25rem;
    margin-top: -12rem;
  }
  @media screen and (max-width: 900px) {
    padding: 7rem 10px 25rem;
    margin-top: -12rem;
  }
  @media screen and (max-width: 448px) {
    padding: 8rem 10px 25rem;
    margin-top: -7rem;
  }
`;

export const ResultWrapper = styled(motion.div)`
  display: grid;
  z-index: 1;
  height: 200px;
  width: 450px;
  /* min-width: 400px; */
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  text-align: center;
`;

export const variants = {
  initial: {
    y: 300,
  },
  animate: {
    y: 50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export const Row = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  margin-top: ${({ imgStart }) => (imgStart ? "10rem" : "0")};

  @media screen and (max-width: 1090px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Col1 = styled(motion.div)`
  margin-bottom: 15px;
  padding: 0 40px;
  grid-area: col1;
  margin-top: -12rem;
`;

export const Col2 = styled.div`
  margin: 5rem 0 15px;
  padding: 0 30px;
  grid-area: col2;
  /* @media screen and (max-width: 1090px) {
    display: none;
  } */
`;

export const BtnWrrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 4.5rem 0 2rem;
  z-index: 1;
`;
export const Image = styled(motion.img)`
  height: 350px;
  padding: 0 0 1rem;
  margin: 0;
  z-index: 0;
  @media screen and (max-width: 768px) {
    height: 280px;
  }
`;

export const Button = styled(Link)`
  border-radius: 5px;
  background: #080808;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: white;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f9ca26;
    color: black;
  }
`;
