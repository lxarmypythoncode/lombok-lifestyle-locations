
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VehicleGrid from "@/components/VehicleGrid";
import LocationsGrid from "@/components/LocationsGrid";
import Bookings from "@/components/Bookings";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Bookings />
      <VehicleGrid />
      <LocationsGrid />
    </div>
  );
};

export default Index;
