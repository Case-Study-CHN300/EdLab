import React from "react";
import { motion } from "framer-motion";
import {
  Container,
  Wrapper,
  variants,
  Row,
  Col1,
  Col2,
  BtnWrrap,
  Button,
  Image,
  Img,
} from "./QuizElements";
import WavePinkBlack from "../../images/wave-pink-black.svg";
import quizImg from "../../images/quiz-img.svg";

const Start = ({ onQuizStart }) => {
  return (
    <>
      <Container>
        <Row imgStart={true}>
          <Col2>
            <Wrapper>
              <Image src={quizImg}></Image>
            </Wrapper>
          </Col2>
          <Col1>
            <Wrapper
              variants={variants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.p
                z-index="1"
                variants={variants}
                initial="initial"
                animate="animate"
                transition={{ duration: 1 }}
              >
                Take quiz to see where you stand
              </motion.p>
              <BtnWrrap>
                <Button
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  // offset={-80}
                  onClick={onQuizStart}
                >
                  Start Quiz
                </Button>
              </BtnWrrap>
            </Wrapper>
          </Col1>
        </Row>
      </Container>
      <Img src={WavePinkBlack} />
    </>
  );
};

export default Start;
