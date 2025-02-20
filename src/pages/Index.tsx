
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VehicleGrid from "@/components/VehicleGrid";
import LocationsGrid from "@/components/LocationsGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <VehicleGrid />
      <LocationsGrid />
    </div>
  );
};

export default Index;
