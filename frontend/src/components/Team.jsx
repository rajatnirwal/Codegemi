import React, { useState, useEffect, useRef } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Vikul Singhaniya",
      role: "PhD, IIT Bombay",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      rating: 5,
      quote: "The team's expertise and dedication exceeded all our expectations. They delivered exceptional results that transformed our business operations completely."
    },
    {
      id: 2,
      name: "Shikha Sharma",
      role: "M.Tech (KIET)",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
      rating: 5,
      quote: "Outstanding service and professional approach. They understood our requirements perfectly and delivered beyond what we imagined."
    },
    {
      id: 3,
      name: "Deepak Kumar",
      role: "B.Tech (AKTU)",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      rating: 4,
      quote: "Working with this team was a game-changer for our project. Their innovative solutions and timely delivery impressed us greatly."
    },
    {
      id: 4,
      name: "Rajat Nirwal",
      role: "B.Tech (AKTU)",
      image: "https://images.unsplash.com/photo-1718209881014-83732ea8376d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D",
      rating: 5,
      quote: "Professional, reliable, and highly skilled. They delivered exactly what we needed with excellent attention to detail."
    },
    {
      id: 5,
      name: "Arun Kumar",
      role: "M.Tech (ABES)",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=798&q=80",
      rating: 4,
      quote: "The quality of work and commitment to deadlines was remarkable. We're extremely satisfied with the results."
    },
    {
      id: 6,
      name: "Kajol Kori",
      role: "B.Tech (AKTU)",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
      rating: 5,
      quote: "Exceptional team with great communication skills. They made the entire process smooth and stress-free for us."
    },
    {
      id: 7,
      name: "Shikul",
      role: "Robotics & Drone Expert",
      image: "https://plus.unsplash.com/premium_photo-1663075992509-b3f0685ac291?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      quote: "Their technical expertise in cutting-edge technologies is impressive. They delivered innovative solutions that gave us a competitive edge."
    },
    {
      id: 8,
      name: "Shubarata Mohanty",
      role: "AI/ML Specialist",
      image: "https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?semt=ais_hybrid&w=740&q=80",
      rating: 5,
      quote: "Outstanding work in AI and machine learning. The team's deep knowledge and problem-solving skills are truly exceptional."
    },
  ];

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 4000);
    };

    const stopAutoScroll = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };

    startAutoScroll();

    // Clean up on component unmount
    return () => stopAutoScroll();
  }, [testimonials.length]);

  // Handle manual navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="testimonials-section py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="title-wrap mb-12 flex flex-col md:flex-row justify-between items-center">
          <div className="section-title text-center md:text-left mb-8 md:mb-0">
            <div className="subtitle flex items-center justify-center md:justify-start mb-4">
              <span className="text-indigo-600 font-semibold tracking-wide">
                CLIENT TESTIMONIALS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Our Clients Say About Us
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl">
              Discover why businesses trust us with their most important projects
            </p>
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
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="slider-item px-4 w-full md:w-1/2 lg:w-1/3 flex-shrink-0 transition-all duration-500"
              >
                <div className="testimonial-card bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500 p-6 h-full">
                  {/* Quote icon */}
                  <div className="text-indigo-100 mb-4">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                    </svg>
                  </div>

                  {/* Rating */}
                  <StarRating rating={testimonial.rating} />

                  {/* Testimonial text */}
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Client info */}
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-indigo-100"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-indigo-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
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

export default Testimonials;