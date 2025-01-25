import React from 'react';
import './CourseDetailPage.css'; // Make sure to create and link this CSS file

const CourseDetailPage = () => {
    return (
        <div className="course-detail-container">
            <div className="course-detail-card">
                <h1>IMAT Meditalia Prep Course (E129)</h1>
                <p>February 2025 (3 months)</p>
                <ul>
                    <li>Mock tests every two weeks with ranking</li>
                    <li>12 MedItalia simulations on website</li>
                    <li>Access to previous papers online simulators.</li>
                    <li>Career counseling sessions available</li>
                </ul>
                <button className="buy-button">Buy</button>
            </div>
        </div>
    );
};

export default CourseDetailPage;
