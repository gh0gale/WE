import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      {/* About Us Section */}
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          We are an innovative e-learning platform dedicated to providing 
          high-quality courses across various domains. Our mission is to 
          make learning accessible, engaging, and effective for students 
          and professionals worldwide.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose">
        <h2>Why Choose Us?</h2>
        <div className="reasons">
          <div className="reason-card">
            <h3>📚 Extensive Courses</h3>
            <p>Explore a wide range of courses across multiple disciplines.</p>
          </div>

          <div className="reason-card">
            <h3>🎯 Personalized Learning</h3>
            <p>Customize your learning experience with tailored recommendations.</p>
          </div>

          <div className="reason-card">
            <h3>💡 Expert Instructors</h3>
            <p>Learn from industry experts and gain real-world insights.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
