import React, { useEffect, useState } from "react";
import { formatTime } from "../../../utils";
import WaveGreenBlack from "../../../images/wave-green-black.svg";
import {
  Img,
  ResultContainer,
  ResultWrapper,
  Img2,
  variants,
} from "../QuizElements";
import WaveGreenGrey from "../../../images/wave-green-grey.svg";

const End = ({ results, data, onReset, onAnswersCheck, time }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if (result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    PostData(correct);
  }, []);

  const PostData = async (correct) => {
    // event.preventDefault();
    const res = await fetch("/General-Safety", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correct,
      }),
    });
  };

  return (
    <>
      <Img2 src={WaveGreenGrey} />
      <ResultContainer>
        <ResultWrapper
          z-index="1"
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{ duration: 1 }}
        >
          <div className="card">
            <div className="card-content">
              <div className="content">
                <h3>Your results</h3>
                <p>
                  {correctAnswers} of {data.length}
                </p>
                <p>
                  <strong>
                    {Math.floor((correctAnswers / data.length) * 100)}%
                  </strong>
                </p>
                <p>
                  <strong>Your time:</strong> {formatTime(time)}
                </p>
                <button
                  className="button is-link mr-2"
                  onClick={onAnswersCheck}
                >
                  Check your answers
                </button>
                <button className="button is-success" onClick={onReset}>
                  Go to Course
                </button>
              </div>
            </div>
          </div>
        </ResultWrapper>
      </ResultContainer>
      <Img src={WaveGreenBlack} />
    </>
  );
};

export default End;
