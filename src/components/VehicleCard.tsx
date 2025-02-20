
import { useState } from "react";
import { Car, Users, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { format } from "date-fns";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";

interface VehicleCardProps {
  name: string;
  image: string;
  price: number;
  capacity: number;
  contact: string;
}

const VehicleCard = ({ name, image, price, capacity, contact }: VehicleCardProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  const handleBooking = () => {
    if (!date) return;
    
    const formattedDate = format(date, "MMMM dd, yyyy");
    const message = `Hello, I would like to book the ${name} for ${formattedDate}. Please confirm availability.`;
    const whatsappUrl = `https://wa.me/${contact}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-sand-100 hover:shadow-lg transition-all duration-300">
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-sand-900 mb-2">{name}</h3>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center text-sand-600">
            <Users className="h-4 w-4 mr-1" />
            <span>{capacity} seats</span>
          </div>
          <div className="flex items-center text-sand-600">
            <Car className="h-4 w-4 mr-1" />
            <span>Available</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-ocean-700 font-semibold">
            ${price}<span className="text-sand-500 text-sm">/day</span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="default"
                className="bg-ocean-600 hover:bg-ocean-700 text-white"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Book Now
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Book {name}</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-4">
                <div className="flex justify-center">
                  <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={(date) => date < new Date()}
                  />
                </div>
                <Button 
                  onClick={handleBooking}
                  disabled={!date}
                  className="bg-ocean-600 hover:bg-ocean-700 text-white"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Driver via WhatsApp
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
