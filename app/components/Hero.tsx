'use client'

import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-[#5EEAD4]/10 py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[#38BDF8] to-[#5EEAD4] rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#38BDF8] rounded-full opacity-40 animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-[#5B21B6] to-[#2563EB] rounded-full opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8 lg:pr-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[#5B21B6] via-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent block">
                Why trade local 
                </span>
                <span className="text-gray-800 block">When you can go,</span>
                
                <span className="bg-gradient-to-r from-[#2563EB] via-[#38BDF8] to-[#5EEAD4] bg-clip-text text-transparent block">
                Global
                </span>
              </h1>
            </div>
            
            {/* Description */}
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl">
            We specialize in trading all over the globe
in oil &amp; gas industry and also provide IT services to
businesses to achieve high success through digital marketing and
SEO
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group bg-gradient-to-r from-[#5B21B6] to-[#2563EB] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-[#2563EB] hover:to-[#38BDF8] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="flex items-center justify-center">
                  Get Started
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
              
              <button className="group flex items-center justify-center sm:justify-start text-gray-700 hover:text-[#5B21B6] transition-colors duration-300 px-8 py-4 rounded-2xl border-2 border-gray-200 hover:border-[#5B21B6] bg-white/50 backdrop-blur-sm font-semibold text-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#5B21B6] to-[#2563EB] rounded-full mr-3 group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                How it Works
              </button>
            </div>
            
            {/* Trust Indicators */}
            {/* <div className="pt-8 space-y-4">
              <p className="text-sm text-gray-500 font-medium">Trusted by 500+ companies worldwide</p>
              <div className="flex items-center gap-8 opacity-60">
                <div className="text-2xl font-bold text-gray-400">Google</div>
                <div className="text-2xl font-bold text-gray-400">Meta</div>
                <div className="text-2xl font-bold text-gray-400">Amazon</div>
                <div className="text-2xl font-bold text-gray-400">Microsoft</div>
              </div>
            </div> */}
          </div>

          {/* Right Column - Illustration */}
          <div className="flex justify-center items-center relative">
            <div className="relative w-full max-w-2xl">
              
              {/* Main Illustration Container */}
              <div className="relative">
                
                {/* Laptop Base */}
                <div className="relative bg-gradient-to-br from-[#5B21B6] to-[#2563EB] rounded-3xl p-4 shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500">
                  
                  {/* Screen */}
                  <div className="bg-white rounded-2xl p-6 shadow-inner">
                    
                    {/* Browser Header */}
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="flex-1 bg-gray-100 rounded-lg mx-4 h-8 flex items-center px-3">
                        <div className="w-4 h-4 bg-gray-300 rounded mr-2"></div>
                        <div className="text-xs text-gray-400">www.zvollen.com</div>
                      </div>
                    </div>
                    
                    {/* Dashboard Content */}
                    <div className="space-y-4">
                      
                      {/* Search Bar */}
                      <div className="flex items-center bg-gray-50 rounded-xl p-3">
                        <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                        <div className="flex-1 h-2 bg-gray-200 rounded"></div>
                      </div>
                      
                      {/* Analytics Dashboard */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gradient-to-br from-[#38BDF8]/10 to-[#5EEAD4]/10 rounded-xl p-4">
                          <div className="w-8 h-8 bg-[#38BDF8] rounded-lg mb-2"></div>
                          <div className="h-2 bg-[#38BDF8]/20 rounded mb-1"></div>
                          <div className="h-2 bg-[#38BDF8]/20 rounded w-2/3"></div>
                        </div>
                        <div className="bg-gradient-to-br from-[#5B21B6]/10 to-[#2563EB]/10 rounded-xl p-4">
                          <div className="w-8 h-8 bg-[#5B21B6] rounded-lg mb-2"></div>
                          <div className="h-2 bg-[#5B21B6]/20 rounded mb-1"></div>
                          <div className="h-2 bg-[#5B21B6]/20 rounded w-3/4"></div>
                        </div>
                      </div>
                      
                      {/* Chart Area */}
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4">
                        <div className="flex items-end gap-2 h-20">
                          <div className="w-4 bg-gradient-to-t from-[#5B21B6] to-[#2563EB] rounded-t h-12"></div>
                          <div className="w-4 bg-gradient-to-t from-[#2563EB] to-[#38BDF8] rounded-t h-16"></div>
                          <div className="w-4 bg-gradient-to-t from-[#38BDF8] to-[#5EEAD4] rounded-t h-8"></div>
                          <div className="w-4 bg-gradient-to-t from-[#5B21B6] to-[#2563EB] rounded-t h-20"></div>
                          <div className="w-4 bg-gradient-to-t from-[#2563EB] to-[#38BDF8] rounded-t h-14"></div>
                          <div className="w-4 bg-gradient-to-t from-[#38BDF8] to-[#5EEAD4] rounded-t h-18"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Character Illustration */}
                <div className="absolute -top-8 -right-8 z-10">
                  <div className="relative">
                    {/* Character */}
                    <div className="w-32 h-32 bg-gradient-to-br from-[#38BDF8] to-[#5EEAD4] rounded-full flex items-center justify-center shadow-xl animate-bounce">
                      <div className="text-4xl">👩‍💼</div>
                    </div>
                    
                    {/* Speech Bubble */}
                    <div className="absolute -top-6 -left-12 bg-white rounded-xl px-4 py-2 shadow-lg">
                      <div className="text-xs font-medium text-gray-700">SEO Expert!</div>
                      <div className="absolute bottom-0 left-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white transform translate-y-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#38BDF8] rounded-2xl flex items-center justify-center shadow-xl animate-pulse">
                  <div className="text-2xl">📊</div>
                </div>
                
                <div className="absolute top-8 -left-8 w-12 h-12 bg-gradient-to-br from-[#38BDF8] to-[#5EEAD4] rounded-xl flex items-center justify-center shadow-lg animate-spin">
                  <div className="text-xl">⚡</div>
                </div>
                
                <div className="absolute -bottom-8 right-4 w-14 h-14 bg-gradient-to-br from-[#5B21B6] to-[#2563EB] rounded-2xl flex items-center justify-center shadow-xl animate-bounce">
                  <div className="text-2xl">🚀</div>
                </div>
                
                {/* Shopping Cart */}
                <div className="absolute top-16 right-8 w-10 h-10 bg-gradient-to-br from-[#38BDF8] to-[#5EEAD4] rounded-lg flex items-center justify-center shadow-lg">
                  <div className="text-lg">🛒</div>
                </div>
              </div>
              
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#38BDF8] to-[#5EEAD4] rounded-full opacity-20 blur-3xl transform scale-150 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="rgba(94, 234, 212, 0.1)"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;