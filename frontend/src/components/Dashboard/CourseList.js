import React from 'react';

const CourseList = ({ courses, deleteCourse }) => {
    
    return (
        <div className="course-list">
            {courses.length === 0 ? (
                <p>No courses available. Add some!</p>
            ) : (
                <ul>
                    {courses.map((course) => (
                        <li key={course.id}>
                            <h3>{course.name}</h3>
                            <p>{course.description}</p>
                            <button onClick={() => deleteCourse(course.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CourseList;
