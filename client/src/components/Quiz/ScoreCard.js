import React from "react";
const ScoreCard = ({ correctAnswers, data }) => {
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
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
