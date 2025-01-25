import React from 'react';
import './CourseOffering.css';
import courseImage from '../assets/Doc2.jpeg'; // Replace with actual image
import courseImage2 from '../assets/Doctor.jpeg';
import courseImage3 from '../assets/Doctor1.jpeg';
import { useNavigate } from 'react-router-dom'; // Make sure to import useNavigate

const CourseOffering = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    return (
        <section id='courses' className="course-offering">
            <h2 className="course-heading">Unlock Your Potential with Our <br /> Comprehensive Course Offering</h2>
            
            <div className="course-cards">
                <div className="course-card">
                    <img src={courseImage} alt="IMAT Preparation" />
                    <h3>IMAT Preparation Courses (Premium)</h3>
                    <p>Get access to premium study materials and expert guidance to ace your IMAT exams.</p>
                    <button className="read-more-btn" onClick={() => navigate('/course-detail')}>Read More</button>
                </div>
                
                <div className="course-card">
                    <img src={courseImage2} alt="IMAT Preparation" />
                    <h3>IMAT Preparation Courses (Premium)</h3>
                    <p>Personalized coaching and test simulations to boost your confidence.</p>
                    <button className="read-more-btn" onClick={() => navigate('/IMATMeditalia+')}>Read More</button>
                </div>

                <div className="course-card">
                    <img src={courseImage3} alt="IMAT Preparation" />
                    <h3>IMAT Preparation Courses (Premium)</h3>
                    <p>Structured learning path with interactive classes and doubt-clearing sessions.</p>
                    <button className="read-more-btn" onClick={() => navigate('/course-detail2')}>Read More</button>
                </div>
            </div>
        </section>
    );
};

export default CourseOffering;
