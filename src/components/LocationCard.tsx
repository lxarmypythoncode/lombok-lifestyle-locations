
import { MapPin } from "lucide-react";

interface LocationCardProps {
  name: string;
  image: string;
  description: string;
  type: string;
}

const LocationCard = ({ name, image, description, type }: LocationCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <div className="aspect-[3/4] relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
            {type}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-sm text-white/80 line-clamp-2">{description}</p>
        <div className="flex items-center mt-4 text-white/90">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">Lombok, Indonesia</span>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
