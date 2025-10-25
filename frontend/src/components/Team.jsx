import React, { useState, useEffect, useRef } from "react";

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const teamMembers = [
    {
      id: 1,
      name: "Vikul Singhaniya",
      role: "PhD, IIT Bombay",
      department: "leadership",
      expertise: ["Research", "Strategy", "Innovation"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 2,
      name: "Shikha Sharma",
      role: "M.Tech (KIET)",
      department: "engineering",
      expertise: ["Software Development", "System Design"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: 3,
      name: "Deepak Kumar",
      role: "B.Tech (AKTU)",
      department: "engineering",
      expertise: ["Frontend", "UI/UX"],
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 4,
      name: "Rajat Nirwal",
      role: "B.Tech (AKTU)",
      department: "engineering",
      expertise: ["Backend", "Cloud"],
      image: "https://images.unsplash.com/photo-1718209881014-83732ea8376d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      name: "Arun Kumar",
      role: "M.Tech (ABES)",
      department: "research",
      expertise: ["AI Research", "ML Models"],
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=798&q=80",
    },
    {
      id: 6,
      name: "Kajol Kori",
      role: "B.Tech (AKTU)",
      department: "design",
      expertise: ["Product Design", "User Research"],
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: 7,
      name: "Shikul",
      role: "Diploma (Mechanical, 2020)",
      department: "engineering",
      expertise: ["Robotics", "Drone Technologies"],
      image: "https://plus.unsplash.com/premium_photo-1663075992509-b3f0685ac291?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      name: "Shubarata Mohanty",
      role: "M.tech (IIT Patna, 2023), Mathematics and Computing",
      department: "research",
      expertise: ["AI", "ML", "NLP", "Deep Learning"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 9,
      name: "Priya Sharma",
      role: "PhD (Stanford)",
      department: "research",
      expertise: ["Data Science", "Analytics"],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: 10,
      name: "Rahul Verma",
      role: "M.Tech (IIT Delhi)",
      department: "engineering",
      expertise: ["DevOps", "Infrastructure"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    },
  ];

  const departments = [
    { id: "all", name: "All Team", count: teamMembers.length },
    { id: "leadership", name: "Leadership", count: teamMembers.filter(m => m.department === "leadership").length },
    { id: "engineering", name: "Engineering", count: teamMembers.filter(m => m.department === "engineering").length },
    { id: "research", name: "Research", count: teamMembers.filter(m => m.department === "research").length },
    { id: "design", name: "Design", count: teamMembers.filter(m => m.department === "design").length },
  ];

  const filteredMembers = activeFilter === "all" 
    ? teamMembers 
    : teamMembers.filter(member => member.department === activeFilter);

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        if (!isHovered && filteredMembers.length > 4) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredMembers.length);
        }
      }, 3000);
    };

    const stopAutoScroll = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };

    startAutoScroll();

    return () => stopAutoScroll();
  }, [filteredMembers.length, isHovered]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredMembers.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredMembers.length) % filteredMembers.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const visibleMembers = 4;
  const totalSlides = Math.ceil(filteredMembers.length / visibleMembers);
  const currentSlide = Math.floor(currentIndex / visibleMembers);

  return (
    <section className="team-section py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-sm mb-6">
            <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
            MEET OUR TEAM
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Expert</span> Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Dedicated professionals committed to innovation and excellence in every project we undertake.
          </p>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => {
                setActiveFilter(dept.id);
                setCurrentIndex(0);
              }}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeFilter === dept.id
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-200"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-100"
              }`}
            >
              <span>{dept.name}</span>
              <span className={`text-sm px-2 py-1 rounded-full ${
                activeFilter === dept.id ? "bg-white/20" : "bg-gray-100"
              }`}>
                {dept.count}
              </span>
            </button>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-indigo-600 mb-2">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-indigo-600 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-indigo-600 mb-2">100%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>

        {/* Slider Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          {filteredMembers.length > 4 && (
            <>
              <button
                onClick={goToPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-2xl flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-110 border border-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-2xl flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-110 border border-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Slider Track */}
          <div className="slider-container overflow-hidden px-4">
            <div
              ref={sliderRef}
              className="slider-track flex transition-transform duration-700 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / Math.min(visibleMembers, filteredMembers.length))}%)` 
              }}
            >
              {filteredMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="px-3 flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/4 transition-all duration-500"
                >
                  <div className="team-card group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                    {/* Image Container */}
                    <div className="relative overflow-hidden">
                      <div className="aspect-w-3 aspect-h-4">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Department Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                          member.department === 'leadership' ? 'bg-purple-500 text-white' :
                          member.department === 'engineering' ? 'bg-blue-500 text-white' :
                          member.department === 'research' ? 'bg-green-500 text-white' :
                          'bg-pink-500 text-white'
                        }`}>
                          {member.department}
                        </span>
                      </div>
                      
                      {/* Social Icons on Hover */}
                      <div className="absolute top-4 right-4 flex flex-col gap-2 transform translate-x-16 group-hover:translate-x-0 transition-transform duration-500">
                        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                          </svg>
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 text-center relative">
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2 group-hover:text-indigo-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-indigo-600 font-semibold mb-3">{member.role}</p>
                      
                      {/* Expertise Tags */}
                      <div className="flex flex-wrap justify-center gap-1 mb-3">
                        {member.expertise.slice(0, 2).map((skill, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            {skill}
                          </span>
                        ))}
                        {member.expertise.length > 2 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            +{member.expertise.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Dots Indicator */}
        {filteredMembers.length > 4 && (
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index * visibleMembers)}
                className={`relative transition-all duration-500 ${
                  currentSlide === index ? 'w-8' : 'w-3'
                } h-3 rounded-full bg-gray-300 hover:bg-indigo-400 group`}
              >
                <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 scale-100' 
                    : 'group-hover:bg-indigo-400 scale-0'
                }`} />
              </button>
            ))}
          </div>
        )}

        {/* Progress Bar */}
        <div className="max-w-md mx-auto mt-8">
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-1000 ease-out"
              style={{ 
                width: `${((currentIndex + 1) / filteredMembers.length) * 100}%` 
              }}
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Join Our Growing Team</h3>
            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about innovation and making a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                View Open Positions
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white/10 transition-colors duration-300">
                Contact HR
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;