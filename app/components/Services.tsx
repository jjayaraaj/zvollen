'use client'

import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Social Media Marketing',
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L19 7L14.74 12L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12L5 7L10.91 8.26L12 2Z"/>
        </svg>
      ),
      features: [
        'Social Media Monitoring',
        'Facebook Management',
        'Twitter Management',
        'Blog Contribution'
      ],
      bgColor: 'from-teal-400 to-cyan-500',
      shadowColor: 'shadow-teal-200'
    },
    {
      title: 'Search Engine Optimization',
      icon: (
        <svg className="w-12 h-12 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          <circle cx="9.5" cy="9.5" r="2"/>
          <path d="M8 8.5l1.5 1.5L12 7.5"/>
        </svg>
      ),
      features: [
        'SEO',
        'Link Building',
        'SEO Audit',
        'Local SEO',
        'Video SEO'
      ],
      bgColor: 'from-white to-gray-50',
      shadowColor: 'shadow-gray-200'
    },
    {
      title: 'Pay Per Click (PPC)',
      icon: (
        <svg className="w-12 h-12 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 15h7c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1zm0-4h7c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1zm0-4h7c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1zm10.3 11.3c-.18.18-.43.3-.7.3-.55 0-1-.45-1-1 0-.27.12-.52.3-.7l2.59-2.59c.78-.78.78-2.05 0-2.83l-2.59-2.59c-.18-.18-.3-.43-.3-.7 0-.55.45-1 1-1 .27 0 .52.12.7.3l2.59 2.59c1.56 1.56 1.56 4.09 0 5.66l-2.59 2.56z"/>
          <path d="M2 12c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5zm8.5 0c0-1.93-1.57-3.5-3.5-3.5S3.5 10.07 3.5 12s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5z"/>
        </svg>
      ),
      features: [
        'PPC Analysis',
        'PPC Account Setup',
        'PPC Management',
        'Display / Contextual Ads',
        'Remarketing-Rebranding',
        'PPC on Social Network'
      ],
      bgColor: 'from-white to-gray-50',
      shadowColor: 'shadow-gray-200'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" id="services">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full opacity-50"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase bg-cyan-50 px-6 py-3 rounded-full">
              Our Services
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-4xl mx-auto leading-tight">
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Comprehensive Digital Solutions
            </span>
            <br />
            <span className="text-gray-800">
              For Business Growth
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
          
          {/* Social Media Marketing - Featured Card */}
          <div className="lg:col-span-1 group">
            <div className={`relative bg-gradient-to-br ${services[0].bgColor} rounded-3xl p-8 shadow-xl ${services[0].shadowColor} hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden`}>
              
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full"></div>
                <div className="absolute top-8 right-12 w-4 h-4 bg-white rounded-full"></div>
                <div className="absolute top-16 right-6 w-6 h-6 bg-white rounded-full"></div>
              </div>
              
              {/* Icon */}
              <div className="relative z-10 mb-8">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {services[0].icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 leading-tight">
                {services[0].title}
              </h3>
              
              {/* Features List */}
              <ul className="space-y-4">
                {services[0].features.map((feature, index) => (
                  <li key={index} className="flex items-center text-white/90 text-lg">
                    <div className="w-2 h-2 bg-white rounded-full mr-4 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Decorative Corner */}
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-tr-full"></div>
            </div>
          </div>

          {/* Other Services */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {services.slice(1).map((service, index) => (
              <div key={index} className="group h-full">
                <div className={`relative bg-gradient-to-br ${service.bgColor} rounded-3xl p-8 shadow-lg ${service.shadowColor} hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 h-full`}>
                  
                  {/* Icon */}
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-teal-100">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl lg:text-2xl font-bold text-gray-800 mb-8 leading-tight">
                    {service.title}
                  </h3>
                  
                  {/* Features List */}
                  <ul className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 text-lg">
                        <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mr-4 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-4 shadow-lg border border-gray-100">
            <div className="text-gray-600">
              Ready to grow your business?
            </div>
            <button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-md">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
      
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-200 to-cyan-200 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full opacity-10 blur-3xl"></div>
    </section>
  );
};

export default Services;