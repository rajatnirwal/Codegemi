import { Link } from "react-router-dom";

// ✅ Added slugs for each service
const services = [
  { id: 1, title: "Software Development", slug: "software-development" },
  { id: 2, title: "Application Development", slug: "application-development" },
  { id: 3, title: "RPA Workflow Automation", slug: "rpa-workflow-automation" },
  { id: 4, title: "Web Development", slug: "web-development" },
  { id: 5, title: "Graphic Design", slug: "graphic-design" },
  { id: 6, title: "IT Management", slug: "it-management" },
  { id: 7, title: "Digital Marketing", slug: "digital-marketing" },
  { id: 8, title: "Data Analysis", slug: "data-analysis" },
  { id: 9, title: "AI Solutions", slug: "ai-solutions" },
  { id: 10, title: "Data Science", slug: "data-science" },
  { id: 11, title: "Robotics", slug: "robotics" },
  { id: 12, title: "Drone Technologies", slug: "drone-technologies" },
];

// ✅ Complete Icon Component with all services
const ServiceIcon = ({ serviceId, className = "w-6 h-6" }) => {
  const icons = {
    1: (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          stroke="url(#softwareGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="softwareGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B6B" />
            <stop offset="100%" stopColor="#FF8E53" />
          </linearGradient>
        </defs>
      </svg>
    ),
    2: (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="2"
          stroke="url(#appGrad)"
          strokeWidth="2"
        />
        <path
          d="M8 8h8M8 12h8M8 16h5"
          stroke="url(#appGrad)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="appGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4FACFE" />
            <stop offset="100%" stopColor="#00F2FE" />
          </linearGradient>
        </defs>
      </svg>
    ),
    3: (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h6M7 17h10a2 2 0 002-2V9a2 2 0 00-2-2H7a2 2 0 00-2 2v6a2 2 0 002 2z"
          stroke="url(#rpaGrad)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="rpaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6A11CB" />
            <stop offset="100%" stopColor="#2575FC" />
          </linearGradient>
        </defs>
      </svg>
    ),
    4: (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
          stroke="url(#webGrad)"
          strokeWidth="2"
        />
        <polyline
          points="3.27 6.96 12 12.01 20.73 6.96"
          stroke="url(#webGrad)"
          strokeWidth="2"
        />
        <line
          x1="12"
          y1="22.08"
          x2="12"
          y2="12"
          stroke="url(#webGrad)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient id="webGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#42E695" />
            <stop offset="100%" stopColor="#3BB2B8" />
          </linearGradient>
        </defs>
      </svg>
    ),
    5: (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          stroke="url(#designGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="designGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF9A8B" />
            <stop offset="100%" stopColor="#FF6A88" />
          </linearGradient>
        </defs>
      </svg>
    ),
    6: (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          stroke="url(#itGrad)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="itGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#764ba2" />
          </linearGradient>
        </defs>
      </svg>
    ),
    7: (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          stroke="url(#marketingGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="marketingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F093FB" />
            <stop offset="100%" stopColor="#F5576C" />
          </linearGradient>
        </defs>
      </svg>
    ),
    8: (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          stroke="url(#dataGrad)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient id="dataGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ECDC4" />
            <stop offset="100%" stopColor="#44A08D" />
          </linearGradient>
        </defs>
      </svg>
    ),
    9: (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          stroke="url(#aiGrad)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF5858" />
            <stop offset="100%" stopColor="#F09819" />
          </linearGradient>
        </defs>
      </svg>
    ),
    10: (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          stroke="url(#scienceGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="scienceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#764ba2" />
          </linearGradient>
        </defs>
      </svg>
    ),
    11: (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M7 11a4 4 0 01-4-4V7a4 4 0 014-4h10a4 4 0 014 4v.172a4 4 0 01-1.172 2.828L19 12m-8 4v4m-4 0h8m2-10a2 2 0 11-4 0 2 2 0 014 0z"
          stroke="url(#roboticsGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="roboticsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A8C0FF" />
            <stop offset="100%" stopColor="#3F2B96" />
          </linearGradient>
        </defs>
      </svg>
    ),
    12: (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M3 15a5 5 0 015-5h8a5 5 0 015 5v0a5 5 0 01-5 5H8a5 5 0 01-5-5v0z"
          stroke="url(#droneGrad)"
          strokeWidth="2"
        />
        <path
          d="M12 9V6m0 0l2 2m-2-2l-2 2m8 5l2-2m-2 2l-2-2m2 2v3M6 14l-2-2m2 2l2-2m-2 2v3"
          stroke="url(#droneGrad)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="droneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#11998E" />
            <stop offset="100%" stopColor="#38EF7D" />
          </linearGradient>
        </defs>
      </svg>
    ),
  };

  return (
    icons[serviceId] || (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M13 10V3L4 14h7v7l9-11h-7z"
          stroke="url(#defaultGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="defaultGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#764ba2" />
          </linearGradient>
        </defs>
      </svg>
    )
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
              <ServiceIcon serviceId={service.id} className="w-7 h-7" />
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