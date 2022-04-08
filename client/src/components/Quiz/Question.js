import React, { useState, useEffect, useRef } from "react";
import WaveGreenBlack from "../../images/wave-green-black.svg";
import {
  Img,
  QuestionContainer,
  QuestionWrapper,
  Img2
} from "./QuizElements";
import WaveGreenGrey from "../../images/wave-green-grey.svg";

const Question = ({
  data,
  onAnswerUpdate,
  numberOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
  questionNumber,
  questionsLength,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const radiosWrapper = useRef();

  useEffect(() => {
    const findCheckedInput =
      radiosWrapper.current.querySelector("input:checked");
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) {
      setError("");
    }
  };

  const nextClickHandler = (e) => {
    if (selected === "") {
      return setError("Please select one option!");
    }
    onAnswerUpdate((prevState) => [
      ...prevState,
      { q: data.question, a: selected },
    ]);
    setSelected("");
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };

  return (
    <>
      <Img2 src={WaveGreenGrey} />
      <QuestionContainer>
        <QuestionWrapper>
          <div className="card">
            <div className="content">
              <div className="quiz-question">
                <span className="quiz-span1">
                  {questionNumber}
                  <span />
                  <span className="quiz-span2">/{questionsLength}</span>
                </span>
                <p className="quiz-p">{data.question}</p>
              </div>

              <div className="control" ref={radiosWrapper}>
                {data.choices.map((choice, i) => (
                  <label className="radio" key={i}>
                    <input
                      type="radio"
                      name="answer"
                      value={choice}
                      onChange={changeHandler}
                    />
                    {choice}
                  </label>
                ))}
              </div>
              {error && <div className="has-text-danger">{error}</div>}
              <div className="buttonContainer">
                <button
                  class="button is-primary is-light is-medium is-fullwidth"
                  onClick={nextClickHandler}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </QuestionWrapper>
      </QuestionContainer>
      <Img src={WaveGreenBlack} />
    </>
  );
};

export default Question;
