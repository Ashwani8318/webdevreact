import React from "react";
import { useNavigate } from "react-router-dom";
import "./Error.css";

const Error = () => {
  const navigate = useNavigate();
  
  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-code">404</div>
        <h1 className="error-title">Oops! Page Not Found</h1>
        <p className="error-description">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="error-illustration">
          <span className="illustration-emoji">🔍</span>
        </div>
        <div className="error-buttons">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/")}
            title="Go to home page"
          >
            🏠 Back to Home
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/table")}
            title="Go to table page"
          >
            📊 Go to Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
