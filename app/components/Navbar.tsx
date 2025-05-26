'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Grant Pro Tech Solutions" 
              width={40} 
              height={40}
              className="mr-3"
            />
            <span className="text-[#264653] font-semibold text-xl">GRANT PRO TECH SOLUTIONS INC</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-[#2A9D8F] transition duration-300">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-[#2A9D8F] transition duration-300">
              About Us
            </a>
            <a href="#services" className="text-gray-600 hover:text-[#2A9D8F] transition duration-300">
              Services
            </a>
            <a href="#contact" className="text-gray-600 hover:text-[#2A9D8F] transition duration-300">
              Contact Us
            </a>
            <button className="bg-[#2A9D8F] text-white px-6 py-2 rounded-lg hover:bg-[#287771] transition duration-300">
              Get A Quote
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 text-gray-600 hover:text-[#2A9D8F] transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-600 hover:text-[#2A9D8F] transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-600 hover:text-[#2A9D8F] transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-600 hover:text-[#2A9D8F] transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
              <button className="w-full mt-2 bg-[#2A9D8F] text-white px-6 py-2 rounded-lg hover:bg-[#287771] transition duration-300">
                Get A Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
