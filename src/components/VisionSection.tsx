import React from "react";

const VisionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2
          className="
            text-3xl font-bold mb-6 inline-block relative 
            after:content-[''] after:block after:w-0 after:h-[3px] after:bg-red-500 
            after:transition-all after:duration-300 after:mx-auto
            hover:after:w-full
          "
        >
          Our Vision
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          We aim to advance research and innovation in cutting-edge technologies
          like AI, Medical Imaging, EEG, Agriculture, and 3D Point Cloud. Our
          mission is to create impactful solutions that bridge the gap between
          research and real-world applications.
        </p>
      </div>
    </section>
  );
};

export default VisionSection;
