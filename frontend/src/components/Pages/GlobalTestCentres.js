import React from 'react';
import './GlobalTestCentres.css';

const GlobalTestCentres = () => {
    return (
        <div className="test-centres-container">
            <h2 className="test-centres-heading">Global Test Centers</h2>
            <p className="test-centres-description">
                The IMAT exam is conducted globally, offering aspiring medical students the convenience of taking the test closer to home. Here are some key locations where the IMAT is held:
            </p>
            <div className="test-centres-list">
                <ul className="left-list">
                    <li><strong>Italy:</strong> Rome, Milan, Naples</li>
                    <li><strong>United Kingdom:</strong> London</li>
                    <li><strong>United States:</strong> New York</li>
                    <li><strong>United Arab Emirates:</strong> Dubai</li>
                    <li><strong>India:</strong> Chennai, New Delhi</li>
                    <li><strong>Germany:</strong> Frankfurt</li>
                    <li><strong>Pakistan:</strong> Lahore</li>
                </ul>
                <ul className="right-list">
                    <li><strong>Saudi Arabia:</strong> Jeddah</li>
                    <li><strong>Turkey:</strong> Izmir, Ankara, and Istanbul</li>
                    <li><strong>Poland:</strong> Warsaw</li>
                    <li><strong>South Africa:</strong> Cape Town</li>
                    <li><strong>Brazil</strong></li>
                    <li><strong>Spain</strong></li>
                    <li><strong>Many more locations worldwide</strong></li>
                </ul>
            </div>
        </div>
    );
};

export default GlobalTestCentres;
