import React from "react";

const Start = ({ onQuizStart }, { onInstructionsCheck }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>Start the quiz</h1>
          <p>Good luck!</p>
          <button
            className="button is-link is-medium mt-4"
            onClick={onQuizStart}
          >
            Start
          </button>
          {/* <button className="button is-link mr-2" onClick={onInstructionsCheck} >
            Instructions
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Start;
