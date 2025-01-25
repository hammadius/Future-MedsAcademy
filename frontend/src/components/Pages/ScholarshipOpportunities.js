import React from "react";
import "./ScholarshipOpportunities.css";
import scholarshipImage from "../../assets/scholarship-image.png"; // Add correct image path

const ScholarshipOpportunities = () => {
  return (
    <div className="scholarship-container">
      <h2 className="scholarship-title">SCHLOARSHIP OPPORTUNITIES</h2>
      <p className="scholarship-subtitle">100% Scholarship and public universities</p>

      <div className="scholarship-content">
        <img src={scholarshipImage} alt="Scholarship" className="scholarship-image" />
        <div className="scholarship-info-box">
          <ul>
            <li><strong>Financial Aids:</strong></li>
            <li>Regional Scholarships up to €8,200 based on your financial documents.</li>
            <li>Examples: LazioDisco Scholarship (La Sapienza University and Tor Vergata).</li>
            <li>MedItalia Support: Assistance with scholarship applications and document preparation.</li>
          </ul>
        </div>
      </div>
      <button className="apply-btn">APPLY</button>
    </div>
  );
};

export default ScholarshipOpportunities;
