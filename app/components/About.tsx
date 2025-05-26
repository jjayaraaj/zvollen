export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
            <p className="text-gray-600 mb-6">
              Grant Protech Solutions is a leading technology company dedicated to providing innovative solutions for businesses of all sizes. With years of experience and a team of expert professionals, we help organizations transform their digital presence and achieve their goals.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              Our mission is to empower businesses with cutting-edge technology solutions that drive growth, efficiency, and success in the digital age. We are committed to delivering excellence through innovation, reliability, and exceptional customer service.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h4 className="text-4xl font-bold text-blue-600 mb-2">10+</h4>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h4 className="text-4xl font-bold text-blue-600 mb-2">200+</h4>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h4 className="text-4xl font-bold text-blue-600 mb-2">50+</h4>
              <p className="text-gray-600">Team Members</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h4 className="text-4xl font-bold text-blue-600 mb-2">99%</h4>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
