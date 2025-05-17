import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Modal from "../components/Modal";
import HERO_IMG from "../assets/hero-img.png";
import About from "../components/About";
import LiveIcon from "../assets/signal-stream.png";
import CustomTemplate from "../assets/templates.png";
import InstantIcon from "../assets/express-delivery.png";
import Footer from "../components/Footer";
import Header from "../components/Header";

const LandingPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [authModalVisible, setAuthModalVisible] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  const handleStartClick = () => {
    if (!user) {
      setAuthModalVisible(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 text-gray-900">
      <Header onLoginClick={() => setAuthModalVisible(true)} />
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Bar */}

        {/* Main Section */}
        <main className="flex flex-col-reverse md:flex-row items-center gap-12 py-10 pt-20">
          <div className="md:w-1/2 w-full">
            <h2 className="text-4xl font-extrabold leading-snug mb-4">
              Create Your{" "}
              <span className="text-purple-600">Professional Resume</span>
            </h2>
            <p className="text-base text-gray-700 mb-6">
              Save time and impress employers. Our intuitive builder helps you
              design a standout resume effortlessly.
            </p>
            <button
              onClick={handleStartClick}
              className="px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
            >
              Start Building
            </button>
          </div>
          <div className="md:w-1/2 w-full">
            <img
              src={HERO_IMG}
              alt="CV Illustration"
              className="rounded-lg w-full shadow-lg"
            />
          </div>
        </main>

        {/* Features */}
        <section className="py-12">
          <h3 className="text-2xl font-bold text-center mb-10">
            Why Choose Our Builder?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center text-center">
              <img src={LiveIcon} alt="Live Editor Icon" className="mb-4" />
              <h4 className="text-lg font-semibold mb-2">Live Editor</h4>
              <p className="text-sm text-gray-600">
                Experience seamless resume creation with our live editor.
                Instantly preview every change you make, ensuring your resume
                looks perfect before you hit download — no need to refresh or
                switch tabs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center text-center">
              <img
                src={CustomTemplate}
                alt="Custom Templates Icon"
                className="mb-4"
              />
              <h4 className="text-lg font-semibold mb-2">Custom Templates</h4>
              <p className="text-sm text-gray-600">
                Choose from a variety of expertly designed templates to match
                your industry and style. Whether you're in tech, design,
                marketing, or finance — we've got a layout that fits you
                perfectly.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center text-center">
              <img src={InstantIcon} alt="InstantIcon" className="mb-4" />
              <h4 className="text-lg font-semibold mb-2">Instant Download</h4>
              <p className="text-sm text-gray-600">
                Once you're done, download your resume as a professional-grade
                PDF in seconds. No sign-up delays, no waiting — just a polished
                document ready to impress recruiters.
              </p>
            </div>
          </div>
        </section>

        <About />

        {/* Footer */}
      </div>
      <Footer />

      {/* Auth Modal */}
      <Modal
        isOpen={authModalVisible}
        onClose={() => {
          setAuthModalVisible(false);
          setAuthMode("login");
        }}
        hideHeader
      >
        {authMode === "login" && <Login setCurrentPage={setAuthMode} />}
        {authMode === "signup" && <SignUp setCurrentPage={setAuthMode} />}
      </Modal>
    </div>
  );
};

export default LandingPage;
