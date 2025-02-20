
import { useState } from "react";
import VehicleCard from "./VehicleCard";
import { Button } from "@/components/ui/button";

const vehicles = [
  {
    name: "Toyota Avanza",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
    price: 45,
    capacity: 7,
    contact: "6281234567890",
    type: "car"
  },
  {
    name: "Honda BR-V",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: 50,
    capacity: 7,
    contact: "6281234567890",
    type: "car"
  },
  {
    name: "Speed Boat",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    price: 150,
    capacity: 10,
    contact: "6281234567890",
    type: "boat"
  },
  {
    name: "Fishing Boat",
    image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
    price: 120,
    capacity: 6,
    contact: "6281234567890",
    type: "boat"
  },
];

const VehicleGrid = () => {
  const [filter, setFilter] = useState<"all" | "car" | "boat">("all");
  
  const filteredVehicles = vehicles.filter(
    vehicle => filter === "all" || vehicle.type === filter
  );

  return (
    <section className="py-20 bg-sand-50" id="vehicles">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-ocean-50 text-ocean-700 rounded-full text-sm font-medium mb-4">
            Our Fleet
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-sand-900 mb-4">
            Explore Our Vehicles
          </h2>
          <p className="text-sand-600 max-w-2xl mx-auto">
            Choose from our selection of well-maintained vehicles and boats for your Lombok adventure.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className={filter === "all" ? "bg-ocean-600 text-white" : ""}
          >
            All
          </Button>
          <Button
            variant={filter === "car" ? "default" : "outline"}
            onClick={() => setFilter("car")}
            className={filter === "car" ? "bg-ocean-600 text-white" : ""}
          >
            Cars
          </Button>
          <Button
            variant={filter === "boat" ? "default" : "outline"}
            onClick={() => setFilter("boat")}
            className={filter === "boat" ? "bg-ocean-600 text-white" : ""}
          >
            Boats
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVehicles.map((vehicle, index) => (
            <VehicleCard key={index} {...vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleGrid;
