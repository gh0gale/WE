import React from "react";
import { FaBookOpen, FaPlayCircle, FaChalkboardTeacher } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <h1>Learn Anytime, Anywhere</h1>
        <p>Explore high-quality courses and enhance your skills with expert instructors.</p>
        <button className="explore-btn">Get Started</button>
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="feature-card">
          <FaBookOpen className="icon" />
          <h3>Expert Courses</h3>
          <p>Learn from industry experts with structured courses.</p>
        </div>

        <div className="feature-card">
          <FaPlayCircle className="icon" />
          <h3>Interactive Lessons</h3>
          <p>Engage with interactive videos and quizzes.</p>
        </div>

        <div className="feature-card">
          <FaChalkboardTeacher className="icon" />
          <h3>Live Sessions</h3>
          <p>Join live sessions and clear your doubts instantly.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;


