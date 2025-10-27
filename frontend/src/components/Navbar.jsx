// components/Navbar.js
import React, { useState, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
//import ServicesDropdown from "./ServicesDropdown";
import CodeGemiLogoGray from "../assets/img/CodeGemiLogoGray.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedMobileItems, setExpandedMobileItems] = useState(new Set());
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const menuRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Check login status
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token) {
      setIsLoggedIn(true);
      if (user) setUserData(JSON.parse(user));
    } else {
      setIsLoggedIn(false);
      setUserData(null);
    }
  }, [location]);

  // Set active nav item
  useEffect(() => {
    const path = location.pathname.substring(1) || "home";
    setActiveItem(path);
  }, [location]);

  // Scroll & click outside handlers
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserData(null);
    navigate("/");
    setMobileMenuOpen(false);
  };

  const handleDropdownEnter = (dropdown) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 300);
  };

  const toggleMobileDropdown = (itemId) => {
    const newExpanded = new Set(expandedMobileItems);
    if (newExpanded.has(itemId)) newExpanded.delete(itemId);
    else newExpanded.add(itemId);
    setExpandedMobileItems(newExpanded);
  };

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

  return (
    <nav
      ref={menuRef}
      className={`fixed w-full z-50 py-3 px-6 lg:px-12 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center z-60">
          <Link to="/" onClick={() => setActiveItem("home")}>
            <img
<<<<<<< HEAD
              src={CodeGemiLogoGray}
=======
              src={assets.CodeGemiLogo}
>>>>>>> origin/main
              alt="CodeGemi Logo"
              // className={`h-16 transition-all duration-500 ${
              //   scrolled ? "h-14" : "h-16"
              // }`}
              className={`h-20 transition-all duration-500 ${
                scrolled ? "h-20" : "h-24"
              }`}
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => item.dropdown && handleDropdownEnter(item.id)}
              onMouseLeave={handleDropdownLeave}
            >
              <Link
                to={item.path}
                className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
                onClick={() => setActiveItem(item.id)}
              >
                <span
                  className={`transition-colors ${
                    activeItem === item.id
                      ? "text-indigo-600"
                      : "group-hover:text-indigo-500"
                  }`}
                >
                  {item.label}
                </span>
                {item.dropdown && (
                  <svg
                    className="w-4 h-4 ml-1 inline-block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                )}
              </Link>

              {item.id === "services" && activeDropdown === item.id && (
                <ServicesDropdown />
              )}
            </div>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          <Link
            to="/contact"
            className="hidden md:flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg transition-all duration-300 hover:from-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg"
          >
            Get a Quote
          </Link>

          {/* User Buttons */}
          {isLoggedIn ? (
            <button
              className={`p-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => navigate("/profile")}
            >
              <svg
                className="w-9 h-9 border rounded-full p-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </button>
          ) : (
            <div className="hidden md:flex space-x-2">
              <Link
                to="/login"
                className={`px-5 py-2.5 font-medium rounded-lg transition-all duration-300 ${
                  scrolled
                    ? "bg-indigo-50 text-indigo-600 hover:bg-indigo-100 shadow-sm"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className={`px-5 py-2.5 font-medium rounded-lg transition-all duration-300 ${
                  scrolled
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              <span
                className={`block absolute w-5 h-0.5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1"
                }`}
              ></span>
              <span
                className={`block absolute w-5 h-0.5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block absolute w-5 h-0.5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-1"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-xl rounded-b-lg overflow-hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="py-4 px-6">
          {navItems.map((item) => (
            <div key={item.id}>
              <div className="flex justify-between items-center">
                <Link
                  to={item.path}
                  className={`flex-1 py-3 px-4 rounded-lg transition-all duration-300 hover:bg-indigo-50 ${
                    activeItem === item.id
                      ? "text-indigo-600 font-semibold bg-indigo-50"
                      : "text-gray-700"
                  }`}
                  onClick={() => {
                    setActiveItem(item.id);
                    setMobileMenuOpen(false);
                  }}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <button
                    className="p-3 text-gray-500 hover:text-indigo-600 focus:outline-none focus:text-indigo-600"
                    onClick={() => toggleMobileDropdown(item.id)}
                    aria-expanded={expandedMobileItems.has(item.id)}
                    tabIndex={mobileMenuOpen ? 0 : -1}
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        expandedMobileItems.has(item.id) ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                )}
              </div>

              {/* Mobile Dropdown */}
              {item.dropdown && expandedMobileItems.has(item.id) && (
                <div className="pl-6 mt-1">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.id}
                      to={dropdownItem.path}
                      className="block py-2 px-4 text-gray-600 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                      tabIndex={mobileMenuOpen ? 0 : -1}
                    >
                      {dropdownItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Login/Signup */}
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col space-y-2">
            {isLoggedIn ? (
              <>
                <Link
                  to="/profile"
                  className="w-full py-3 text-center text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full py-3 text-center text-red-600 font-medium rounded-lg hover:bg-red-50 transition-colors duration-300"
                  tabIndex={mobileMenuOpen ? 0 : -1}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="w-full py-3 text-center text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="w-full py-3 text-center text-white bg-indigo-600 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                >
                  Sign Up
                </Link>
              </>
            )}
            <Link
              to="/contact"
              className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg transition-all duration-300 text-center"
              onClick={() => setMobileMenuOpen(false)}
              tabIndex={mobileMenuOpen ? 0 : -1}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
