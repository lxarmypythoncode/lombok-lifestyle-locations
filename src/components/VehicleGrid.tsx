
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
    name: "Toyota Innova",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2",
    price: 60,
    capacity: 8,
    contact: "6281234567890",
    type: "car"
  },
  {
    name: "Suzuki Ertiga",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf",
    price: 45,
    capacity: 7,
    contact: "6281234567890",
    type: "car"
  },
  {
    name: "Toyota Fortuner",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2",
    price: 85,
    capacity: 7,
    contact: "6281234567890",
    type: "car"
  },
  {
    name: "Mitsubishi Xpander",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf",
    price: 55,
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
  {
    name: "Luxury Yacht",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a",
    price: 500,
    capacity: 12,
    contact: "6281234567890",
    type: "boat"
  },
  {
    name: "Glass Bottom Boat",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13",
    price: 200,
    capacity: 8,
    contact: "6281234567890",
    type: "boat"
  },
  {
    name: "Party Boat",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a",
    price: 350,
    capacity: 20,
    contact: "6281234567890",
    type: "boat"
  },
  {
    name: "Snorkel Tour Boat",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13",
    price: 180,
    capacity: 10,
    contact: "6281234567890",
    type: "boat"
  }
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
