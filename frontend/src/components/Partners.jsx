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

  // Partners data with actual company logo images
  const partners = [
    {
      name: "OpenAI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1280px-OpenAI_Logo.svg.png",
      color: "text-gray-900",
    },
    {
      name: "Microsoft Azure",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
      color: "text-blue-600",
    },
    {
      name: "UiPath",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/UiPath_logo_2021.svg/1280px-UiPath_logo_2021.svg.png",
      color: "text-red-600",
    },
    {
      name: "Google Cloud",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/1280px-Google_Cloud_logo.svg.png",
      color: "text-blue-500",
    },
    {
      name: "AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png",
      color: "text-orange-500",
    },
    {
      name: "Figma",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/800px-Figma-logo.svg.png",
      color: "text-purple-600",
    },
    {
      name: "NVIDIA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/1280px-Nvidia_logo.svg.png",
      color: "text-green-600",
    },
    {
      name: "IBM Cloud",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1280px-IBM_logo.svg.png",
      color: "text-blue-700",
    },
    {
      name: "Salesforce",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png",
      color: "text-blue-400",
    },
    {
      name: "Oracle",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/1280px-Oracle_logo.svg.png",
      color: "text-red-500",
    },
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
            We collaborate with leading technology platforms to deliver
            cutting-edge AI automation, cloud solutions, RPA, and software
            development services
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

                  <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300 w-full flex flex-col items-center">
                    <div className="mb-5 flex items-center justify-center h-16 w-full">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="h-12 object-contain max-w-full filter brightness-0 opacity-80 group-hover:opacity-100 group-hover:brightness-100 transition-all duration-300"
                        onError={(e) => {
                          // Fallback if image fails to load
                          e.target.style.display = "none";
                          const fallback = document.createElement("div");
                          fallback.className =
                            "text-lg font-semibold text-gray-700";
                          fallback.textContent = partner.name;
                          e.target.parentNode.appendChild(fallback);
                        }}
                      />
                    </div>
                    <p
                      className={`text-lg font-semibold ${partner.color} mt-2 group-hover:translate-y-1 transition-transform duration-300 bg-white/80 px-3 py-1 rounded-lg backdrop-blur-sm text-center`}
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
