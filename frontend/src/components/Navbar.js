import './styles/navbar.css';
import FmaLogo from '../assets/FMA-Logo.png';
import FmaLogo2 from '../assets/FMA-Logo2.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({ scrollToCourses, scrollToFooter }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the visibility of the nav links
    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo-container">
                <div className="logo">
                    <img src={FmaLogo} alt="Fma Logo" />
                </div>
                <div className="logo-2">
                    <img src={FmaLogo2} alt="Fma Logo 2" />
                </div>
            </div>

            <button className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleNav}>
                &#9776; {/* Hamburger icon */}
            </button>

            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><a href="#courses" onClick={scrollToCourses}>Courses</a></li>
                <li><a href="#footer" onClick={scrollToFooter}>About Us</a></li>
                <li><Link to="/materials">Study Materials</Link></li>
                <li><Link to="/universities">Universities</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
