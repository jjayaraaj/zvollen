'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (sectionId: string) => {
    setIsOpen(false)
    
    // If we're not on the home page, navigate to home first
    if (pathname !== '/') {
      router.push(`/#${sectionId}`)
      return
    }

    // If we're already on the home page, scroll to the section
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 py-6 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
        : 'bg-white py-4'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => router.push('/')}
          >
            {/* Circular Logo */}
            <div className="w-12 h-12 bg-gradient-to-br from-[#5B21B6] to-[#2563EB] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            {/* Company Name */}
            <div className="flex flex-col">
              <span className="text-[#5B21B6] font-bold text-xl lg:text-2xl tracking-tight">
                Zvollen Global
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation('home')}
              className="text-gray-600 hover:text-[#5B21B6] font-medium transition-all duration-300 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5B21B6] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => handleNavigation('about')}
              className="text-gray-600 hover:text-[#5B21B6] font-medium transition-all duration-300 relative group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5B21B6] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => handleNavigation('services')}
              className="text-gray-600 hover:text-[#5B21B6] font-medium transition-all duration-300 relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5B21B6] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => handleNavigation('contact')}
              className="text-gray-600 hover:text-[#5B21B6] font-medium transition-all duration-300 relative group"
            >
              Contact Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5B21B6] transition-all duration-300 group-hover:w-full"></span>
            </button>
            
            {/* CTA Button */}
            <button 
              onClick={() => handleNavigation('contact')}
              className="bg-gradient-to-r from-[#5B21B6] to-[#2563EB] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#2563EB] hover:to-[#38BDF8] transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get A Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
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
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-gray-100 mt-4">
            <button
              onClick={() => handleNavigation('home')}
              className="block w-full text-left px-4 py-3 text-gray-600 hover:text-[#5B21B6] hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('about')}
              className="block w-full text-left px-4 py-3 text-gray-600 hover:text-[#5B21B6] hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavigation('services')}
              className="block w-full text-left px-4 py-3 text-gray-600 hover:text-[#5B21B6] hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => handleNavigation('contact')}
              className="block w-full text-left px-4 py-3 text-gray-600 hover:text-[#5B21B6] hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium"
            >
              Contact Us
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className="w-full mt-4 bg-gradient-to-r from-[#5B21B6] to-[#2563EB] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#2563EB] hover:to-[#38BDF8] transition-all duration-300 shadow-md"
            >
              Get A Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}