import React from "react";
import completed from "../../images/complete.svg";
const ScoreCard = ({ correctAnswers, data }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <img className="scorecard-img" src={completed} alt="sss"></img>
          <h3>Your results:</h3>
          <p>
            {correctAnswers} of {data.length}
          </p>
          <p>
            <strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
