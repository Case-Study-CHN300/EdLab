import styled from "styled-components";
import { motion } from "framer-motion";

export const TeamContainer = styled.div`
  height: 300px;
  display: flex;
  z-index: 50;
  background-color: #dbe1e8;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const TeamWrapper = styled(motion.div)`
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

export const TeamCard = styled(motion.div)`
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

export const TeamIcon = styled.img`
  height: 190px;
  margin-bottom: 10px;
`;

export const TeamH2 = styled.h2`
  margin-top: 15px;
  font-size: 1.1rem;
  font-weight: bolder;
`;

export const TeamP = styled.p`
  padding: 0.5rem;
  font-size: 1rem;
  text-align: center;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
export const TeamImg = styled.img`
  width: 110%;
  margin-top: -0.1rem;
  margin-bottom: -1rem;
  z-index: -100;
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
