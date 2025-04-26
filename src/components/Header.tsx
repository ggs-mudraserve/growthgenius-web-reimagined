
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-[#0066CC]">
              GrowthGenius
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-[#0066CC]">Home</a>
            <a href="#services" className="text-gray-600 hover:text-[#0066CC]">Services</a>
            <a href="#about" className="text-gray-600 hover:text-[#0066CC]">About</a>
            <a href="#contact" className="text-gray-600 hover:text-[#0066CC]">Contact</a>
          </nav>
          
          <Button variant="ghost" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
