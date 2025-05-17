import React from "react";
import "./About.css";
import Img from "../assets/Screenshot_13-5-2025_9591_localhost.jpeg";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1 className="text-purple-700 about-title font-bold" >About Us</h1>
        <div className="about-content">
          <div>
            <p>
              Welcome to our <strong>Resume Builder</strong> — a modern,
              intuitive platform designed to help you craft professional resumes
              with ease. Whether you're a student, recent graduate, or
              experienced professional, our tool empowers you to create standout
              resumes tailored to your career goals.
            </p>
            <p>
              Our mission is to simplify the resume creation process by offering
              customizable templates, intuitive forms, and real-time previews.
              No design skills required — just enter your details, choose a
              layout, and export a polished, ready-to-send resume in minutes.
            </p>
            <p>
              Built by a passionate team of developers and career advocates, our
              platform combines usability, performance, and design flexibility
              to support your job search journey.
            </p>
            <p>
              Thank you for choosing our Resume Builder. We’re here to help you
              take the next step with confidence.
            </p>
          </div>
          <img src={Img} alt="screenshot of website" />
        </div>
      </div>
    </section>
  );
}

export default About;
