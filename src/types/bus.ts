export interface Bus {
  id: string;
  name: string;
  type: 'school' | 'tourist' | 'staff';
  fuelType: 'cng' | 'diesel' | 'electric';
  seats: number;
  price: number;
  year: number;
  engine?: {
    description: string;
    displacement: string;
    type: string;
    power: string;
    torque: string;
  };
  clutch?: string;
  suspension?: string;
  wheelBaseOptions?: string[];
  busWidth?: string;
  seatingLayouts?: {
    '3x3 School Seats': string[];
    '3x2 School Seats': string[];
    '2x2 High Head Rest': string[];
  };
  tyres?: {
    noOfTyres: string[];
    tyreSize: string[];
  };
  powerSteering?: string;
  brakes?: string[];
  mileage: number;
  transmission?: 'manual' | 'automatic' | 'Synchromesh Manual 5 Forward, 1 Reverse';
  image: string;
  features: string[];
  description: string;
  availability: 'available' | 'sold' | 'reserved';
}

export interface FilterOptions {
  type: string[];
  fuelType: string[];
  minSeats: number;
  maxSeats: number;
  minPrice: number;
  maxPrice: number;
  searchTerm: string;
}
