
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-[#F5F9FF]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-4">
                Ready to transform your business? Contact us today.
              </p>
              <div className="space-y-2">
                <p className="text-gray-600">
                  Email: <a href="mailto:Nitin@growthgeniusservices.in" className="text-[#0066CC]">
                    Nitin@growthgeniusservices.in
                  </a>
                </p>
              </div>
            </div>
            
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" type="email" />
              <Textarea placeholder="Your Message" className="h-32" />
              <Button className="w-full bg-[#0066CC] hover:bg-[#0052a3] text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
