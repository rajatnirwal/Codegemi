import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Service data with SEO-friendly slugs - Using same icons as ServicesDropdown
  const services = [
    {
      id: 1,
      title: "Software Development",
      slug: "software-development",
      description:
        "Software development empowers innovation, strengthens digital foundations, and uses AI technology to accelerate advanced solutions that are intelligent, future-ready, and built to transform industries.",
      img: assets.SoftwareDevelopments_HOMEPAGEICON,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      id: 2,
      title: "Application Development",
      slug: "application-development",
      description:
        "Application software drives innovation, strengthens digital foundations, and leverages AI to deliver intelligent, future-ready solutions that transform industries.",
      img: assets.ApplicationDevelopments_HOMEPAGEICON,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      id: 3,
      title: "RPA Workflow Automation",
      slug: "rpa-workflow-automation",
      description:
        "RPA Workflow Automation streamlines repetitive business processes, enhances efficiency, and reduces operational costs through intelligent automation.",
      img: assets.RPAICONServicePage,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      id: 4,
      title: "Web Development",
      slug: "web-development",
      description:
        "Web development partnerships build strong foundations, foster innovation, and deliver intelligent, transformative digital solutions.",
      img: assets.WebDevelopments_HOMEPAGEICON,
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      id: 5,
      title: "Graphic Design",
      slug: "graphic-design",
      description:
        "Graphic Design brings your brand to life through visual storytelling, creative concepts, and innovative designs that engage audiences.",
      img: "https://cdn-icons-png.flaticon.com/512/1185/1185316.png",
      color: "text-pink-600",
      bgColor: "bg-pink-100",
    },
    {
      id: 6,
      title: "IT Management",
      slug: "it-management",
      description:
        "IT Management services optimize your technology infrastructure, enhance productivity, and support business growth through strategic IT solutions.",
      img: assets.ITConsultingIcon,
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
    },
    {
      id: 7,
      title: "Digital Marketing",
      slug: "digital-marketing",
      description:
        "Digital Marketing accelerates your business growth by leveraging online channels, SEO strategies, and targeted campaigns.",
      img: "https://cdn-icons-png.flaticon.com/512/7978/7978338.png",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      id: 8,
      title: "Data Analysis",
      slug: "data-analysis",
      description:
        "Data Analysis transforms raw data into actionable insights, enabling informed decisions and business intelligence.",
      img: assets.DataAnalyticsIcon,
      color: "text-teal-600",
      bgColor: "bg-teal-100",
    },
    {
      id: 9,
      title: "AI Solutions",
      slug: "ai-solutions",
      description:
        "AI Solutions help organizations automate processes, improve decision-making, and unlock innovative opportunities with artificial intelligence.",
      img: "https://cdn-icons-png.freepik.com/256/12635/12635995.png?semt=ais_white_label",
      color: "text-gray-600",
      bgColor: "bg-gray-100",
    },
    {
      id: 10,
      title: "Data Science",
      slug: "data-science",
      description:
        "Data Science applies statistical methods, machine learning, and predictive analytics to extract valuable insights from data.",
      img: "https://static.thenounproject.com/png/2198932-200.png",
      color: "text-blue-400",
      bgColor: "bg-blue-50",
    },
    {
      id: 11,
      title: "Robotics",
      slug: "robotics",
      description:
        "Robotics delivers intelligent automated solutions, enhancing operational efficiency, precision, and innovation across industries.",
      img: "https://cdn-icons-png.flaticon.com/512/6134/6134346.png",
      color: "text-red-400",
      bgColor: "bg-red-50",
    },
    {
      id: 12,
      title: "Drone Technologies",
      slug: "drone-technologies",
      description:
        "Drone Technologies revolutionize industries with aerial data, automation, and innovative applications for surveying, inspection, and delivery.",
      img: "https://cdn-icons-png.flaticon.com/512/588/588234.png",
      color: "text-green-400",
      bgColor: "bg-green-50",
    },
  ];

  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-indigo-600 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            <span className="text-indigo-600 font-medium">Our Services</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-indigo-600 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tailored IT Solutions for Your Business Needs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide cutting-edge technology services to help your business
            thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleServices.map((service, index) => (
            <div
              key={service.slug}
              className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-700 hover:shadow-xl hover:-translate-y-2 group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 rounded-lg ${service.bgColor} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>

              {/* ✅ Updated Link */}
              <Link
                to={`/services/${service.slug}`}
                className="text-indigo-600 font-medium hover:text-indigo-700 inline-flex items-center"
              >
                Read more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
          >
            {showAll ? "Show Less" : "View All Services"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ml-2 transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

