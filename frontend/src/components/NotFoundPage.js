import React from 'react';
import './NotFoundPage.css'; // Ensure your CSS file is linked here

const NotFoundPage = () => {
    return (
        <div className="not-found-container">
            <h1>404</h1>
            <h2>UPSS!</h2>
            <p>Oops! This page can’t be found!</p>
            <p>"Page not found! Explore our other pages to discover something new."</p>
            <a href="/">Go Home</a>
        </div>
    );
};

export default NotFoundPage;
