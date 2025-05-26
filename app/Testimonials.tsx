'use client'

import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Just wanted to say a huge thank you for the amazing work that you have done on getting us on page 1 of Google! You also made some great design changes to the website that is helping to turn visitors into paying customers. Your work is very professional, and I am pleased to have approached you and your company to develop my website.",
      author: "Sarah Johnson",
      position: "CEO, Tech Startup",
      company: "InnovateTech Solutions",
      avatar: "SJ"
    },
    {
      id: 2,
      text: "Grant Pro Tech Solutions's website optimization techniques have increased the number of unique visitors to our website over the past year by 366% and have made a significant difference in the growth of our business.",
      author: "Michael Chen",
      position: "Marketing Director",
      company: "Digital Growth Co.",
      avatar: "MC"
    },
    {
      id: 3,
      text: "It has been a pleasure working with Grant Pro Tech Solutions over the past several years. During this time we have seen significant improvement in our organic rankings including a move to first page for our primary target.",
      author: "Emily Rodriguez",
      position: "Business Owner",
      company: "Local Services Pro",
      avatar: "ER"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" id="testimonials">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase bg-cyan-50 px-6 py-3 rounded-full">
              Testimonial
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-4xl mx-auto leading-tight">
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              What Our Client Say
            </span>
            <br />
            <span className="text-gray-800">
              About Us
            </span>
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="grid lg:grid-cols-3 gap-8">
                    
                    {/* Main Testimonial Card */}
                    <div className="lg:col-span-2">
                      <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 relative group">
                        {/* Quote Icon */}
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z"/>
                          </svg>
                        </div>
                        
                        {/* Testimonial Text */}
                        <div className="pt-6 space-y-6">
                          <p className="text-gray-700 text-lg lg:text-xl leading-relaxed font-medium">
                            &ldquo;{testimonial.text}&rdquo;
                          </p>
                          
                          {/* Author Info */}
                          <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                              {testimonial.avatar}
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-800 text-lg">{testimonial.author}</h4>
                              <p className="text-gray-500 text-sm">{testimonial.position}</p>
                              <p className="text-teal-600 text-sm font-medium">{testimonial.company}</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Decorative Corner */}
                        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-teal-50 to-transparent rounded-tl-full"></div>
                      </div>
                    </div>

                    {/* Side Stats/Info Cards */}
                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-3xl p-8 text-white relative overflow-hidden group hover:from-teal-600 hover:to-cyan-600 transition-all duration-300">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full"></div>
                        <div className="relative z-10">
                          <div className="text-4xl font-bold mb-2">366%</div>
                          <div className="text-white/90">Website Traffic Increase</div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
                            </svg>
                          </div>
                          <div>
                            <div className="font-bold text-gray-800">5.0 Rating</div>
                            <div className="text-gray-500 text-sm">Client Satisfaction</div>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === i 
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <p className="text-gray-500 font-medium">Trusted by 500+ businesses worldwide</p>
          </div>
          <div className="flex justify-center items-center gap-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Google Partner</div>
            <div className="text-2xl font-bold text-gray-400">Facebook Partner</div>
            <div className="text-2xl font-bold text-gray-400">HubSpot Certified</div>
            <div className="text-2xl font-bold text-gray-400">Shopify Plus</div>
          </div>
        </div>
      </div>
      
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-200 to-cyan-200 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full opacity-10 blur-3xl"></div>
    </section>
  );
};

export default Testimonials;