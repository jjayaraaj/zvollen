import Image from 'next/image';

const About = () => {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/about-illustration.svg"
              alt="Digital Growth Illustration"
              width={600}
              height={600}
              className="w-full"
            />
          </div>

          <div>
            <span className="text-[#22D3EE] text-lg font-medium mb-2 block">ABOUT US</span>
            <h2 className="text-[#22577E] text-4xl lg:text-5xl font-bold mb-6">
              Your Trusted Partner<br />
              In Digital Growth
            </h2>
            <p className="text-gray-500 mb-8 text-lg leading-relaxed">
              At Grant Protect Solutions Inc., we are passionate about helping businesses thrive in the digital landscape. 
              With expertise in SEO, PPC management, and link building, we craft tailored strategies that drive top search 
              rankings and maximize online visibility. Our commitment to quality and client success sets us apart, ensuring 
              that every campaign is designed to deliver exceptional results.
            </p>
            
            <p className="text-gray-600 mb-6">Our easy 3-step process ensures seamless execution and lasting results:</p>
            
            <div className="space-y-4 mb-12">
              <div className="flex items-center gap-3">
                <div className="text-[#22D3EE]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#22577E] font-medium">Strategy & Planning</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[#22D3EE]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#22577E] font-medium">Execution & Optimization</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[#22D3EE]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-[#22577E] font-medium">Results & Growth</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-[#22577E] text-4xl font-bold mb-2">250+</h3>
                <p className="text-[#22577E]">Project Done</p>
              </div>
              <div>
                <h3 className="text-[#22577E] text-4xl font-bold mb-2">640+</h3>
                <p className="text-[#22577E]">Satisfied Client</p>
              </div>
              <div>
                <h3 className="text-[#22577E] text-4xl font-bold mb-2">800+</h3>
                <p className="text-[#22577E]">User Active</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 