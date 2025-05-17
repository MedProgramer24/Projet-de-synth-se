import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const faqData = [
  {
    question: "Is the Resume Builder free to use?",
    answer:
      "Yes! Our basic features are free. You can create, edit, and download resumes at no cost. Premium templates or advanced tools may require an upgrade.",
  },
  {
    question: "Do I need to sign up to build a resume?",
    answer:
      "You can explore and build resumes without an account. However, signing up allows you to save, edit, and access your resumes anytime.",
  },
  {
    question: "Can I export my resume as a PDF?",
    answer:
      "Yes. Our platform lets you download your resume as a high-quality, print-ready PDF with a single click.",
  },
  {
    question: "Are your templates optimized for Applicant Tracking Systems (ATS)?",
    answer:
      "Absolutely. All our templates are designed with ATS in mind, helping your resume get through automated systems used by many employers.",
  },
  {
    question: "Can I customize the design of my resume?",
    answer:
      "Of course! Choose from various fonts, color schemes, and layout styles to personalize your resume to match your industry and personality.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <Header />
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-12">
        Frequently Asked Questions
      </h1>
      <div className="space-y-6">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-sm transition-all duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none hover:bg-gray-50"
            >
              <span className="text-lg font-semibold text-gray-800">{item.question}</span>
              <span className="text-purple-600 text-2xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-4 text-gray-600">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default FAQ;
