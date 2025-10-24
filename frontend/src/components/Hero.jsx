import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  // Image list
  const images = [
    "https://viso.ai/wp-content/uploads/2024/02/ASI-ANI-AGI-types-of-AI.jpg",
    "https://t4.ftcdn.net/jpg/03/08/69/75/240_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzrdJ8uOj5T51mZdRGB-6H0QizVomAIUcfEw&s",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNYXfvq-qig_enxzk4NbLfSozLStSfqDKsbg&s",
    "https://media.licdn.com/dms/image/v2/D5612AQEopNky00HSKA/article-cover_image-shrink_720_1280/B56ZZ4HNwwHsAI-/0/1745771881203?e=2147483647&v=beta&t=xFDpwOJSHLAjMzeBZ19rLVjlhUDerWcOhMHEutS7NZQ",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAwRU8B1ABDnLW_GKJkZvSQj3eIndX4xmNeQ&s",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Auto slideshow logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative text-white py-26 px-6 md:px-12"
      style={{
        background:
          "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* -------- Left Text Section -------- */}
        <div className="md:w-1/2 space-y-6">
          <span className="bg-gray-800 text-sm md:text-base px-4 py-2 rounded-full inline-block">
            Transforming Business with AI Technology
          </span>
          <h1 className="text-4xl md:text-5xl font-bold">
            Business <span className="text-purple-400">Innovation</span>
          </h1>
          <p className="text-2xl md:text-3xl text-purple-300 font-semibold">
            Fueled By IT Excellence
          </p>
          <p className="text-lg md:text-xl text-gray-300">
            We drive business innovation with AI-driven IT services tailored for
            modern enterprises. Our intelligent solutions enhance efficiency,
            streamline operations, and unlock new opportunities.
          </p>
          <div className="flex space-x-4">
            <Link to="/contact">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow hover:scale-105 transition">
                GET STARTED
              </button>
            </Link>

            <button className="px-6 py-3 bg-gray-700 rounded-lg shadow hover:scale-105 transition">
              WATCH DEMO
            </button>
          </div>
          <div className="flex space-x-8 text-gray-400 pt-6">
            <p>
              <span className="text-white font-bold text-3xl md:text-3xl">
                150+
              </span>
              <br />
              Projects Completed
            </p>
            <p>
              <span className="text-white font-bold text-3xl md:text-3xl">
                98%
              </span>
              <br />
              Client Satisfaction
            </p>
            <p>
              <span className="text-white font-bold text-3xl md:text-3xl">
                24/7
              </span>
              <br />
              Support Available
            </p>
          </div>
        </div>

        {/* -------- Right Slideshow Section -------- */}
        <div className="md:w-1/2 mt-10 md:mt-0 relative rounded-2xl bg-gray-900 overflow-hidden">
          <img
            key={currentImage}
            src={images[currentImage]}
            alt="AI Business Innovation"
            className="w-full h-[400px] object-cover transform transition-all duration-1000 opacity-0 animate-fadeIn"
            loading="lazy"
          />
          <span className="absolute top-4 right-4 bg-purple-600 text-xs px-3 py-1 rounded-full">
            AI Powered
          </span>
        </div>
      </div>

      {/* ---- Fade Animation ---- */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fadeIn {
            animation: fadeIn 1.5s ease-in-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
