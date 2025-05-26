'use client'

import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" id="about">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full opacity-50 -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-50 translate-x-12 translate-y-12"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Section Label */}
            <div className="inline-block">
              <span className="text-teal-500 text-sm font-semibold tracking-widest uppercase bg-teal-50 px-4 py-2 rounded-full">
                About Us
              </span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Your Trusted Partner<br />
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                In Digital Growth
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              At Grant Protect Solutions Inc., we are passionate about helping businesses thrive in the digital landscape. 
              With expertise in SEO, PPC management, and link building, we craft tailored strategies that drive top search 
              rankings and maximize online visibility. Our commitment to quality and client success sets us apart, ensuring 
              that every campaign is designed to deliver exceptional results.
            </p>
            
            {/* Process Steps */}
            <div className="space-y-2">
              <p className="text-gray-700 font-medium mb-6">Our easy 3-step process ensures seamless execution and lasting results:</p>
              
              <div className="space-y-4">
                {[
                  { step: "01", title: "Strategy & Planning", description: "We analyze your business and create a customized digital strategy" },
                  { step: "02", title: "Execution & Optimization", description: "Implementation of campaigns with continuous monitoring and optimization" },
                  { step: "03", title: "Results & Growth", description: "Deliver measurable results and sustainable business growth" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-200">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-800 font-semibold text-lg group-hover:text-teal-600 transition-colors duration-200">
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

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              {[
                { number: "250+", label: "Project Done", color: "from-teal-500 to-teal-600" },
                { number: "640+", label: "Satisfied Client", color: "from-blue-500 to-blue-600" },
                { number: "800+", label: "User Active", color: "from-indigo-500 to-indigo-600" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-200`}>
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
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-teal-400 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full"></div>
                
                {/* Dashboard mockup */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  
                  {/* Chart bars */}
                  <div className="flex items-end gap-2 mb-6 h-32">
                    <div className="w-8 bg-gradient-to-t from-teal-400 to-teal-500 rounded-t h-20"></div>
                    <div className="w-8 bg-gradient-to-t from-blue-400 to-blue-500 rounded-t h-28"></div>
                    <div className="w-8 bg-gradient-to-t from-teal-400 to-teal-500 rounded-t h-16"></div>
                    <div className="w-8 bg-gradient-to-t from-blue-400 to-blue-500 rounded-t h-24"></div>
                  </div>
                  
                  {/* Growth line */}
                  <div className="relative h-16 mb-4">
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
                          <stop offset="0%" stopColor="#14b8a6" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                
                {/* Character illustrations */}
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full flex items-center justify-center shadow-xl">
                  <div className="text-white text-2xl">👩‍💼</div>
                </div>
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center shadow-xl">
                  <div className="text-white text-2xl">👨‍💻</div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center shadow-lg animate-bounce">
                <div className="text-white text-xl">📊</div>
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