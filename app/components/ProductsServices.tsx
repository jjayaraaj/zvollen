import React from 'react';

const ProductsServices = () => {
  const products = [
    'JET A1 AVIATION FUEL',
    'EN590 10 PPM',
    'PETCOKE',
    'LNG',
    'CRUDE OIL',
    'UREA',
    'PALM OIL'
  ];

  const services = [
    'SOCIAL MEDIA MARKETING',
    'SEO',
    'PPC',
    'WEBSITE DESIGNING',
    'CONTENT WRITING',
    'DIGITAL MARKETING',
    'IT CONSULTANCY'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-200 to-white relative overflow-hidden" id="products-services">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-[#38BDF8]/20 to-[#5EEAD4]/20 rounded-full opacity-50"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-[#5B21B6]/20 to-[#2563EB]/20 rounded-full opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <span className="text-[#5B21B6] text-sm font-semibold tracking-widest uppercase bg-[#5B21B6]/10 px-6 py-3 rounded-full">
              What We Offer
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-4xl mx-auto leading-tight">
            <span className="bg-gradient-to-r from-[#5B21B6] via-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
              Products & Services
            </span>
          </h2>
        </div>

        {/* Products & Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Products Column */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#5B21B6] to-[#2563EB] rounded-2xl flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">PRODUCTS</h3>
            </div>
            
            <div className="space-y-4">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-2 rounded-xl hover:bg-gradient-to-r hover:from-[#5B21B6]/5 hover:to-[#2563EB]/5 transition-colors duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#5B21B6] to-[#2563EB]"></div>
                  <span className="text-gray-700 group-hover:text-[#5B21B6] font-medium transition-colors duration-300">
                    {product}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#38BDF8] rounded-2xl flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">SERVICES</h3>
            </div>
            
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-2 rounded-xl hover:bg-gradient-to-r hover:from-[#2563EB]/5 hover:to-[#38BDF8]/5 transition-colors duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2563EB] to-[#38BDF8]"></div>
                  <span className="text-gray-700 group-hover:text-[#2563EB] font-medium transition-colors duration-300">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#5B21B6]/20 to-[#2563EB]/20 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#38BDF8]/20 to-[#5EEAD4]/20 rounded-full opacity-10 blur-3xl"></div>
    </section>
  );
};

export default ProductsServices; 