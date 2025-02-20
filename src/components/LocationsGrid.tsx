
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
  {
    name: "Pink Beach",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    description: "One of only seven pink sand beaches in the world, formed by red coral fragments.",
    type: "Beach"
  },
  {
    name: "Senggigi Beach",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    description: "Lombok's most famous beach resort area with stunning sunsets and water activities.",
    type: "Beach"
  },
  {
    name: "Kuta Lombok",
    image: "https://images.unsplash.com/photo-1537956965359-7573183d1f57",
    description: "A surfer's paradise with multiple world-class surf breaks and pristine beaches.",
    type: "Beach"
  },
  {
    name: "Benang Stokel Waterfall",
    image: "https://images.unsplash.com/photo-1434608519344-49d77a699e1d",
    description: "Twin waterfalls surrounded by lush jungle, perfect for nature lovers.",
    type: "Waterfall"
  },
  {
    name: "Tetebatu Rice Terraces",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
    description: "Traditional rice terraces offering insight into local farming culture.",
    type: "Culture"
  },
  {
    name: "Pusuk Monkey Forest",
    image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9",
    description: "A natural forest inhabited by friendly monkeys, with spectacular valley views.",
    type: "Nature"
  },
  {
    name: "Sade Traditional Village",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2",
    description: "Experience traditional Sasak culture in this preserved village.",
    type: "Culture"
  },
  {
    name: "Banyumulek Pottery Village",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d",
    description: "Watch local artisans create traditional pottery using ancient techniques.",
    type: "Culture"
  }
];

const LocationsGrid = () => {
  return (
    <section className="py-20" id="locations">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
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
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <LocationCard {...location} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsGrid;
