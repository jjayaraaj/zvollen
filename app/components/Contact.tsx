'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: 'Social Media Marketing',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#5B21B6] via-[#2563EB] to-[#5EEAD4] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <p className="text-[#5EEAD4] font-medium text-sm tracking-wider uppercase">
                GET IN TOUCH
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Let&apos;s Talk About
                <br />
                <span className="text-[#5EEAD4]">Your Project</span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed max-w-md">
                Get in Touch for Expert Digital Solutions and Take Your Business 
                to the Next Level.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#38BDF8] to-[#5EEAD4] rounded-full flex items-center justify-center shadow-lg">
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#5EEAD4] font-semibold text-lg">Phone:</h3>
                  <p className="text-white/80 text-lg">800-961-4656</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#38BDF8] to-[#5EEAD4] rounded-full flex items-center justify-center shadow-lg">
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#5EEAD4] font-semibold text-lg">Email:</h3>
                  <p className="text-white/80 text-lg">info@zvollenglobaltrade.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5B21B6] focus:border-transparent transition duration-300 placeholder-gray-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5B21B6] focus:border-transparent transition duration-300 placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Email and Service */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5B21B6] focus:border-transparent transition duration-300 placeholder-gray-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5B21B6] focus:border-transparent transition duration-300 appearance-none bg-white text-gray-700"
                    >
                      <option value="Social Media Marketing">Social Media Marketing</option>
                      <option value="SEO Services">SEO Services</option>
                      <option value="PPC Management">PPC Management</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Content Marketing">Content Marketing</option>
                      <option value="Email Marketing">Email Marketing</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#5B21B6] focus:border-transparent transition duration-300 placeholder-gray-400 resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#5B21B6] to-[#2563EB] text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-[#2563EB] hover:to-[#38BDF8] transform hover:scale-[1.02] transition duration-300 shadow-lg hover:shadow-xl"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#38BDF8] to-[#5EEAD4] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#5B21B6] to-[#2563EB] rounded-full opacity-10 blur-3xl"></div>
    </section>
  )
}