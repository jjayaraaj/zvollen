'use client'

import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Proven Expertise',
      description: 'Years of experience in digital marketing and search engine optimization.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L9 7V9C9 11.66 11.34 14 14 14V16L12 14L10 16V14C7.34 14 5 11.66 5 9V7L11 1L17 7V9C17 11.66 14.66 14 12 14V16L14 14L16 16V14C18.66 14 21 11.66 21 9Z"/>
        </svg>
      )
    },
    {
      title: 'Results-Driven Approach',
      description: 'We focus on measurable growth and long-term success.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"/>
        </svg>
      )
    },
    {
      title: 'Customized Solutions',
      description: 'Tailored strategies to meet your unique business needs.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
        </svg>
      )
    },
    {
      title: 'Commitment To Quality',
      description: 'Ethical and organic methods for sustainable online growth.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden" id="why-choose-us">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-12">
            {/* Section Header */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase bg-cyan-50 px-6 py-3 rounded-full">
                  Why Choose Us
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Why You Should
                </span>
                <br />
                <span className="text-gray-800">
                  Choose Us
                </span>
              </h2>
            </div>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="group flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:from-teal-600 group-hover:to-cyan-600 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="flex justify-center items-center relative">
            <div className="relative w-full max-w-lg">
              
              {/* Main Character Container */}
              <div className="relative">
                
                {/* Character Base */}
                <div className="relative z-10">
                  {/* Character Body */}
                  <div className="w-80 h-80 mx-auto relative">
                    
                    {/* Head */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-24 h-28 bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl rounded-b-full">
                      {/* Hair */}
                      <div className="absolute -top-2 left-2 w-20 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full"></div>
                      
                      {/* Face */}
                      <div className="absolute top-6 left-3 w-18 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl">
                        {/* Glasses */}
                        <div className="absolute top-6 left-1 w-16 h-8 border-2 border-gray-800 rounded-full bg-white/20">
                          <div className="absolute top-1 left-2 w-5 h-5 bg-gray-800 rounded-full opacity-20"></div>
                          <div className="absolute top-1 right-2 w-5 h-5 bg-gray-800 rounded-full opacity-20"></div>
                        </div>
                        
                        {/* Smile */}
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-4 border-b-2 border-gray-700 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Body */}
                    <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-20 h-32 bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl">
                      {/* Arms */}
                      <div className="absolute -left-6 top-4 w-12 h-4 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full transform rotate-12"></div>
                      <div className="absolute -right-6 top-4 w-12 h-4 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full transform -rotate-12"></div>
                    </div>
                    
                    {/* Sitting Position Base */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full opacity-80"></div>
                  </div>
                </div>
                
                {/* Floating Screens/Documents */}
                <div className="absolute inset-0">
                  {/* Screen 1 - Top Left */}
                  <div className="absolute top-4 left-4 w-24 h-16 bg-white rounded-lg shadow-xl transform rotate-12 hover:rotate-6 transition-transform duration-500">
                    <div className="p-2 space-y-1">
                      <div className="h-2 bg-gray-200 rounded"></div>
                      <div className="h-2 bg-teal-200 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                      <div className="grid grid-cols-3 gap-1 mt-2">
                        <div className="h-4 bg-teal-100 rounded"></div>
                        <div className="h-4 bg-blue-100 rounded"></div>
                        <div className="h-4 bg-indigo-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Screen 2 - Top Right */}
                  <div className="absolute top-8 right-0 w-20 h-14 bg-white rounded-lg shadow-xl transform -rotate-12 hover:-rotate-6 transition-transform duration-500">
                    <div className="p-2 space-y-1">
                      <div className="h-1 bg-gray-200 rounded"></div>
                      <div className="h-1 bg-cyan-200 rounded w-2/3"></div>
                      <div className="flex gap-1 mt-1">
                        <div className="w-2 h-6 bg-teal-300 rounded"></div>
                        <div className="w-2 h-4 bg-teal-200 rounded"></div>
                        <div className="w-2 h-8 bg-teal-400 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Screen 3 - Bottom Left */}
                  <div className="absolute bottom-12 left-0 w-28 h-18 bg-white rounded-lg shadow-xl transform rotate-6 hover:rotate-3 transition-transform duration-500">
                    <div className="p-2">
                      <div className="flex items-center gap-1 mb-2">
                        <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-1 bg-gray-200 rounded"></div>
                        <div className="h-1 bg-teal-200 rounded w-3/4"></div>
                        <div className="h-1 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Screen 4 - Bottom Right */}
                  <div className="absolute bottom-8 right-4 w-22 h-16 bg-white rounded-lg shadow-xl transform -rotate-8 hover:-rotate-4 transition-transform duration-500">
                    <div className="p-2">
                      <div className="h-1 bg-gray-200 rounded mb-1"></div>
                      <div className="grid grid-cols-2 gap-1">
                        <div className="h-3 bg-gradient-to-br from-teal-100 to-teal-200 rounded"></div>
                        <div className="h-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded"></div>
                        <div className="h-3 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded"></div>
                        <div className="h-3 bg-gradient-to-br from-purple-100 to-purple-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Screen 5 - Mid Right */}
                  <div className="absolute top-1/2 right-2 w-18 h-12 bg-white rounded-lg shadow-xl transform rotate-15 hover:rotate-10 transition-transform duration-500">
                    <div className="p-1">
                      <div className="h-1 bg-gray-200 rounded mb-1"></div>
                      <div className="flex gap-1">
                        <div className="w-1 h-4 bg-teal-300 rounded"></div>
                        <div className="w-1 h-6 bg-cyan-300 rounded"></div>
                        <div className="w-1 h-3 bg-blue-300 rounded"></div>
                        <div className="w-1 h-5 bg-indigo-300 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-200 to-cyan-200 rounded-full opacity-20 blur-3xl transform scale-110 -z-10"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center shadow-lg animate-bounce">
                <div className="text-white text-xl">💡</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-xl animate-pulse">
                <div className="text-white text-2xl">🚀</div>
              </div>
              
              <div className="absolute top-8 -left-8 w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg flex items-center justify-center shadow-lg animate-spin">
                <div className="text-white text-lg">⚡</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-teal-200 to-cyan-200 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full opacity-10 blur-3xl"></div>
    </section>
  );
};

export default WhyChooseUs;