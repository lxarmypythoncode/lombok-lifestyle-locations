
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-semibold text-sand-900 hover:text-ocean-600 transition-colors">
            Lombok Travel
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <Button 
              variant="ghost" 
              className="text-sand-700 hover:text-ocean-600 hover:bg-ocean-50 transition-all"
              onClick={() => scrollToSection('vehicles')}
            >
              Vehicles
            </Button>
            <Button 
              variant="ghost" 
              className="text-sand-700 hover:text-ocean-600 hover:bg-ocean-50 transition-all"
              onClick={() => scrollToSection('boats')}
            >
              Boats
            </Button>
            <Button 
              variant="ghost" 
              className="text-sand-700 hover:text-ocean-600 hover:bg-ocean-50 transition-all"
              onClick={() => scrollToSection('locations')}
            >
              Locations
            </Button>
            <Button variant="default" className="bg-ocean-600 hover:bg-ocean-700 text-white animate-bounce">
              Book Now
            </Button>
          </div>
          
          <Button variant="ghost" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
