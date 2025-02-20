
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-semibold text-sand-900">
            Lombok Travel
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#vehicles" className="text-sand-700 hover:text-sand-900 transition-colors">
              Vehicles
            </a>
            <a href="#boats" className="text-sand-700 hover:text-sand-900 transition-colors">
              Boats
            </a>
            <a href="#locations" className="text-sand-700 hover:text-sand-900 transition-colors">
              Locations
            </a>
            <Button variant="default" className="bg-ocean-600 hover:bg-ocean-700 text-white">
              Contact Us
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
