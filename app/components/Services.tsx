'use client'

import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'STREAMLINING WORLDWIDE PURCHASING & LOGISTICS',
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      ),
      description: 'We streamline the procurement and transportation of petroleum products globally using intelligent solutions. With our technology we provide solutions adding efficiency to traditional concepts for buyers by leveraging proven relationships with suppliers to guarantee the closing process with limited risk to our clients. Transactions of any size are managed directly with the option to process through a global trade desk.',
      bgColor: 'from-[#5B21B6] to-[#2563EB]',
      shadowColor: 'shadow-[#5B21B6]/20'
    },
    {
      title: 'COMPREHENSIVE IT SOLUTIONS FOR BUSINESS GROWTH',
      icon: (
        <svg className="w-12 h-12 text-[#5B21B6]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H4V5h16v14z"/>
          <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
          <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
        </svg>
      ),
      description: 'We provide wide range of IT services to our clients from website designing, software development, content writing and IT consultancy to help them grow their business on the larger horizon. Our data-driven marketing approach goes beyond the services of an advertising agency. Our experts are we versed in social media marketing, SEO, PPC, and SEM. We provide solutions tailored to the needs of each client, based on their requirements and help them achieve their goals.',
      bgColor: 'from-white to-gray-50',
      shadowColor: 'shadow-gray-200'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" id="services">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-[#38BDF8]/20 to-[#5EEAD4]/20 rounded-full opacity-50"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-[#5B21B6]/20 to-[#2563EB]/20 rounded-full opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <span className="text-[#5B21B6] text-sm font-semibold tracking-widest uppercase bg-[#5B21B6]/10 px-6 py-3 rounded-full">
              Our Services
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-4xl mx-auto leading-tight">
            <span className="bg-gradient-to-r from-[#5B21B6] via-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
              Empowering Your Business
            </span>
            <br />
            <span className="text-gray-800">
              With Global Solutions
            </span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className={`relative bg-gradient-to-br ${service.bgColor} rounded-3xl p-8 shadow-xl ${service.shadowColor} hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 h-full`}>
                {/* Icon */}
                <div className="relative z-10 mb-8">
                  <div className={`w-20 h-20 ${index === 0 ? 'bg-white/20' : 'bg-gradient-to-br from-[#5B21B6]/10 to-[#2563EB]/10 border border-[#5B21B6]/20'} backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className={`text-2xl lg:text-3xl font-bold ${index === 0 ? 'text-white' : 'text-gray-800'} mb-6 leading-tight`}>
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className={`${index === 0 ? 'text-white/90' : 'text-gray-600'} text-lg leading-relaxed`}>
                  {service.description}
                </p>
                
                {/* Decorative Corner */}
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-tr-full"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-4 shadow-lg border border-gray-100">
            <div className="text-gray-600">
              Ready to grow your business?
            </div>
            <button className="bg-gradient-to-r from-[#5B21B6] to-[#2563EB] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#2563EB] hover:to-[#38BDF8] transform hover:scale-105 transition-all duration-300 shadow-md">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
      
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#5B21B6]/20 to-[#2563EB]/20 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#38BDF8]/20 to-[#5EEAD4]/20 rounded-full opacity-10 blur-3xl"></div>
    </section>
  );
};

export default Services;