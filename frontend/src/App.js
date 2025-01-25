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
import NotFoundPage from './components/NotFoundPage';
import CourseDetailPage from "./components/Pages/CourseDetailPage";
import IMATMeditaliaPlus from "./components/Pages/IMATMeditaliaPlus";

const App = () => {
    // Create references for smooth scrolling
    const courseSectionRef = useRef(null);
    const footerSectionRef = useRef(null);

    // Function to scroll to the CourseOffering section
    const scrollToCourses = (e) => {
        e.preventDefault();
        if (courseSectionRef.current) {
            courseSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Function to scroll to the Footer section
    const scrollToFooter = (e) => {
        e.preventDefault();
        if (footerSectionRef.current) {
            footerSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Router>
            <Navbar scrollToCourses={scrollToCourses} scrollToFooter={scrollToFooter} />
            <Routes>
                {/* Home Page */}
                <Route
                    path="/"
                    element={
                        <div>
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
                        </div>
                    }
                />

                {/* Pathway Section Pages */}
                <Route path="/imat-test-breakdown" element={<IMATTestBreakdown />} />
                <Route path="/global-test-centres" element={<GlobalTestCentres />} />
                <Route path="/ScholarshipOpportunities" element={<ScholarshipOpportunities />} />
                <Route path="/VisionPage" element={<VisionPage />} />
                <Route path="/UniversitiesPage" element={<UniversitiesPage/>} />

                {/* Static Pages */}
                <Route path="/about" element={<h1>About Us</h1>} />
                <Route path="/courses" element={<h1>Courses</h1>} />

                {/* Authentication Pages */}
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />

                {/* Protected Dashboard Routes */}
                <Route path="/admin-dashboard" element={<ProtectedRoute element={<AdminDashboard />} role="admin" />} />
                <Route path="/student-dashboard" element={<ProtectedRoute element={<StudentDashboard />} role="student" />} />
                <Route path="/admin-dashboard/manage-courses" element={<ProtectedRoute element={<ManageCourses />} role="admin" />} />

                {/* Course pages */}
                <Route path="/course-detail" element={<CourseDetailPage />} />
                <Route path="/IMATMeditalia+" element={<IMATMeditaliaPlus />} />
                    
                {/* Handle undefined routes */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};

export default App;