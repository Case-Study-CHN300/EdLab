import styled from "styled-components";
import { motion } from "framer-motion";

export const CoursesContainer = styled.div`
  height: 1300px;
  display: flex;
  z-index: 50;
  background-color: #dbe1e8;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding-bottom: -15%; */
  margin: -5rem 0 -10rem;
  @media screen and (max-width: 768px) {
    height: 1600px;
    margin: 0;
  }

  @media screen and (max-width: 480px) {
    height: 1700px;
  }
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
export const variants2 = {
  initial: {
    x: 100,
  },
  animate: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 0.8,
    },
  },
};
export const CoursesWrapper = styled(motion.div)`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  z-index: 5;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 30px 70px;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const CoursesCard = styled(motion.div)`
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  height: 400px;
  width: 400px;
  padding: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.04);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 1000px) {
    height: 300px;
    width: 300px;
  }
  @media screen and (max-width: 768px) {
    height: 300px;
    width: 350px;
  }
  @media screen and (max-width: 488px) {
    height: 300px;
    width: 300px;
  }
`;

export const CoursesIcon = styled.img`
  height: 190px;
  margin-bottom: 10px;
`;

export const h1 = styled(motion.h1)`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const CoursesH2 = styled.h2`
  margin-top: 15px;
  font-size: 1.1rem;
  font-weight: bolder;
`;

export const CoursesP = styled.p`
  padding: 0.5rem;
  font-size: 1rem;
  text-align: center;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
export const Img = styled.img`
  width: 110%;
  margin-top: -0.1rem;
  margin-bottom: -1rem;
  z-index: -100;
`;

export const Container = styled(motion.div)`
  color: #fff;
  background-color: #9900ff;
  margin-top: -15%;
  padding-bottom: 10px;
  margin-bottom: -3px;
  min-height: 300px;
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
  @media screen and (max-width: 520px) {
    font-size: 3.5rem;
  }
`;

export const Wrapper2 = styled(motion.div)`
  display: grid;
  z-index: 1;
  height: 200px;
  width: 100%;
  max-width: 1100px;
  margin: auto auto 2rem;
  padding: -10px 0px 10px;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  color: #2674fa;
  text-align: flex;
`;
