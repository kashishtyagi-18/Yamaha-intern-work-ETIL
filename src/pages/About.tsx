import { useState, useEffect, useRef } from "react";
import img1 from "../assets/image_1.jpeg";
import img2 from "../assets/image_2.png";
import img3 from "../assets/image_3.jpeg";
import img4 from "../assets/image_4.png";
import img5 from "../assets/image_5.png";
import img6 from "../assets/image_6.png";
import img7 from "../assets/image_7.png";
import img8 from "../assets/image_8.png";
import img9 from "../assets/image_9.jpeg";
import img10 from "../assets/image_10.jpeg";
import img11 from "../assets/image_11.png";

// Combine each image and description into one object
const galleryData = [
  { src: img1, description: "Poster Presentataion @ CVIP'2024" },
  { src: img2, description: "Amit San with Subrahmanyam Murala San" },
  { src: img3, description: "Uday San receiving certificate CVR'2025" },
  {
    src: img4,
    description: "Rupesh San, Shruti San and Amit San at CVIP'2024",
  },
  { src: img5, description: "Shruti San receiving certificate at CVIP'2024" },
  { src: img6, description: "Amit San presenting CICT'2024" },
  { src: img7, description: "Amit San and Rupesh San at CICT'2024" },
  { src: img8, description: "Uday San and Amit San at CVR'2025" },
  { src: img9, description: "Amit San receiving certificate at CVR'2025" },
  { src: img10, description: "Uday San presenting at CVR'2025" },
  { src: img11, description: "Amit San presenting at CVR'2025" },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide 
  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % galleryData.length);
      }, 3500);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  const handleGridClick = (img: string, index: number) => {
    setCurrentIndex(index);
    setSelectedImage(img);
    setPaused(true);

    setTimeout(() => {
      setPaused(false);
      setSelectedImage(null);
    }, 5000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">
            YMSLI ETIL 
          </h1>
          <h1 className="text-4xl font-bold mb-6">
            Research Team
          </h1>
          <p className="text-xl leading-relaxed mt-8">
            We are the ETIL Research team at YMSLI, inspired by Yamaha’s vision
            to shape the future through innovation. Our research spans Medical
            Imaging, Autonomous Mobility, Precision Agriculture, EEG, Large &
            Small Language Models (LLM/SLM), Geographic Information Systems
            (GIS), Point Clouds, and Edge Devices domains that push the
            boundaries of technology and its real-world impact.
          </p>
          <p className="text-xl leading-relaxed mt-4">
            Beyond research, we play an active role in supporting ETIL projects,
            translating advanced ideas into practical applications in areas such
            as GIS, SLM, and Edge Computing. Together, we are charting new
            pathways where technology transforms possibility into reality.
          </p>
        </div>
      </section>

      {/* Work Culture Section */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl font-bold text-center mb-12 relative w-fit mx-auto
          after:content-[''] after:block after:w-0 after:h-[3px] after:bg-teal-500
          after:transition-all after:duration-300 after:mx-auto hover:after:w-full"
        >
          Work Culture
        </h2>

        {/* Big Featured Image */}
        <div className="mb-4 bg-gray-100 flex flex-col items-center justify-center rounded-lg shadow-md w-full h-[500px] p-4">
          <img
            src={selectedImage ?? galleryData[currentIndex].src}
            alt="Work Culture"
            className="max-h-full max-w-full object-contain transition-all duration-700"
          />
        </div>

        {/* Description text */}
        <p className="text-center text-gray-500 italic mb-10 transition-opacity duration-700">
          {galleryData[currentIndex].description}
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {galleryData.map((item, idx) => (
            <img
              key={idx}
              src={item.src}
              alt={`Work ${idx + 1}`}
              className="w-full h-40 object-cover object-top rounded-lg cursor-pointer hover:opacity-80 transition"
              onClick={() => handleGridClick(item.src, idx)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
