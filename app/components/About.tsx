import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#c1cdff] to-white relative overflow-hidden" id="about">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#38BDF8]/20 to-[#5EEAD4]/20 rounded-full opacity-50 -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-[#5B21B6]/20 to-[#2563EB]/20 rounded-full opacity-50 translate-x-12 translate-y-12"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Section Label */}
            <div className="inline-block">
              <span className="text-[#5B21B6] text-sm font-semibold tracking-widest uppercase bg-[#5B21B6]/10 px-4 py-2 rounded-full">
                About Us
              </span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Global Excellence<br />
              <span className="bg-gradient-to-r from-[#5B21B6] via-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
                Since 2023
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              ZVOLLEN, established in 2023 in Malaysia, has been spearheading international trading services to manufacturers 
              and producers seeking global market expansion. With a growing customer base across Europe, Africa, US, and Asia, 
              we&apos;ve built strong relationships with major companies, refineries, and producers within the oil and gas industry.
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              We&apos;ve recently expanded into digital marketing and online IT consultancy, specializing in SEO, PPC management, 
              and link building. Our tailored strategies drive top search rankings and maximize online visibility, helping businesses 
              thrive in the digital landscape.
            </p>
            
            {/* Core Values */}
            <div className="space-y-2">
              <p className="text-gray-700 font-medium mb-6">Our core values guide everything we do:</p>
              
              <div className="space-y-4">
                {[
                  { title: "International Trading", description: "Professional import/export services for businesses looking to expand globally" },
                  { title: "Digital Excellence", description: "SEO, PPC, and digital marketing to boost your online presence" },
                  { title: "Trusted Partnerships", description: "Building excellent relationships with suppliers, associates, and partners" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#5B21B6] to-[#2563EB] text-white rounded-full flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-200">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-800 font-semibold text-lg group-hover:text-[#5B21B6] transition-colors duration-200">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Principles */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["Honesty", "Sincerity", "Integrity", "Flexibility"].map((value, index) => (
                <span key={index} className="px-4 py-2 bg-gradient-to-r from-[#5B21B6]/10 to-[#2563EB]/10 text-[#5B21B6] rounded-full text-sm font-medium hover:shadow-md transition-shadow duration-200">
                  {value}
                </span>
              ))}
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              {[
                { number: "Global", label: "Operations", color: "from-[#5B21B6] to-[#2563EB]" },
                { number: "2023", label: "Established", color: "from-[#2563EB] to-[#38BDF8]" },
                { number: "Trusted", label: "Partnerships", color: "from-[#38BDF8] to-[#5EEAD4]" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-200`}>
                    {stat.number}
                  </div>
                  <p className="text-gray-600 font-medium text-sm lg:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <div className="relative w-full max-w-md">
              {/* Main illustration container */}
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-2xl">
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#38BDF8] rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#5B21B6] rounded-full"></div>
                
                {/* Dashboard mockup */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  
                  {/* World map with connection points */}
                  <div className="mb-6 h-48 flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 200 120">
                      {/* Simplified world map */}
                      <path
                        d="M20,50 Q40,45 60,50 T100,45 T140,50 T180,45"
                        stroke="#e5e7eb"
                        strokeWidth="1"
                        fill="none"
                      />
                      <path
                        d="M20,60 Q50,65 80,60 T140,65 T180,60"
                        stroke="#e5e7eb"
                        strokeWidth="1"
                        fill="none"
                      />
                      <path
                        d="M20,70 Q60,75 100,70 T160,75 T180,70"
                        stroke="#e5e7eb"
                        strokeWidth="1"
                        fill="none"
                      />
                      
                      {/* Connection points */}
                      <circle cx="50" cy="55" r="3" fill="#5B21B6" className="animate-pulse" />
                      <circle cx="100" cy="45" r="3" fill="#2563EB" className="animate-pulse" />
                      <circle cx="150" cy="65" r="3" fill="#38BDF8" className="animate-pulse" />
                      <circle cx="80" cy="70" r="3" fill="#5EEAD4" className="animate-pulse" />
                      
                      {/* Connection lines */}
                      <path
                        d="M50,55 Q75,30 100,45"
                        stroke="url(#lineGradient1)"
                        strokeWidth="1"
                        fill="none"
                      />
                      <path
                        d="M100,45 Q125,30 150,65"
                        stroke="url(#lineGradient1)"
                        strokeWidth="1"
                        fill="none"
                      />
                      <path
                        d="M80,70 Q115,90 150,65"
                        stroke="url(#lineGradient1)"
                        strokeWidth="1"
                        fill="none"
                      />
                      
                      <defs>
                        <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#5B21B6" />
                          <stop offset="100%" stopColor="#2563EB" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  
                  {/* Digital marketing graph */}
                  <div className="relative h-16">
                    <svg className="w-full h-full" viewBox="0 0 200 60">
                      <path
                        d="M 0 40 Q 50 20 100 30 T 200 10"
                        stroke="url(#gradient)"
                        strokeWidth="3"
                        fill="none"
                        className="drop-shadow-sm"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#5B21B6" />
                          <stop offset="100%" stopColor="#2563EB" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                
                {/* Industry icons */}
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-[#5B21B6] to-[#2563EB] rounded-full flex items-center justify-center shadow-xl">
                  <div className="text-white text-2xl">🛢️</div>
                </div>
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-[#38BDF8] to-[#5EEAD4] rounded-full flex items-center justify-center shadow-xl">
                  <div className="text-white text-2xl">💻</div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center shadow-lg animate-bounce">
                <div className="text-white text-xl">🌍</div>
              </div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center shadow-lg animate-pulse">
                <div className="text-white text-xl">🚀</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;