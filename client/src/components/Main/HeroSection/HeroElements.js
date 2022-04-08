import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

export const ColumnLeft = styled.div`
  display: flex;
  color: "black";
  width: 100%;
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }
  @media screen and (max-width: 768px) {
    padding: 5rem 0.8rem;
    h1 {
      margin-bottom: 0.5rem;
      font-size: 1.8rem;
    }
    p {
      font-size: 3.6rem;
      line-height: 1.1;
    }
  }
`;

export const Button = styled(motion.button)`
  padding: 1rem 3rem;
  margin-left: 0.2rem;
  font-size: 1rem;
  border: 2px solid black;
  border-radius: 4px;
  cursor: pointer;
  background: transparent;
  color: black;
`;

export const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
`;
export const Img = styled.img`
  width: 110%;
  margin-top: -50rem;
  margin-bottom: -1rem;
  z-index: -100;
`;
export const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem;
  position: relative;
  ${Image}:nth-child(1) {
    top: 30px;
    left: 0px;
  }
  ${Image}:nth-child(2) {
    top: 170px;
    right: 10px;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  ${Image}:nth-child(3) {
    top: 350px;
    left: 50px;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  ${Image}:nth-child(4) {
    bottom: 100px;
    right: 75px;
  }
`;
