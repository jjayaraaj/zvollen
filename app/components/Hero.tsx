'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white pt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#264653]">
              <span className="text-[#2A9D8F]">Driving Digital</span><br />
              Success,<br />
              Maximizing<br />
              Growth
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              We specialize in SEO, PPC, and digital marketing to boost your online presence and achieve top search rankings.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#2A9D8F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#287771] transition duration-300">
                Get Started
              </button>
              <button className="flex items-center text-[#264653] hover:text-[#2A9D8F] transition duration-300">
                <span className="mr-2">How it Works</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/hero-image.png"
              alt="Digital Marketing Illustration"
              width={600}
              height={600}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
