
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
          alt="Lombok Beach"
          className="w-full h-full object-cover animate-shimmer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-white/80" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-ocean-50 text-ocean-700 rounded-full text-sm font-medium mb-4 animate-float">
            Discover Paradise
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-sand-900 mb-6 animate-fade-in">
            Experience Lombok's Beauty
          </h1>
          <p className="text-lg md:text-xl text-sand-700 mb-8 animate-fade-in">
            Explore pristine beaches, rent vehicles, and create unforgettable memories with our curated travel experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="bg-ocean-600 hover:bg-ocean-700 text-white px-8 py-6 text-lg animate-scale-in"
              onClick={() => scrollToSection('vehicles')}
            >
              Browse Vehicles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="border-ocean-200 text-ocean-700 hover:bg-ocean-50 px-8 py-6 text-lg animate-scale-in"
              onClick={() => scrollToSection('locations')}
            >
              View Locations
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
