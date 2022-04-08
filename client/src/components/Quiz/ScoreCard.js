import React from "react";
import { motion } from "framer-motion";
import {
  Container,
  Wrapper,
  variants,
  Row,
  Col1,
  Col2,
  variantsScore,
  Image,
  Img,
} from "./QuizElements";
import WavePinkBlack from "../../images/wave-pink-black.svg";
import completed from "../../images/scorecard.svg";
const ScoreCard = ({ correctAnswers, data }) => {
  return (
    <>
      <Container>
        <Row imgStart={true}>
          <Col2>
            <Wrapper>
              <Image src={completed}></Image>
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
                Your results:
              </motion.p>
              <motion.p
                z-index="1"
                variants={variants}
                initial="initial"
                animate="animate"
                transition={{ duration: 1 }}
              >
                {correctAnswers} of {data.length}
              </motion.p>
              <motion.p
                z-index="1"
                variants={variants}
                initial="initial"
                animate="animate"
                transition={{ duration: 1 }}
              >
                {Math.floor((correctAnswers / data.length) * 100)}%
              </motion.p>
            </Wrapper>
          </Col1>
        </Row>
      </Container>
      <Img src={WavePinkBlack} />
    </>
    // <div className="card">
    //   <div className="card-content">
    //     <div className="content">
    //       <img className="scorecard-img" src={completed} alt="sss"></img>
    //       <h3>Your results:</h3>
    //       <p>
    //         {correctAnswers} of {data.length}
    //       </p>
    //       <p>
    //         <strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong>
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ScoreCard;
