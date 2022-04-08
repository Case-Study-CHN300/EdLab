import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const Img = styled.img`
  width: 110%;
  margin-top: -0.1rem;
  margin-bottom: -1rem;
  z-index: -100;
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
  background-color: #4facf7;
  margin-top: -15%;
  margin-bottom: -1rem;
  min-height: 450px;
  padding: 0 20px 10rem 20px;
  width: 100%;
`;

export const Wrapper = styled(motion.div)`
  display: grid;
  z-index: 1;
  height: 200px;
  width: 100%;
  max-width: 1100px;
  margin: 0;
  padding: 0 2px;
  justify-content: center;
  font-size: 4rem;
  font-weight: bold;
  color: #dbe1e8;
  text-align: center;
  @media screen and (max-width: 1090px) {
    font-size: 3.5rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 3rem;
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
  padding: 0 30px;
  grid-area: col1;
`;

export const Col2 = styled.div`
  margin: 5rem 0 15px;
  padding: 0 30px;
  grid-area: col2;
  @media screen and (max-width: 1090px) {
    display: none;
  }
`;

export const BtnWrrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 4.5rem 0 2rem;
  z-index: 1;
`;
export const Image = styled(motion.img)`
  height: 350px;
  padding: 0;
  margin: 0;
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
