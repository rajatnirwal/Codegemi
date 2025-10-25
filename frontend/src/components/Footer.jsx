import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const recentPosts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      date: "15th April, 2024",
      title: "Top 5 Most Famous Technology Trend In 2024",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      date: "20th June, 2024",
      title: "The Surfing Man Will Blow Your Mind",
    },
  ];

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "blog", label: "Blog", path: "/blog" },
    {
      id: "services",
      label: "Services",
      path: "/services",
      dropdown: [
        {
          id: "services-overview",
          label: "Services Overview",
          path: "/services",
        },
        {
          id: "Software-Development",
          label: "Software Development",
          path: "/services/1",
        },
        {
          id: "Application-development",
          label: "Application Development",
          path: "/services/2",
        },
        {
          id: "RPA-Workflow-Automation",
          label: "RPA Workflow Automation",
          path: "/services/3",
        },
        {
          id: "Web-Development",
          label: "Web Development",
          path: "/services/4",
        },
        { id: "Graphic-Design", label: "Graphic Design", path: "/services/5" },
        { id: "IT-Management", label: "IT Management", path: "/services/6" },
        {
          id: "Digital-Marketing",
          label: "Digital Marketing",
          path: "/services/7",
        },
        { id: "Data-Analysis", label: "Data Analysis", path: "/services/8" },
        { id: "AI-Solutions", label: "AI Solutions", path: "/services/9" },
        { id: "Data-Science", label: "Data Science", path: "/services/10" },
        { id: "Robotics", label: "Robotics", path: "/services/11" },
        {
          id: "Drone-Technologies",
          label: "Drone Technologies",
          path: "/services/12",
        },
      ],
    },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  // Professional Social Media Icons Component
  const SocialIcons = () => (
    <div className="flex space-x-3">
      {/* Facebook */}
      <a
        href="#"
        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#1877F2] transition-all duration-300 transform hover:scale-110"
        aria-label="Visit our Facebook page"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg 
          className="w-5 h-5" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </a>

      {/* Twitter */}
      <a
        href="https://x.com/Code_Gemi"
        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#1DA1F2] transition-all duration-300 transform hover:scale-110"
        aria-label="Follow us on Twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg 
          className="w-5 h-5" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      </a>

      {/* YouTube */}
      <a
        href="https://www.youtube.com/@CodeGemi"
        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#FF0000] transition-all duration-300 transform hover:scale-110"
        aria-label="Subscribe to our YouTube channel"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg 
          className="w-5 h-5" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/codegemi_technologies/"
        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-[#405DE6] hover:via-[#E1306C] hover:to-[#FFDC80] transition-all duration-300 transform hover:scale-110"
        aria-label="Follow us on Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg 
          className="w-5 h-5" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </a>

      {/* LinkedIn (Additional Professional Platform) */}
      <a
        href="https://www.linkedin.com/in/codegemi-technologies-304444390/"
        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#0077B5] transition-all duration-300 transform hover:scale-110"
        aria-label="Connect with us on LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg 
          className="w-5 h-5" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
    </div>
  );

  return (
    <footer className="bg-gray-900 text-gray-400 pt-20 pb-8">
      {/* Contact Info Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Address */}
          <div
            className={`flex items-start ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } transition-all duration-700`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 1.6665C11.036 1.6665 7 5.7385 7 10.7612C7 12.4625 7.74933 14.5732 8.84 16.6785C11.2413 21.3145 15.2413 25.9838 15.2413 25.9838C15.3352 26.0932 15.4516 26.1809 15.5826 26.2411C15.7135 26.3012 15.8559 26.3324 16 26.3324C16.1441 26.3324 16.2865 26.3012 16.4174 26.2411C16.5484 26.1809 16.6648 26.0932 16.7587 25.9838C16.7587 25.9838 20.7587 21.3145 23.16 16.6785C24.2507 14.5732 25 12.4625 25 10.7612C25 5.7385 20.964 1.6665 16 1.6665ZM16 6.99984C15.0447 7.0256 14.1371 7.42322 13.4705 8.10804C12.8039 8.79286 12.4309 9.71081 12.4309 10.6665C12.4309 11.6222 12.8039 12.5401 13.4705 13.225C14.1371 13.9098 15.0447 14.3074 16 14.3332C16.9553 14.3074 17.8629 13.9098 18.5295 13.225C19.1961 12.5401 19.5691 11.6222 19.5691 10.6665C19.5691 9.71081 19.1961 8.79286 18.5295 8.10804C17.8629 7.42322 16.9553 7.0256 16 6.99984Z"
                  fill="#3C72FC"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.3788 23.1693C23.4628 23.4946 24.3562 23.8973 24.9735 24.3693C25.3735 24.6733 25.6668 24.9706 25.6668 25.3333C25.6668 25.5466 25.5455 25.74 25.3748 25.9333C25.0922 26.252 24.6722 26.5386 24.1522 26.8053C22.3148 27.7453 19.3442 28.3333 16.0002 28.3333C12.6562 28.3333 9.6855 27.7453 7.84816 26.8053C7.32816 26.5386 6.90816 26.252 6.6255 25.9333C6.45483 25.74 6.3335 25.5466 6.3335 25.3333C6.3335 24.9706 6.62683 24.6733 7.02683 24.3693C7.64416 23.8973 8.5375 23.4946 9.6215 23.1693C9.87557 23.0929 10.0889 22.9187 10.2146 22.6851C10.3402 22.4514 10.3679 22.1774 10.2915 21.9233C10.2151 21.6692 10.0409 21.4559 9.80726 21.3302C9.57359 21.2046 9.29957 21.1769 9.0455 21.2533C7.39483 21.7506 6.11216 22.432 5.3415 23.1853C4.66416 23.8453 4.3335 24.584 4.3335 25.3333C4.3335 26.2693 4.86283 27.2026 5.93883 27.9813C7.82683 29.3466 11.6188 30.3333 16.0002 30.3333C20.3815 30.3333 24.1735 29.3466 26.0615 27.9813C27.1375 27.2026 27.6668 26.2693 27.6668 25.3333C27.6668 24.584 27.3362 23.8453 26.6588 23.1853C25.8882 22.432 24.6055 21.7506 22.9548 21.2533C22.829 21.2155 22.697 21.2028 22.5663 21.216C22.4356 21.2292 22.3088 21.268 22.1931 21.3302C22.0774 21.3925 21.9751 21.4769 21.892 21.5786C21.8089 21.6804 21.7467 21.7975 21.7088 21.9233C21.671 22.0491 21.6583 22.1811 21.6715 22.3118C21.6847 22.4425 21.7236 22.5694 21.7858 22.6851C21.848 22.8008 21.9324 22.9031 22.0341 22.9862C22.1359 23.0692 22.253 23.1315 22.3788 23.1693Z"
                  fill="#3C72FC"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">Address</p>
              <h3 className="text-white text-lg font-medium">
                Lane no.7, chipyana Buzurg, Gaziabad, Uttar Pradesh, india,
                201009
              </h3>
            </div>
          </div>

          {/* Email */}
          <div
            className={`flex items-start ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } transition-all duration-700`}
            style={{ transitionDelay: "0.5s" }}
          >
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6498 10.8272C12.8023 10.914 12.976 10.9569 13.1514 10.9509C13.3312 10.9344 13.5053 10.8798 13.6623 10.7906L24.9217 4.22062C24.677 3.79416 24.3245 3.43955 23.8994 3.19239C23.4744 2.94523 22.9918 2.81422 22.5001 2.8125H3.75014C3.2583 2.81406 2.77554 2.94499 2.35032 3.19216C1.9251 3.43932 1.5724 3.79402 1.32764 4.22062L12.6498 10.8272Z"
                  fill="#3C72FC"
                />
                <path
                  d="M25.3125 6.15918V12.6748C24.4104 12.3501 23.4587 12.1852 22.5 12.1873C20.2633 12.1908 18.1192 13.0808 16.5376 14.6624C14.956 16.244 14.066 18.3881 14.0625 20.6248C14.0623 20.9382 14.0811 21.2512 14.1188 21.5623H3.75C3.00476 21.5601 2.29069 21.263 1.76372 20.7361C1.23676 20.2091 0.939726 19.495 0.9375 18.7498V6.15918L11.7094 12.4498C12.1434 12.6872 12.6303 12.8116 13.125 12.8116C13.6197 12.8116 14.1066 12.6872 14.5406 12.4498L25.3125 6.15918Z"
                  fill="#3C72FC"
                />
                <path
                  d="M22.5 14.0625C20.7595 14.0625 19.0903 14.7539 17.8596 15.9846C16.6289 17.2153 15.9375 18.8845 15.9375 20.625C15.9375 22.3655 16.6289 24.0347 17.8596 25.2654C19.0903 26.4961 20.7595 27.1875 22.5 27.1875C22.7486 27.1875 22.9871 27.0887 23.1629 26.9129C23.3387 26.7371 23.4375 26.4986 23.4375 26.25C23.4375 26.0014 23.3387 25.7629 23.1629 25.5871C22.9871 25.4113 22.7486 25.3125 22.5 25.3125C21.5729 25.3125 20.6666 25.0376 19.8958 24.5225C19.1249 24.0074 18.5241 23.2754 18.1693 22.4188C17.8145 21.5623 17.7217 20.6198 17.9026 19.7105C18.0834 18.8012 18.5299 17.966 19.1854 17.3104C19.841 16.6549 20.6762 16.2084 21.5855 16.0276C22.4948 15.8467 23.4373 15.9395 24.2938 16.2943C25.1504 16.6491 25.8824 17.2499 26.3975 18.0208C26.9126 18.7916 27.1875 19.6979 27.1875 20.625V21.5625C27.1875 21.8111 27.0887 22.0496 26.9129 22.2254C26.7371 22.4012 26.4986 22.5 26.25 22.5C26.0014 22.5 25.7629 22.4012 25.5871 22.2254C25.4113 22.0496 25.3125 21.8111 25.3125 21.5625V20.625C25.3125 20.0687 25.1476 19.525 24.8385 19.0625C24.5295 18.5999 24.0902 18.2395 23.5763 18.0266C23.0624 17.8137 22.4969 17.758 21.9513 17.8665C21.4057 17.9751 20.9046 18.2429 20.5113 18.6363C20.1179 19.0296 19.8501 19.5307 19.7415 20.0763C19.633 20.6219 19.6887 21.1874 19.9016 21.7013C20.1145 22.2152 20.4749 22.6545 20.9375 22.9635C21.4 23.2726 21.9437 23.4375 22.5 23.4375C22.9843 23.4344 23.4594 23.3048 23.8781 23.0616C24.2022 23.578 24.6856 23.9748 25.2552 24.1921C25.8248 24.4094 26.4496 24.4353 27.0353 24.266C27.621 24.0967 28.1356 23.7412 28.5013 23.2535C28.867 22.7657 29.064 22.1721 29.0625 21.5625V20.625C29.0605 18.8851 28.3685 17.2171 27.1382 15.9868C25.9079 14.7565 24.2399 14.0645 22.5 14.0625ZM22.5 21.5625C22.3146 21.5625 22.1333 21.5075 21.9792 21.4045C21.825 21.3015 21.7048 21.1551 21.6339 20.9838C21.5629 20.8125 21.5443 20.624 21.5805 20.4421C21.6167 20.2602 21.706 20.0932 21.8371 19.9621C21.9682 19.831 22.1352 19.7417 22.3171 19.7055C22.499 19.6693 22.6875 19.6879 22.8588 19.7589C23.0301 19.8298 23.1765 19.95 23.2795 20.1042C23.3825 20.2583 23.4375 20.4396 23.4375 20.625C23.4375 20.8736 23.3387 21.1121 23.1629 21.2879C22.9871 21.4637 22.7486 21.5625 22.5 21.5625Z"
                  fill="#3C72FC"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">Send Email</p>
              <h3 className="text-white text-lg font-medium">
                <a
                  href="mailto:codegemi@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  support@codegemi.com
                </a>
              </h3>
            </div>
          </div>

          {/* Phone */}
          <div
            className={`flex items-start ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } transition-all duration-700`}
            style={{ transitionDelay: "0.7s" }}
          >
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.7891 1.81641H16.7578C13.3658 1.81641 10.6055 4.5767 10.6055 7.96875C10.6055 11.063 12.9015 13.631 15.8789 14.0585V16.7578C15.8788 16.9317 15.9303 17.1016 16.0268 17.2462C16.1234 17.3907 16.2607 17.5033 16.4214 17.5697C16.7456 17.705 17.1258 17.6325 17.3793 17.3792L20.6374 14.1211H23.7891C27.1811 14.1211 30 11.3608 30 7.96875C30 4.5767 27.1811 1.81641 23.7891 1.81641ZM16.7578 8.84754C16.2723 8.84754 15.8789 8.45402 15.8789 7.96863C15.8789 7.48324 16.2723 7.08973 16.7578 7.08973C17.2432 7.08973 17.6367 7.48324 17.6367 7.96863C17.6367 8.45402 17.2432 8.84754 16.7578 8.84754ZM20.2734 8.84754C19.7879 8.84754 19.3945 8.45402 19.3945 7.96863C19.3945 7.48324 19.7879 7.08973 20.2734 7.08973C20.7588 7.08973 21.1523 7.48324 21.1523 7.96863C21.1523 8.45402 20.7588 8.84754 20.2734 8.84754ZM23.7891 8.84754C23.3036 8.84754 22.9102 8.45402 22.9102 7.96863C22.9102 7.48324 23.3036 7.08973 23.7891 7.08973C24.2745 7.08973 24.668 7.48324 24.668 7.96863C24.668 8.45402 24.2745 8.84754 23.7891 8.84754Z"
                  fill="#3C72FC"
                />
                <path
                  d="M19.7461 28.1836C21.2 28.1836 22.3828 27.0008 22.3828 25.5469V22.0312C22.3828 21.6527 22.1408 21.3171 21.782 21.1978L16.5209 19.44C16.2634 19.3533 15.9819 19.3928 15.7553 19.5421L13.5186 21.033C11.1496 19.9035 8.33871 17.0925 7.20914 14.7236L8.7 12.4868C8.77415 12.3754 8.82189 12.2485 8.83958 12.1158C8.85728 11.9831 8.84447 11.8482 8.80213 11.7212L7.04432 6.46014C6.98611 6.28516 6.87428 6.13295 6.72469 6.02512C6.5751 5.91728 6.39534 5.85929 6.21094 5.85938H2.63672C1.18277 5.85938 0 7.02979 0 8.48373C0 18.61 9.6198 28.1836 19.7461 28.1836Z"
                  fill="#3C72FC"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">Call Emergency</p>
              <h3 className="text-white text-lg font-medium">
                <a
                  href="tel:+918840531793"
                  className="hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 8840531793
                </a>
              </h3>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div
            className={`${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } transition-all duration-700`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="mb-6">
              <Link
                to="/"
                className="text-2xl font-bold text-white flex items-center"
              >
                <span className="bg-blue-600 text-white p-2 rounded mr-2">
                  CG
                </span>
                CodeGemi
              </Link>
            </div>
            <p className="mb-6 text-gray-400">
              CodeGemi IT is where technology meets precision - delivering
              ultricies aliquam volutpat and solutions that blend modern agility
              with laoreet-driven excellence.
            </p>
            <SocialIcons />
          </div>

          {/* Quick Links */}
          <div
            className={`${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } transition-all duration-700`}
            style={{ transitionDelay: "0.5s" }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div
            className={`${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } transition-all duration-700`}
            style={{ transitionDelay: "0.7s" }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">
              Recent Posts
            </h3>
            <div className="space-y-6">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex items-start group">
                  <div className="w-16 h-16 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                      {post.date}
                    </div>
                    <h4 className="text-white text-sm font-medium group-hover:text-blue-400 transition-colors">
                      <Link to="/blog">{post.title}</Link>
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div
            className={`${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } transition-all duration-700`}
            style={{ transitionDelay: "0.9s" }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <span className="text-white">support@codegemi.com</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <span className="text-white">+91 8840531793</span>
              </div>
            </div>

            <div className="mt-6">
              <div className="relative flex items-center bg-gray-800 rounded-lg overflow-hidden">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-transparent py-3 px-4 text-white focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className={`p-3 ${
                    email && agree
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-gray-700"
                  } text-white transition-colors`}
                  disabled={!email || !agree}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="mt-4 flex items-start">
                <input
                  type="checkbox"
                  id="agreeCheckbox"
                  className="mt-1 mr-2"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
                <label
                  htmlFor="agreeCheckbox"
                  className="text-sm text-gray-400"
                >
                  I agree to the{" "}
                  <Link to="/privacy" className="text-blue-400 hover:underline">
                    Privacy Policy.
                  </Link>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} CodeGemi. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/terms"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Terms & Condition
            </Link>
            <Link
              to="/privacy"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;