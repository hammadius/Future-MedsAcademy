import React from 'react';
import './CommitmentSection.css';
import commitmentImage from '../assets/commitment-image.png'; // Replace with the actual image

const CommitmentSection = () => {
    return (
        <section className="commitment-section">
            <div className="commitment-content">
                <h2>Our Commitment</h2>

                <div className="commitment-items">
                    <div className="commitment-card">
                        <h3>Simulations</h3>
                        <p>
                            "We provide the best simulation experience, designed using insights from all
                            past IMAT papers. Our practice exams will help you become familiar with the
                            exam format and question types, ensuring you're fully prepared for test day!"
                        </p>
                    </div>

                    <div className="commitment-card">
                        <h3>Excellence</h3>
                        <p>
                            "We believe that every dedicated student should have access to high-quality
                            preparation tools, regardless of their background or location. By providing
                            comprehensive resources and expert-led guidance, we aim to bridge the gap
                            between potential and opportunity, enabling students to realize their dreams
                            of studying medicine in Italy’s renowned universities."
                        </p>
                    </div>

                    <div className="commitment-card">
                        <h3>Personal Counselling</h3>
                        <p>
                            "You can book an appointment with any of our experienced faculty members,
                            who are currently studying Medicine and Surgery, through our scheduling tool
                            on Calendly. Simply select a convenient time, and one of our mentors will be
                            available to assist you!"
                        </p>
                    </div>
                </div>
            </div>

            <div className="commitment-image">
                <img src={commitmentImage} alt="Our Commitment" />
            </div>
        </section>
    );
};

export default CommitmentSection;
