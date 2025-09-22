import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed"; 

export const Hero = () => {
  const navigate = useNavigate();

  const handleResearchClick = () => {
    const publicationsSection = document.querySelector(
      '[data-section="publications"]'
    );
    if (publicationsSection) {
      publicationsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    navigate("/contact");  // This will go to ETIL-Research-Team-Page/#/contact
  };

  return (
    <section className="relative z-0 bg-black border-b-2 border-red-500 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="h-20 mb-6 flex justify-center items-center">
            {/* <img src="/logo.png" alt="Logo" className="h-full" /> */}
          </div>

          <h1 className="text-5xl font-bold text-white mb-6">
            ETIL Research Lab
          </h1>

          <p className="text-xl text-white max-w-3xl mx-auto block mb-8 leading-relaxed">
            Our team is dedicated to do research along the Yamaha Vision.
          </p>

          <div className="flex justify-center space-x-4">
            <button
              onClick={handleResearchClick}
              className="border-2 border-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-500 transition-colors"
            >
              Our Research
            </button>
            <button
              onClick={handleContactClick}
              className="border-2 border-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-500 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
