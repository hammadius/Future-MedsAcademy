import React from 'react';
import './IMATTestBreakdown.css';
import imatImage from '../../assets/imat-image.png';

const IMATTestBreakdown = () => {
    return (
        <div className="imat-breakdown-container">
            <h1 className="imat-heading">IMAT Test Breakdown and Scholarships</h1>

            <div className="imat-info-cards">
                <div className="imat-card">
                    <h3>Subject Number of Questions:</h3>
                    <p>Biology - 23<br />
                       Chemistry - 15<br />
                       Physics and Mathematics - 13<br />
                       General Knowledge - 2<br />
                       Critical Thinking and Problem Solving - 7</p>
                </div>

                <div className="imat-card">
                    <h3>Why High School Knowledge Matters</h3>
                    <p>
                        IMAT requires solid knowledge of high school physics, chemistry, biology, and 
                        mathematics. Understanding these subjects deeply is essential for success.
                    </p>
                </div>
            </div>
            <div className="imat-scholarship">
                <h3>Scholarship Opportunities:</h3>
                <p>
                    Italy offers generous scholarship opportunities, funding up to 8200 Euros based on 
                    financial need. Example: <strong>LazioDisco Scholarship</strong> covers tuition fees and 
                    living expenses for La Sapienza students.
                </p>
                <p>
                    <strong>Our Role:</strong> We assist with scholarship documents to help you focus on 
                    your IMAT studies while we handle paperwork.
                </p>
            </div>
        </div>
    );
};

export default IMATTestBreakdown;
