import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

// ✅ Services data matching your Services page
const services = [
  {
    id: 1,
    title: "Software Development",
    slug: "software-development",
    img: assets.SoftwareDevelopments_HOMEPAGEICON,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    id: 2,
    title: "Application Development",
    slug: "application-development",
    img: assets.ApplicationDevelopments_HOMEPAGEICON,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    id: 3,
    title: "RPA Workflow Automation",
    slug: "rpa-workflow-automation",
    img: assets.RPAICONServicePage,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    id: 4,
    title: "Web Development",
    slug: "web-development",
    img: assets.WebDevelopments_HOMEPAGEICON,
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    id: 5,
    title: "Graphic Design",
    slug: "graphic-design",
    img: "https://cdn-icons-png.flaticon.com/512/1185/1185316.png",
    color: "text-pink-600",
    bgColor: "bg-pink-100",
  },
  {
    id: 6,
    title: "IT Management",
    slug: "it-management",
    img: assets.ITConsultingIcon,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
  },
  {
    id: 7,
    title: "Digital Marketing",
    slug: "digital-marketing",
    img: "https://cdn-icons-png.flaticon.com/512/7978/7978338.png",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
  },
  {
    id: 8,
    title: "Data Analysis",
    slug: "data-analysis",
    img: assets.DataAnalyticsIcon,
    color: "text-teal-600",
    bgColor: "bg-teal-100",
  },
  {
    id: 9,
    title: "AI Solutions",
    slug: "ai-solutions",
    img: "https://cdn-icons-png.freepik.com/256/12635/12635995.png?semt=ais_white_label",
    color: "text-gray-600",
    bgColor: "bg-gray-100",
  },
  {
    id: 10,
    title: "Data Science",
    slug: "data-science",
    img: "https://static.thenounproject.com/png/2198932-200.png",
    color: "text-blue-400",
    bgColor: "bg-blue-50",
  },
  {
    id: 11,
    title: "Robotics",
    slug: "robotics",
    img: "https://cdn-icons-png.flaticon.com/512/6134/6134346.png",
    color: "text-red-400",
    bgColor: "bg-red-50",
  },
  {
    id: 12,
    title: "Drone Technologies",
    slug: "drone-technologies",
    img: "https://cdn-icons-png.flaticon.com/512/588/588234.png",
    color: "text-green-400",
    bgColor: "bg-green-50",
  },
];

// Service Icon Component using the same images from Services page
const ServiceIcon = ({ service, className = "w-6 h-6" }) => {
  return (
    <div
      className={`${service.bgColor} rounded-lg p-1 flex items-center justify-center`}
    >
      <img
        src={service.img}
        alt={service.title}
        className={`${className} object-contain ${service.color}`}
      />
    </div>
  );
};

export default function ServicesDropdown() {
  return (
    <div className="absolute left-1/2 top-full z-50 w-[900px] -translate-x-1/2 rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl border border-white/20 p-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
          Our Services
        </h2>
        <p className="text-gray-500 mt-2">
          Transform your business with our cutting-edge solutions
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {services.map((service) => (
          <Link
            key={service.id}
            to={`/services/${service.slug}`}
            className="group relative flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-white to-gray-50/80 hover:from-indigo-50 hover:to-blue-50 border border-gray-100 hover:border-indigo-200 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center group-hover:bg-white/90 transition-all duration-300 shadow-md group-hover:shadow-lg border border-gray-100">
              <ServiceIcon service={service} className="w-8 h-8" />
            </div>
            <div className="relative z-10 flex-1 min-w-0">
              <span className="text-gray-800 font-semibold group-hover:text-indigo-700 transition-colors duration-300 block truncate">
                {service.title}
              </span>
              <div className="flex items-center mt-1">
                <span className="text-xs text-gray-500 group-hover:text-indigo-500 transition-colors duration-300">
                  Explore service
                </span>
                <svg
                  className="w-3 h-3 ml-1 text-gray-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Featured Service Banner */}
      <div className="relative rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 p-8 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          />
        </div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
                <span className="text-sm font-medium text-indigo-100">
                  Featured Service
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">
                AI-Powered Transformation
              </h3>
              <p className="text-indigo-100 text-lg leading-relaxed max-w-2xl">
                Revolutionize your business with our cutting-edge AI Solutions.
                Leverage intelligent automation to drive efficiency and
                innovation.
              </p>
            </div>
            <Link
              to="/services/ai-solutions"
              className="group relative flex-shrink-0 px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl ml-8 flex items-center"
            >
              <span className="relative z-10">Get Started</span>
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent rounded-full" />
    </div>
  );
}
