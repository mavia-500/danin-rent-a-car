import { Users, DoorOpen, Briefcase, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import carGrande from "@/assets/car-grande.png";
import carCivic from "@/assets/car-civic.png";
import carMercedes from "@/assets/car-mercedes.png";
import carFortuner from "@/assets/car-fortuner.png";
import carAudi from "@/assets/car-audi.png";
import carLandcruiser from "@/assets/car-landcruiser.png";

const cars = [
  {
    name: "Mercedes C200",
    // category: 'Sedan',
    image: "203195_Mercedes_CClass_C200_0115.webp",
    price: 115000,
    persons: 5,
    doors: 4,
  },
  {
    name: "Corrola Gli",
    // category: 'Sedan',
    image: "Why-a-GLi-Car-is-a-Good-Rental-Vehicle-Choice-Featured-Image.jpg",
    price: 6000,
    persons: 5,
    doors: 4,
  },
  {
    name: "Honda civic",
    // category: 'Luxury Sedan',
    image: "Honda_Civic_e-HEV_Sport_(XI)_–_f_30062024.jpg",
    price: 8000,
    persons: 5,
    doors: 4,
  },
  {
    name: "Toyota Fortuner",
    category: "SUV",
    image: carFortuner,
    price: 18000,
    persons: 7,
    doors: 5,
  },
  {
    name: "Audi A6",
    category: "Luxury Sedan",
    image: carAudi,
    price: 40000,
    persons: 5,
    doors: 4,
  },
  {
    name: "Toyota Land Cruiser V8",
    category: "SUV",
    image: carLandcruiser,
    price: 35000,
    persons: 7,
    doors: 5,
  },
];

const Fleet = () => {
  return (
    <section id="fleet" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle justify-center mb-4">Our Fleets</p>
          <h2 className="section-title text-foreground">
            Explore Our Perfect and Extensive Fleet
          </h2>
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cars.map((car) => (
            <div key={car.name} className="fleet-card">
              {/* Image */}
              <div className="relative h-48 bg-muted flex items-center justify-center p-4">
                <img
                  src={`src/assets/${car.image}`}
                  alt={car.name}
                  className="h-full w-full object-cover"
                />
                {/* <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full uppercase font-medium">
                  {car.category}
                </span> */}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {car.name}
                </h3>

                {/* Specs */}
                <div className="flex gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{car.persons} Persons</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DoorOpen className="w-4 h-4" />
                    <span>{car.doors} door</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    <span>bags</span>
                  </div>
                  {/* <div className="flex items-center gap-1">
                    <Cog className="w-4 h-4" />
                    <span>auto</span>
                  </div> */}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-2xl font-bold text-primary">
                      Rs {car.price.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground"> /day</span>
                  </div>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note & CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            All the rates are just for Islamabad City. For out of city the rates
            are different.
          </p>
          <Button className="btn-primary">View All Cars</Button>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
