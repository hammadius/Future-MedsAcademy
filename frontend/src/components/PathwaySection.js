import React from 'react';
import './PathwaySection.css';
import { useNavigate } from 'react-router-dom';

const PathwaySection = () => {
    const navigate = useNavigate();

    return (
        <section className="pathway-section">
            <h2 className='heading-container'>YOUR PATHWAY TO Medicine : EXPERT IMAT PREPARATION WITH US</h2>
        
            <div className="pathway-grid">
                <button 
                    className="pathway-btn"
                    onClick={() => navigate('/imat-test-breakdown')}
                >
                    <h3>IMAT Test Breakdown and Scholarship</h3>
                    <p>
                        Detailed insights into the IMAT test structure along with exclusive scholarship opportunities for high achievers.
                    </p>
                </button>
                
                <button 
                    className="pathway-btn"
                    onClick={() => navigate('/global-test-centres')}
                >
                    <h3>Global Test Centres</h3>
                    <p>
                        Access to multiple IMAT test centres worldwide for convenience and flexibility.
                    </p>
                </button>

                <button 
                    className="pathway-btn"
                    onClick={() => navigate('/ScholarshipOpportunities')}
                >
                    <h3>Scholarship</h3>
                    <p>
                        Our scholarship vision aims to support aspiring medical professionals by reducing financial barriers.
                    </p>
                </button>

                <button 
                    className="pathway-btn"
                    onClick={() => navigate('/VisionPage')}
                >
                    <h3>Vision</h3>
                    <p>
                        Achieve your dream of studying medicine and surgery in your desired university in Italy with expert guidance.
                    </p>
                </button>

                <button 
                    className="pathway-btn"
                    onClick={() => navigate('/UniversitiesPage')}
                >
                    <h3>Universities Offering Medicine and Surgery Programs</h3>
                    <p>
                        Explore top universities in Italy offering medicine and surgery programs in English.
                    </p>
                </button>
            </div>
        </section>
    );
};

export default PathwaySection;
