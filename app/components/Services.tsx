export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications and websites built with the latest technologies to meet your specific business needs.',
      icon: '🌐'
    },
    {
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications that provide seamless user experiences across all devices.',
      icon: '📱'
    },
    {
      title: 'Cloud Services',
      description: 'Secure and scalable cloud solutions to help your business operate efficiently and grow without limitations.',
      icon: '☁️'
    },
    {
      title: 'IT Consulting',
      description: 'Expert guidance and strategic planning to help you make informed decisions about your technology investments.',
      icon: '💡'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
