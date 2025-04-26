
const services = [
  {
    title: "Financial Services",
    description: "Comprehensive financial solutions tailored to your business needs",
  },
  {
    title: "Business Consulting",
    description: "Expert guidance to optimize your business operations",
  },
  {
    title: "Tax Planning",
    description: "Strategic tax planning and compliance services",
  },
  {
    title: "Risk Management",
    description: "Identify and mitigate business risks effectively",
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 rounded-lg bg-[#F5F9FF] hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-[#0066CC]">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
