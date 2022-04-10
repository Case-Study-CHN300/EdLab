import styled from "styled-components";
import { motion } from "framer-motion";

export const AdminContainer = styled.div`
  min-height: 800px;
  display: flex;
  background-color: #f9f9f9;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
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

export const Wrapper = styled(motion.div)`
  display: grid;
  height: 200px;
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
  justify-content: center;
  font-size: 3.5rem;
  font-weight: bold;
  color: black;
  text-align: center;
  margin-top: -20rem;
  @media screen and (max-width: 600px) {
    font-size: 2.5rem;
  }
`;
