import React, { useEffect, useState } from "react";
import { formatTime } from "../../../utils";

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
    const res = await fetch("/Controlled-Substances", {
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
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3>Your results</h3>
          <p>
            {correctAnswers} of {data.length}
          </p>
          <p>
            <strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong>
          </p>
          <p>
            <strong>Your time:</strong> {formatTime(time)}
          </p>
          <button className="button is-link mr-2" onClick={onAnswersCheck}>
            Check your answers
          </button>
          <button className="button is-success" onClick={onReset}>
            Go to Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default End;
