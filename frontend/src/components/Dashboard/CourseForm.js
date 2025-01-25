import React, { useState } from 'react';

const CourseForm = ({ addCourse }) => {
    const [courseName, setCourseName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!courseName || !description) return alert('Please fill in all fields');
    
        const newCourse = {
            id: Date.now(),
            name: courseName,
            description: description
        };
    
        addCourse(newCourse);
        setCourseName('');
        setDescription('');
    };
    

    return (
        <form onSubmit={handleSubmit} className="course-form">
            <input
                type="text"
                placeholder="Course Name"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
            />
            <textarea
                placeholder="Course Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button type="submit">Add Course</button>
        </form>
    );
};

export default CourseForm;
