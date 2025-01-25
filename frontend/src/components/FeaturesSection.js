import React from 'react';
import './FeaturesSection.css';
import featureImage from '../assets/feature-image.png'; // Update with actual image path

const FeaturesSection = () => {
    return (
        <section className="features-section">
            <div className="features-text">
                <h2>Unlock Your Potential <br /> With Future Meds Academy</h2>
                <p>
                    Join our dynamic learning platform designed to enhance your educational journey.
                    Explore a wide range of courses tailored for your success.
                </p>
                <button className="explore-btn">Explore</button>
            </div>
            <div className="features-image">
                <img src={featureImage} alt="Educational Feature" />
            </div>
        </section>
    );
};

export default FeaturesSection;
