import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = () => {
      try {
        const userData = localStorage.getItem("user");

        if (userData) {
          setUser(JSON.parse(userData));
        } else {
          const dummyUser = {
            id: 1,
            name: "Deepak Kumar",
            email: "deepakmzn118@gmail.com",
            phone: "",
            hiringNeeds: "",
            timezone: "",
            skills: [
              "React",
              "JavaScript",
              "Node.js",
              "UI/UX Design",
              "Tailwind CSS",
            ],
            bio: "Full-stack developer passionate about creating beautiful and functional web applications.",
            joinDate: "2024-01-15",
            location: "India",
            availability: "Available for new projects",
            socialLinks: {
              github: "deepakmzn",
              linkedin: "deepak-kumar",
              twitter: "deepakmzn",
            },
            stats: {
              projects: 24,
              meetings: 12,
              connections: 89,
            },
          };

          setUser(dummyUser);
          localStorage.setItem("user", JSON.stringify(dummyUser));
        }
      } catch (err) {
        setError("Failed to load profile data.");
        console.error("Profile error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
          <p className="text-white text-lg">Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-md w-full bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20">
          <div className="text-red-300 text-center font-medium text-lg">
            {error}
          </div>
          <button
            onClick={() => navigate("/login")}
            className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8 px-4 sm:px-6 lg:px-8">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-30">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Profile Header Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden mb-8">
          {/* Header Background */}
          <div className="h-32 bg-gradient-to-r from-purple-600 to-pink-600 relative">
            <div className="absolute -bottom-16 left-8">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl border-4 border-white/20 shadow-2xl flex items-center justify-center text-4xl font-bold text-white">
                  {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-white/20"></div>
              </div>
            </div>
          </div>

          {/* Header Content */}
          <div className="pt-20 px-8 pb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-white mb-2">
                  {user.name || "Not provided"}
                </h1>
                <p className="text-purple-200 text-lg mb-1">{user.email}</p>
                <p className="text-purple-200 mb-4">
                  {user.phone || "No phone number"}
                </p>

                {/* Stats */}
                <div className="flex space-x-6 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">
                      {user.stats?.projects || 0}
                    </div>
                    <div className="text-purple-200 text-sm">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">
                      {user.stats?.meetings || 0}
                    </div>
                    <div className="text-purple-200 text-sm">Meetings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">
                      {user.stats?.connections || 0}
                    </div>
                    <div className="text-purple-200 text-sm">Connections</div>
                  </div>
                </div>

                {/* Bio */}
                {user.bio && (
                  <p className="text-purple-100 text-lg leading-relaxed max-w-2xl">
                    {user.bio}
                  </p>
                )}
              </div>

              <div className="flex space-x-4 mt-4 lg:mt-0">
                <button
                  onClick={() => navigate("/")}
                  className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-xl border border-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  Back to Home
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-500/20 hover:bg-red-500/30 text-red-200 font-medium py-3 px-6 rounded-xl border border-red-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Basic Info & Skills */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Information Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <svg
                  className="w-6 h-6 mr-3 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Basic Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-purple-300 text-sm font-medium">
                      Full Name
                    </label>
                    <p className="text-white text-lg font-semibold">
                      {user.name || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <label className="text-purple-300 text-sm font-medium">
                      Email Address
                    </label>
                    <p className="text-white text-lg font-semibold">
                      {user.email}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-purple-300 text-sm font-medium">
                      Phone Number
                    </label>
                    <p className="text-white text-lg font-semibold">
                      {user.phone || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <label className="text-purple-300 text-sm font-medium">
                      Location
                    </label>
                    <p className="text-white text-lg font-semibold">
                      {user.location || "Not specified"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Card */}
            {user.skills && user.skills.length > 0 && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-6">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Skills & Expertise
                </h2>
                <div className="flex flex-wrap gap-3">
                  {user.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 px-4 py-2 rounded-full border border-purple-500/30 text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-purple-400/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Hiring Preferences & Additional Info */}
          <div className="space-y-8">
            {/* Hiring Preferences Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <svg
                  className="w-6 h-6 mr-3 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                  />
                </svg>
                Hiring Preferences
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="text-purple-300 text-sm font-medium">
                    Hiring Needs
                  </label>
                  <p className="text-white text-lg font-semibold">
                    {user.hiringNeeds || "Not specified"}
                  </p>
                </div>
                <div>
                  <label className="text-purple-300 text-sm font-medium">
                    Timezone
                  </label>
                  <p className="text-white text-lg font-semibold">
                    {user.timezone || "Not specified"}
                  </p>
                </div>
                <div>
                  <label className="text-purple-300 text-sm font-medium">
                    Availability
                  </label>
                  <p className="text-green-400 text-lg font-semibold">
                    {user.availability || "Not specified"}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            {user.socialLinks && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-6">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                  Connect With Me
                </h2>
                <div className="space-y-3">
                  {user.socialLinks.github && (
                    <a
                      href={`https://github.com/${user.socialLinks.github}`}
                      className="flex items-center space-x-3 text-purple-200 hover:text-white transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>GitHub</span>
                    </a>
                  )}
                  {user.socialLinks.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${user.socialLinks.linkedin}`}
                      className="flex items-center space-x-3 text-purple-200 hover:text-white transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Edit Profile Button */}
        <div className="flex justify-center mt-8">
          <button
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-3xl"
            onClick={() => alert("Edit profile functionality would go here")}
          >
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              <span>Edit Profile</span>
            </div>
          </button>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Profile;
