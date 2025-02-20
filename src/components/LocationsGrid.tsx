
import LocationCard from "./LocationCard";

const locations = [
  {
    name: "Seger Beach",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    description: "A pristine beach known for its crystal clear waters and perfect surfing conditions.",
    type: "Beach"
  },
  {
    name: "Mount Rinjani",
    image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
    description: "Indonesia's second highest volcano offers spectacular hiking trails and views.",
    type: "Mountain"
  },
  {
    name: "Tanjung Aan",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description: "Famous for its unique pepper-sand beach and turquoise waters.",
    type: "Beach"
  },
  {
    name: "Gili Islands",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    description: "Three small islands offering world-class diving and snorkeling.",
    type: "Island"
  },
];

const LocationsGrid = () => {
  return (
    <section className="py-20" id="locations">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-ocean-50 text-ocean-700 rounded-full text-sm font-medium mb-4">
            Destinations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-sand-900 mb-4">
            Explore Lombok's Beauty
          </h2>
          <p className="text-sand-600 max-w-2xl mx-auto">
            Discover breathtaking beaches, majestic mountains, and hidden gems across Lombok.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <LocationCard key={index} {...location} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsGrid;
