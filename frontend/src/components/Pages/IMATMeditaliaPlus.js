import React from 'react';
import './IMATMeditaliaPlus.css'; // Make sure to create and link this CSS file

const IMATMeditaliaPlus = () => {
    return (
        <div className="course-detail-container">
            <div className="course-detail-card">
                <h1>IMAT Meditalia+ Prep Course (E310)</h1>
                <p>Live Lectures (72 hours) [3 months] Starting February 2025</p>
                <ul>
                    <li>Access to simulation. (12)</li>
                    <li>Updated IMAT Material</li>
                    <li>Full guidance with personal interaction to improve scores</li>
                    <li>Bi-weekly mock tests with ranking</li>
                    <li>Access to online materials and career counseling</li>
                </ul>
                <button className="buy-button">Buy</button>
            </div>
        </div>
    );
};

export default IMATMeditaliaPlus;
