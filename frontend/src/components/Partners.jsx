// components/Partners.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Partners = () => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = () => {
      setIsReducedMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Partners data with more attractive and recognizable logos
  const partners = [
    {
      name: "OpenAI",
      logo: (
        <svg
          className="w-20 h-12"
          viewBox="0 0 120 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60 30C60 39.9411 51.9411 48 42 48C32.0589 48 24 39.9411 24 30C24 20.0589 32.0589 12 42 12C51.9411 12 60 20.0589 60 30Z"
            fill="black"
          />
          <path
            d="M96 30C96 39.9411 87.9411 48 78 48C68.0589 48 60 39.9411 60 30C60 20.0589 68.0589 12 78 12C87.9411 12 96 20.0589 96 30Z"
            fill="black"
          />
          <path
            d="M42 48C51.9411 48 60 39.9411 60 30C60 20.0589 51.9411 12 42 12C32.0589 12 24 20.0589 24 30C24 39.9411 32.0589 48 42 48Z"
            stroke="black"
            strokeWidth="4"
            fill="none"
          />
          <path
            d="M78 48C87.9411 48 96 39.9411 96 30C96 20.0589 87.9411 12 78 12C68.0589 12 60 20.0589 60 30C60 39.9411 68.0589 48 78 48Z"
            stroke="black"
            strokeWidth="4"
            fill="none"
          />
          <path
            d="M60 30H42"
            stroke="black"
            strokeWidth="4"
          />
          <path
            d="M78 30H96"
            stroke="black"
            strokeWidth="4"
          />
        </svg>
      ),
      color: "text-gray-900",
    },
    {
      name: "Microsoft Azure",
      logo: (
        <svg
          className="w-20 h-12"
          viewBox="0 0 120 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 45L50 15L70 45H30Z"
            fill="#0078D4"
          />
          <path
            d="M70 45L50 15L90 45H70Z"
            fill="#0078D4"
            opacity="0.8"
          />
          <path
            d="M50 15L30 45H70L50 15Z"
            fill="#0078D4"
            opacity="0.6"
          />
          <path
            d="M70 45H90L50 15L70 45Z"
            fill="#0078D4"
            opacity="0.4"
          />
        </svg>
      ),
      color: "text-blue-600",
    },
    {
      name: "UiPath",
      logo: (
        <svg
          className="w-20 h-12"
          viewBox="0 0 120 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 35C30 42.1797 35.8203 48 43 48C50.1797 48 56 42.1797 56 35C56 27.8203 50.1797 22 43 22C35.8203 22 30 27.8203 30 35Z"
            fill="#D32F2F"
          />
          <path
            d="M64 35C64 42.1797 69.8203 48 77 48C84.1797 48 90 42.1797 90 35C90 27.8203 84.1797 22 77 22C69.8203 22 64 27.8203 64 35Z"
            fill="#1976D2"
          />
          <path
            d="M56 35C56 27.8203 61.8203 22 69 22C76.1797 22 82 27.8203 82 35C82 42.1797 76.1797 48 69 48C61.8203 48 56 42.1797 56 35Z"
            fill="#388E3C"
          />
          <path
            d="M43 35C43 27.8203 48.8203 22 56 22V48C48.8203 48 43 42.1797 43 35Z"
            fill="#FF9800"
          />
        </svg>
      ),
      color: "text-red-600",
    },
    {
      name: "Google Cloud",
      logo: (
        <svg
          className="w-20 h-12"
          viewBox="0 0 120 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 35C40 28.3726 45.3726 23 52 23C55.0132 23 57.8008 24.2471 59.8579 26.3431L65.6569 20.5442C62.4186 17.3059 57.4581 15 52 15C42.0589 15 34 23.0589 34 33C34 37.8359 36.2471 42.1631 39.7574 45H65.2426C68.7529 42.1631 71 37.8359 71 33C71 28.1641 68.7529 23.8369 65.2426 21L59.8579 26.3431C61.915 28.4391 63 31.2267 63 34.2399C63 40.8673 57.6274 46.2399 51 46.2399C44.3726 46.2399 39 40.8673 39 34.2399C39 31.2267 40.085 28.4391 42.1421 26.3431L47.9411 20.5442C44.7028 17.3059 39.7423 15 34.2842 15C24.3431 15 16.2842 23.0589 16.2842 33C16.2842 42.9411 24.3431 51 34.2842 51H79.7158C89.6569 51 97.7158 42.9411 97.7158 33C97.7158 23.0589 89.6569 15 79.7158 15C74.2577 15 69.2972 17.3059 66.0589 20.5442L60.2599 26.3431C62.317 28.4391 63.402 31.2267 63.402 34.2399C63.402 40.8673 58.0294 46.2399 51.402 46.2399C44.7746 46.2399 39.402 40.8673 39.402 34.2399C39.402 31.2267 40.487 28.4391 42.5441 26.3431L48.3431 20.5442C45.1048 17.3059 40.1443 15 34.6862 15C24.7451 15 16.6862 23.0589 16.6862 33C16.6862 42.9411 24.7451 51 34.6862 51H80.3138C90.2549 51 98.3138 42.9411 98.3138 33C98.3138 23.0589 90.2549 15 80.3138 15C74.8557 15 69.8952 17.3059 66.6569 20.5442L60.8579 26.3431C62.915 28.4391 64 31.2267 64 34.2399C64 40.8673 58.6274 46.2399 52 46.2399C45.3726 46.2399 40 40.8673 40 34.2399V35Z"
            fill="url(#googleGradient)"
          />
          <defs>
            <linearGradient id="googleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4285F4" />
              <stop offset="25%" stopColor="#34A853" />
              <stop offset="50%" stopColor="#FBBC05" />
              <stop offset="75%" stopColor="#EA4335" />
              <stop offset="100%" stopColor="#4285F4" />
            </linearGradient>
          </defs>
        </svg>
      ),
      color: "text-blue-500",
    },
    {
      name: "AWS",
      logo: (
        <svg
          className="w-20 h-12"
          viewBox="0 0 120 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M75 35L65 45H55L65 35H75Z"
            fill="#FF9900"
          />
          <path
            d="M65 35L55 25H45L55 35H65Z"
            fill="#FF9900"
          />
          <path
            d="M55 35L45 45H35L45 35H55Z"
            fill="#FF9900"
          />
          <path
            d="M85 25L75 35H65L75 25H85Z"
            fill="#FF9900"
          />
          <path
            d="M75 25L65 15H55L65 25H75Z"
            fill="#FF9900"
          />
          <path
            d="M65 25L55 35H45L55 25H65Z"
            fill="#FF9900"
            opacity="0.8"
          />
          <path
            d="M55 25L45 15H35L45 25H55Z"
            fill="#FF9900"
            opacity="0.6"
          />
        </svg>
      ),
      color: "text-orange-500",
    },
    {
      name: "Figma",
      logo: (
        <svg
          className="w-20 h-12"
          viewBox="0 0 120 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 25C50 21.6863 52.6863 19 56 19C59.3137 19 62 21.6863 62 25C62 28.3137 59.3137 31 56 31C52.6863 31 50 28.3137 50 25Z"
            fill="#1ABCFE"
          />
          <path
            d="M50 35C50 31.6863 52.6863 29 56 29C59.3137 29 62 31.6863 62 35C62 38.3137 59.3137 41 56 41C52.6863 41 50 38.3137 50 35Z"
            fill="#0ACF83"
          />
          <path
            d="M68 35C68 31.6863 65.3137 29 62 29C58.6863 29 56 31.6863 56 35C56 38.3137 58.6863 41 62 41C65.3137 41 68 38.3137 68 35Z"
            fill="#FF7262"
          />
          <path
            d="M50 25C50 21.6863 52.6863 19 56 19C59.3137 19 62 21.6863 62 25C62 28.3137 59.3137 31 56 31C52.6863 31 50 28.3137 50 25Z"
            fill="#F24E1E"
            opacity="0.8"
          />
          <path
            d="M68 25C68 21.6863 65.3137 19 62 19C58.6863 19 56 21.6863 56 25C56 28.3137 58.6863 31 62 31C65.3137 31 68 28.3137 68 25Z"
            fill="#A259FF"
          />
          <path
            d="M56 19H50V31H56V19Z"
            fill="#1ABCFE"
            opacity="0.6"
          />
          <path
            d="M56 29H50V41H56V29Z"
            fill="#0ACF83"
            opacity="0.6"
          />
          <path
            d="M62 29H56V41H62V29Z"
            fill="#FF7262"
            opacity="0.6"
          />
          <path
            d="M56 19H62V25H56V19Z"
            fill="#F24E1E"
            opacity="0.6"
          />
          <path
            d="M62 19H68V25H62V19Z"
            fill="#A259FF"
            opacity="0.6"
          />
        </svg>
      ),
      color: "text-purple-600",
    },
    {
      name: "NVIDIA",
      logo: (
        <svg
          className="w-20 h-12"
          viewBox="0 0 120 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 25H40V35H30V25Z"
            fill="#76B900"
          />
          <path
            d="M40 25H50V35H40V25Z"
            fill="#76B900"
            opacity="0.8"
          />
          <path
            d="M50 25H60V35H50V25Z"
            fill="#76B900"
            opacity="0.6"
          />
          <path
            d="M60 25H70V35H60V25Z"
            fill="#76B900"
            opacity="0.4"
          />
          <path
            d="M70 25H80V35H70V25Z"
            fill="#76B900"
            opacity="0.3"
          />
          <path
            d="M35 35H45V45H35V35Z"
            fill="#76B900"
            opacity="0.8"
          />
          <path
            d="M45 35H55V45H45V35Z"
            fill="#76B900"
            opacity="0.6"
          />
          <path
            d="M55 35H65V45H55V35Z"
            fill="#76B900"
            opacity="0.4"
          />
          <path
            d="M65 35H75V45H65V35Z"
            fill="#76B900"
            opacity="0.3"
          />
        </svg>
      ),
      color: "text-green-600",
    },
    {
      name: "IBM Cloud",
      logo: (
        <svg
          className="w-20 h-12"
          viewBox="0 0 120 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35 25C35 21.6863 37.6863 19 41 19H79C82.3137 19 85 21.6863 85 25V35C85 38.3137 82.3137 41 79 41H41C37.6863 41 35 38.3137 35 35V25Z"
            fill="#0062FF"
          />
          <path
            d="M45 25H55V35H45V25Z"
            fill="white"
          />
          <path
            d="M60 25H70V35H60V25Z"
            fill="white"
            opacity="0.8"
          />
          <path
            d="M65 30H75V35H65V30Z"
            fill="white"
            opacity="0.6"
          />
          <path
            d="M50 30H60V35H50V30Z"
            fill="white"
            opacity="0.7"
          />
        </svg>
      ),
      color: "text-blue-700",
    }
  ];

  // Duplicate the partners for seamless looping (only if not reduced motion)
  const duplicatedPartners = isReducedMotion
    ? partners
    : [...partners, ...partners];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden relative">
      {/* Simplified animated background elements */}
      {!isReducedMotion && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-10"
              style={{
                width: `${60 + i * 20}px`,
                height: `${60 + i * 20}px`,
                top: `${10 + i * 15}%`,
                left: `${5 + i * 10}%`,
                background: `radial-gradient(circle, ${
                  i % 3 === 0 ? "#2563EB" : i % 3 === 1 ? "#7C3AED" : "#059669"
                } 0%, transparent 70%)`,
                animation: `float 20s ease-in-out infinite`,
                animationDelay: `${i * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block">
            Trusted by Tech Innovators
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We collaborate with leading technology platforms to deliver cutting-edge 
            AI automation, cloud solutions, RPA, and software development services
          </p>
        </div>

        <div className="relative mb-20">
          <div
            className={`flex ${
              isReducedMotion
                ? "flex-wrap justify-center gap-8"
                : "animate-scroll"
            }`}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className={`${isReducedMotion ? "w-64" : "flex-shrink-0 px-8"}`}
                style={!isReducedMotion ? { width: "300px" } : {}}
              >
                <div className="transition-all duration-300 hover:scale-105 p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-white/50 flex flex-col items-center justify-center h-48 w-full relative overflow-hidden group">
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Animated border on hover */}
                  {!isReducedMotion && (
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 animate-pulse"></div>
                      <div className="absolute inset-[2px] rounded-2xl bg-white/80 backdrop-blur-sm"></div>
                    </div>
                  )}

                  <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="mb-5 flex items-center justify-center h-12">
                      {partner.logo}
                    </div>
                    <p
                      className={`text-lg font-semibold ${partner.color} mt-2 group-hover:translate-y-1 transition-transform duration-300 bg-white/80 px-3 py-1 rounded-lg backdrop-blur-sm`}
                    >
                      {partner.name}
                    </p>
                  </div>

                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient fades for smooth edges (only when scrolling) */}
          {!isReducedMotion && (
            <>
              {/* <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-blue-50 to-transparent z-10"></div> */}
              {/* <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-purple-50 to-transparent z-10"></div> */}
            </>
          )}
        </div>

        <div className="text-center relative">
          <Link
            to="/contact"
            className="relative px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden"
          >
            <span className="relative z-10">Partner With Us</span>

            {/* Button hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-700 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

            {/* Simplified shine effect */}
            {!isReducedMotion && (
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
            )}
          </Link>

          <p className="mt-6 text-gray-500 text-lg">
            Let's build innovative AI and automation solutions together
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-300px * ${partners.length}));
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }
        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 200%;
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
          display: flex;
          width: calc(300px * ${partners.length * 2});
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll,
          .animate-float,
          .animate-border-rotate,
          .animate-shine {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;