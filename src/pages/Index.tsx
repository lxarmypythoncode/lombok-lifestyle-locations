
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VehicleGrid from "@/components/VehicleGrid";
import LocationsGrid from "@/components/LocationsGrid";
import Bookings from "@/components/Bookings";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <Hero />
      <Bookings />
      <VehicleGrid />
      <LocationsGrid />
      <footer className="mt-auto py-8 bg-sand-50">
        <div className="container mx-auto px-4">
          <p className="text-center text-sand-600 font-playfair text-lg">
            LxArmy404 tour travel 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
