import React from "react";

const Instructions = ({ onClose }) => {
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Instructions</p>
          <button className="delete" onClick={onClose}></button>
        </header>
        <section className="modal-card-body content">
          <ul>
            <li className="mb-6">
              <p>
                <strong>...............................</strong>
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Instructions;
