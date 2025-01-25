import './HeroSection.css';
import doctorMale from '../assets/doctor-male.png';
import doctorFemale from '../assets/doctor-female.png';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <section className="hero">
            <div className="hero-image">
                <img src={doctorMale} alt="Doctor Male" />
            </div>
            <div className="hero-text">
                <h1>Future <span>MedsAcademy</span></h1>
                <p>
                    "Crack your goals with expert guidance and top-quality education.
                    Unlock your full potential through strategic learning. Empower yourself
                    with the skills and knowledge needed to succeed and achieve excellence."
                </p>
                <div className="nav-button">
                    <button className="btn" id="loginBtn" onClick={() => navigate('/login')}>
                        Login
                    </button>
                    <button className="btn" id="registerBtn" onClick={() => navigate('/signup')}>
                        Sign Up
                    </button>
                </div>
            </div>
            <div className="hero-image">
                <img src={doctorFemale} alt="Doctor Female" />
            </div>
        </section>
    );
};

export default HeroSection;
