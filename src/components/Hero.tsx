
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-b from-[#F5F9FF] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Business with Expert Financial Solutions
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            GrowthGenius Services provides comprehensive financial and business solutions to help your company thrive in today's competitive market.
          </p>
          <Button className="bg-[#0066CC] hover:bg-[#0052a3] text-white px-8 py-6 rounded-lg text-lg">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
