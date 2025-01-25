import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import CourseOffering from "./components/CourseOffering";
import PathwaySection from "./components/PathwaySection";
import CommitmentSection from "./components/CommitmentSection";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import StudentDashboard from "./components/Dashboard/StudentDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import ManageCourses from "./components/Dashboard/ManageCourses";
import IMATTestBreakdown from "./components/Pages/IMATTestBreakdown";
import GlobalTestCentres from "./components/Pages/GlobalTestCentres";
import ScholarshipOpportunities from "./components/Pages/ScholarshipOpportunities";
import VisionPage from "./components/Pages/VisionPage";
import UniversitiesPage from "./components/Pages/UniversitiesPage";
import NotFoundPage from "./components/NotFoundPage";
import CourseDetailPage from "./components/Pages/CourseDetailPage";
import IMATMeditaliaPlus from "./components/Pages/IMATMeditaliaPlus";

const App = () => {
    const courseSectionRef = useRef(null);
    const footerSectionRef = useRef(null);

    const scrollToSection = (ref) => (e) => {
        e.preventDefault();
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Router>
            <Navbar 
                scrollToCourses={scrollToSection(courseSectionRef)} 
                scrollToFooter={scrollToSection(footerSectionRef)} 
            />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <HeroSection />
                            <FeaturesSection />
                            <div ref={courseSectionRef}>
                                <CourseOffering />
                            </div>
                            <PathwaySection />
                            <CommitmentSection />
                            <div ref={footerSectionRef}>
                                <Footer />
                            </div>
                        </>
                    }
                />
                <Route path="/imat-test-breakdown" element={<IMATTestBreakdown />} />
                <Route path="/global-test-centres" element={<GlobalTestCentres />} />
                <Route path="/scholarship-opportunities" element={<ScholarshipOpportunities />} />
                <Route path="/vision-page" element={<VisionPage />} />
                <Route path="/universities-page" element={<UniversitiesPage />} />
                <Route path="/about" element={<h1>About Us</h1>} />
                <Route path="/courses" element={<h1>Courses</h1>} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin-dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
                <Route path="/student-dashboard" element={<ProtectedRoute><StudentDashboard /></ProtectedRoute>} />
                <Route path="/admin-dashboard/manage-courses" element={<ProtectedRoute><ManageCourses /></ProtectedRoute>} />
                <Route path="/course-detail" element={<CourseDetailPage />} />
                <Route path="/imat-meditalia-plus" element={<IMATMeditaliaPlus />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};

export default App;
