import React, { useState, useEffect } from 'react';
import CourseForm from './CourseForm';
import CourseList from './CourseList';
import './Dashboard.css';

const ManageCourses = () => {
    const [courses, setCourses] = useState([]);

    // Load courses from localStorage on component mount
    useEffect(() => {
        const savedCourses = JSON.parse(localStorage.getItem('courses')) || [];
        setCourses(savedCourses);
    }, []);

    // Function to add a course and store it in localStorage
    const addCourse = (newCourse) => {
        const existingCourses = JSON.parse(localStorage.getItem('courses')) || [];
        const updatedCourses = [...existingCourses, newCourse];
        localStorage.setItem('courses', JSON.stringify(updatedCourses));
        setCourses(updatedCourses);
    };
    

    // Function to delete a course
    const deleteCourse = (id) => {
        const updatedCourses = courses.filter(course => course.id !== id);
        setCourses(updatedCourses);
        localStorage.setItem('courses', JSON.stringify(updatedCourses));
    };

    return (
        <div className="dashboard-content">
            <h2>Manage Courses</h2>
            <CourseForm addCourse={addCourse} />
            <CourseList courses={courses} deleteCourse={deleteCourse} />
        </div>
    );
};

export default ManageCourses;
