import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
import './Dashboard.css';

const StudentDashboard = () => {
    const [courses, setCourses] = useState([]);

    // Load courses from localStorage when component mounts
    useEffect(() => {
        const storedCourses = JSON.parse(localStorage.getItem('courses')) || [];
        if (storedCourses.length > 0) {
            setCourses(storedCourses);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.href = "/login";
    };

    return (
        <div className="dashboard-container">
            <Sidebar role="student" />
            <div className="dashboard-content">
                <DashboardHeader username="Student" />

                <div className="dashboard-section">
                    <h2>Enrolled Courses</h2>
                    {courses.length === 0 ? (
                        <p>No courses available.</p>
                    ) : (
                        <ul className="course-list">
                            {courses.map((course, index) => (
                                <li key={index} className="course-item">
                                    <h3>{course.name}</h3>
                                    <p>{course.description}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default StudentDashboard;