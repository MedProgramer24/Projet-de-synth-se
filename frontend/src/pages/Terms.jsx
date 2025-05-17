import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <>
    <Header />
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto bg-white p-10 shadow-xl rounded-lg">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-purple-700 mb-10">
          Terms & Conditions
        </h1>

        {/* Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            1. Introduction
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to <strong>CV Maker Pro</strong>. By accessing and using our platform, 
            you agree to comply with the following terms. If you do not agree, 
            please discontinue use of our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            2. Account Responsibility
          </h2>
          <p className="text-gray-600 leading-relaxed">
            You are responsible for maintaining the confidentiality of your account
            credentials and for all activities under your account.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            3. Service Usage
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our service is for personal, non-commercial use only. You may not reproduce,
            redistribute, or resell any content or features without permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            4. Intellectual Property
          </h2>
          <p className="text-gray-600 leading-relaxed">
            All templates, graphics, and code are the property of CV Maker Pro. You agree 
            not to replicate or distribute our intellectual property.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            5. Privacy & Data
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Your personal data is protected under our{" "}
            <a href="/privacy" className="text-purple-600 underline hover:text-purple-800">
              Privacy Policy
            </a>. We do not sell your data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            6. Warranty Disclaimer
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The platform is provided "as-is" without warranties. We do not guarantee the 
            accuracy or reliability of the results generated.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            7. Limitation of Liability
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We are not liable for damages or losses resulting from the use of our service, 
            including lost opportunities or resume inaccuracies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            8. Modifications
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to modify these terms at any time. Your continued use 
            constitutes acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            9. Contact Us
          </h2>
          <p className="text-gray-600 leading-relaxed">
            For questions or concerns, please reach out to us at{" "}
            <a
              href="mailto:support@cvmakerpro.com"
              className="text-purple-600 underline hover:text-purple-800"
            >
              support@cvmakerpro.com
            </a>.
          </p>
        </section>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Terms;
