import React, { useState, useEffect, useRef } from "react";

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const teamMembers = [
    {
      id: 1,
      name: "Vikul Singhaniya",
      role: "PhD, IIT Bombay",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 2,
      name: "Shikha Sharma",
      role: "M.Tech (KIET)",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: 3,
      name: "Deepak Kumar",
      role: "B.Tech (AKTU)",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 4,
      name: "Rajat Nirwal",
      role: "B.Tech (AKTU)",
      image:
        "https://images.unsplash.com/photo-1718209881014-83732ea8376d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      name: "Arun Kumar",
      role: "M.Tech (ABES)",
      image:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=798&q=80",
    },
    {
      id: 6,
      name: "Kajol Kori",
      role: "B.Tech (AKTU)",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: 7,
      name: "Shikul",
      role: "Diploma (Mechanical, 2020)",
      experience: "Robotics & Drone Technologies",
      image:
        "https://plus.unsplash.com/premium_photo-1663075992509-b3f0685ac291?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      name: "Shubarata Mohanty",
      role: "M.tech (IIT Patna, 2023),mathematics and computing",
      experience: "AI,ML,NLP,Deep learning",
      image:
        "https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?semt=ais_hybrid&w=740&q=80",
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
      }, 3000);
    };

    const stopAutoScroll = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };

    startAutoScroll();

    // Clean up on component unmount
    return () => stopAutoScroll();
  }, [teamMembers.length]);

  // Handle manual navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length
    );
  };

  return (
    <section className="team-section py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="title-wrap mb-12 flex flex-col md:flex-row justify-between items-center">
          <div className="section-title text-center md:text-left mb-8 md:mb-0">
            <div className="subtitle flex items-center justify-center md:justify-start mb-4">
              <span className="text-indigo-600 font-semibold tracking-wide">
                OUR EXPERT TEAM
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Introducing Our Dedicated Team of Experts
            </h2>
          </div>
          <div className="arrow-btn flex space-x-4">
            <button
              onClick={goToPrev}
              className="slider-arrow w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="slider-arrow w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="slider-container relative overflow-hidden">
          <div
            ref={sliderRef}
            className="slider-track flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="slider-item px-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex-shrink-0 transition-all duration-500"
              >
                <div className="team-card bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500">
                  <div className="team-card-thumb relative overflow-hidden">
                    <div className="aspect-w-3 aspect-h-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="object-cover w-full h-80 transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="team-card-body p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-indigo-600 font-medium">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-indigo-600" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
