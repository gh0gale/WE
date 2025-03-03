import React from "react";
import "./Courses.css";


const coursesData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Learn HTML, CSS, JavaScript, and React to build modern websites.",
    image: "",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Master the art of user experience and interface design.",
    image: "",
  },
  {
    id: 3,
    title: "Data Science",
    description: "Explore Python, machine learning, and data visualization.",
    image: "",
  },
  {
    id: 4,
    title: "Cybersecurity",
    description:
      "Learn about ethical hacking, network security, and encryption.",
    image: "",
  },
  {
    id: 5,
    title: "Mobile App Development",
    description: "Build Android & iOS apps using Flutter and React Native.",
    image: "",
  },
  {
    id: 6,
    title: "Artificial Intelligence",
    description: "Understand AI, deep learning, and neural networks.",
    image: "",
  },
];

const Courses = () => {
  return (
    <div className="courses">
      <h1>Our Courses</h1>
      <p>Explore a variety of courses designed to boost your career.</p>

      <div className="course-grid">
        {coursesData.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button className="enroll-btn">Enroll Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
