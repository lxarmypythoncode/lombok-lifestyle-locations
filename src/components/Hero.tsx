
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const adminWhatsApp = "6281234567890"; // Replace with actual admin number

  return (
    <section className="relative bg-ocean-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sand-900 font-playfair mb-6">
            Discover Lombok with Our Premium Fleet
          </h1>
          <p className="text-lg text-sand-600 mb-8">
            Experience the beauty of Lombok with our reliable transportation services. Choose from our selection of well-maintained vehicles and boats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-ocean-600 hover:bg-ocean-700 text-white"
              onClick={() => window.location.href = "#vehicles"}
            >
              View Our Fleet
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              className="border-ocean-600 text-ocean-600 hover:bg-ocean-50"
              onClick={() => window.open(`https://wa.me/${adminWhatsApp}`, '_blank')}
            >
              <Phone className="mr-2 h-4 w-4" />
              Contact Admin to Register Your Vehicle
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
    </section>
  );
};

export default Hero;
