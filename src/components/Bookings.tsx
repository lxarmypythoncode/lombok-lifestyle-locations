import { useState } from "react";
import { Calendar, Phone } from "lucide-react";
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

interface Driver {
  name: string;
  contact: string;
  vehicle: string;
}

const drivers: Driver[] = [
  { name: "John", contact: "6281234567890", vehicle: "Toyota Avanza" },
  { name: "Michael", contact: "6281234567891", vehicle: "Honda BR-V" },
  { name: "Sarah", contact: "6281234567892", vehicle: "Mitsubishi Xpander" },
  { name: "David", contact: "6281234567893", vehicle: "Speed Boat" },
  { name: "Emma", contact: "6281234567894", vehicle: "Fishing Boat" },
];

const Bookings = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);

  const handleBooking = () => {
    if (!date || !selectedDriver) return;
    
    const formattedDate = format(date, "MMMM dd, yyyy");
    const message = `Hello ${selectedDriver.name}, I would like to book your ${selectedDriver.vehicle} for ${formattedDate}. Please confirm availability.`;
    const whatsappUrl = `https://wa.me/${selectedDriver.contact}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-sand-50" id="bookings">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sand-900 mb-4 font-playfair">
            Admin Contact: 087851971066
          </h2>
          <p className="text-sand-600 max-w-2xl mx-auto">
            Select your preferred date and driver to schedule your journey.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="default"
                className="w-full bg-ocean-600 hover:bg-ocean-700 text-white py-6 text-lg"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Schedule a Booking
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Schedule Your Trip</DialogTitle>
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
                <div className="space-y-2">
                  <h4 className="text-sm font-medium mb-2">Select Driver:</h4>
                  {drivers.map((driver) => (
                    <Button
                      key={driver.contact}
                      variant="outline"
                      className={`w-full justify-start ${
                        selectedDriver?.contact === driver.contact ? 'border-ocean-600 bg-ocean-50' : ''
                      }`}
                      onClick={() => setSelectedDriver(driver)}
                    >
                      {driver.name} - {driver.vehicle}
                    </Button>
                  ))}
                </div>
                <Button 
                  onClick={handleBooking}
                  disabled={!date || !selectedDriver}
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
    </section>
  );
};

export default Bookings;
