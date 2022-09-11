import React from "react";
import { useLocation } from "react-router-dom";

function Result() {
  const location = useLocation();

  return (
    <div className="card">
      <div className="card-header">Score</div>
      <div className="card-body">
        <h5 className="card-title">You have Scored</h5>
        <p className="card-text">
          {location.state.score} / {location.state.total}
        </p>
        <a href="/" className="btn btn-primary">
          Try again
        </a>
      </div>
    </div>
  );
}

export default Result;
