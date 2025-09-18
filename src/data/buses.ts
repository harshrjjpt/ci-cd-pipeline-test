import { Bus } from '@/types/bus';

export const buses: Bus[] = [
  {
    id: '1',
    name: 'Tata Starbus School Bus',
    type: 'school',
    fuelType: 'diesel',
    seats: 52,
    price: 1850000,
    year: 2023,
    mileage: 8.5,
    transmission: 'manual',
    image: '/api/placeholder/400/300',
    features: ['GPS Tracking', 'CCTV Cameras', 'Emergency Exit', 'First Aid Kit', 'Fire Extinguisher'],
    description: 'Perfect for school transportation with enhanced safety features and comfortable seating.',
    availability: 'available'
  },
  {
    id: '2',
    name: 'Ashok Leyland CNG School Bus',
    type: 'school',
    fuelType: 'cng',
    seats: 45,
    price: 1650000,
    year: 2023,
    mileage: 12.5,
    transmission: 'manual',
    image: '/api/placeholder/400/300',
    features: ['CNG Powered', 'Low Floor Entry', 'Wheelchair Access', 'Student Tracking', 'Speed Governor'],
    description: 'Eco-friendly CNG powered school bus with modern safety features.',
    availability: 'available'
  },
  {
    id: '3',
    name: 'Volvo Tourist Coach',
    type: 'tourist',
    fuelType: 'diesel',
    seats: 49,
    price: 4500000,
    year: 2024,
    mileage: 6.8,
    transmission: 'automatic',
    image: '/api/placeholder/400/300',
    features: ['Luxury Seating', 'AC', 'Entertainment System', 'WiFi', 'USB Charging', 'Reclining Seats'],
    description: 'Premium tourist coach with luxury amenities for comfortable long-distance travel.',
    availability: 'available'
  },
  {
    id: '4',
    name: 'Mahindra Staff Bus',
    type: 'staff',
    fuelType: 'diesel',
    seats: 35,
    price: 1200000,
    year: 2022,
    mileage: 10.2,
    transmission: 'manual',
    image: '/api/placeholder/400/300',
    features: ['Comfortable Seating', 'AC', 'Storage Compartments', 'Safety Belts', 'Emergency Kit'],
    description: 'Reliable staff transportation bus with comfortable seating and essential amenities.',
    availability: 'available'
  },
  {
    id: '5',
    name: 'Force Traveller School Bus',
    type: 'school',
    fuelType: 'diesel',
    seats: 26,
    price: 950000,
    year: 2023,
    mileage: 11.5,
    transmission: 'manual',
    image: '/api/placeholder/400/300',
    features: ['Compact Design', 'Easy Maneuverability', 'Safety Rails', 'Emergency Exit', 'Student Alerts'],
    description: 'Compact school bus perfect for narrow roads and smaller student groups.',
    availability: 'available'
  },
  {
    id: '6',
    name: 'Scania Tourist Bus',
    type: 'tourist',
    fuelType: 'diesel',
    seats: 55,
    price: 5200000,
    year: 2024,
    mileage: 5.9,
    transmission: 'automatic',
    image: '/api/placeholder/400/300',
    features: ['Premium Interior', 'Panoramic Windows', 'Climate Control', 'Entertainment', 'Refreshment Area'],
    description: 'High-end tourist bus with premium features for luxury travel experiences.',
    availability: 'reserved'
  },
  {
    id: '7',
    name: 'Eicher Staff Bus',
    type: 'staff',
    fuelType: 'cng',
    seats: 30,
    price: 1100000,
    year: 2023,
    mileage: 13.2,
    transmission: 'manual',
    image: '/api/placeholder/400/300',
    features: ['CNG Fuel', 'Economical', 'Durable', 'Low Maintenance', 'Comfortable Seats'],
    description: 'Cost-effective CNG powered staff bus with excellent fuel efficiency.',
    availability: 'available'
  },
  {
    id: '8',
    name: 'BharatBenz School Bus',
    type: 'school',
    fuelType: 'diesel',
    seats: 50,
    price: 1950000,
    year: 2024,
    mileage: 9.1,
    transmission: 'manual',
    image: '/api/placeholder/400/300',
    features: ['Advanced Safety', 'Student Tracking', 'CCTV', 'GPS', 'Emergency Communication'],
    description: 'Modern school bus with advanced safety features and technology integration.',
    availability: 'available'
  },
  {
    id: '9',
    name: 'Isuzu Tourist Coach',
    type: 'tourist',
    fuelType: 'diesel',
    seats: 42,
    price: 3800000,
    year: 2023,
    mileage: 7.5,
    transmission: 'automatic',
    image: '/api/placeholder/400/300',
    features: ['Luxury Seating', 'AC', 'Entertainment', 'WiFi', 'USB Ports', 'Reading Lights'],
    description: 'Comfortable tourist coach with modern amenities for group travel.',
    availability: 'available'
  },
  {
    id: '10',
    name: 'Tata Electric School Bus',
    type: 'school',
    fuelType: 'electric',
    seats: 40,
    price: 3200000,
    year: 2024,
    mileage: 0,
    transmission: 'automatic',
    image: '/api/placeholder/400/300',
    features: ['Zero Emissions', 'Silent Operation', 'Fast Charging', 'Smart Monitoring', 'Eco-Friendly'],
    description: 'Future-ready electric school bus with zero emissions and advanced technology.',
    availability: 'available'
  },
  {
    id: '11',
    name: 'SML Isuzu Prestige School Bus',
    type: 'school',
    fuelType: 'diesel',
    seats: 52, // max capacity based on seating layout (3x2 School Seats 51+D / 2x2 High Head Rest 40+D)
    price: 0, // not mentioned in brochure
    year: 2023,
    mileage: 0, // not mentioned
    transmission: 'manual',
    image: '/api/placeholder/400/300',
    engine: {
      description: 'BS-VI SLT6',
      displacement: '3455 cc',
      type: '4-Cylinder In-line, Common Rail Direct Injection with Diesel Turbocharger and Intercooler',
      power: '75 kW @ 2600 rpm',
      torque: '315 Nm @ 1400 - 1600 rpm'
    },
    clutch: 'Single Plate Dry Diaphragm type',
    suspension: 'Semielliptical with Multileaf Springs',
    wheelBaseOptions: ['2515 mm', '2815 mm', '3335 mm', '4240 mm', '4760 mm', '5100 mm'],
    busWidth: '2100 mm',
    seatingLayouts: {
      '3x3 School Seats': [],
      '3x2 School Seats': ['21+D', '24+D', '26+D', '31+D', '41+D', '46+D', '51+D'],
      '2x2 High Head Rest': ['16+D', '18+D', '20+D', '24+D', '32+D', '36+D', '40+D']
    },
    tyres: {
      noOfTyres: ['6+1', '4+1'],
      tyreSize: ['7.50X16-16PR', '8.25X16-16PR']
    },
    powerSteering: 'Optional',
    brakes: ['Hydraulic', 'Air Brake'],
    features: [
      // Safety
      'Anti-Skid Floor',
      'Window Rail Guard',
      'Emergency Exit Door',
      'Fire Extinguisher & First Aid Kit',
      // Comfort
      'Lower Foot Step',
      'Comfortable Seats with Padded Arm Rest',
      'Dedicated Racks for School Bags & Bottle Hooks',
      'Hat-Racks & Grab Handles',
      // Economy
      'Equipped with efficient BS-VI Engine',
      'Box-type Chassis for Longevity',
      'Long Lasting Robust Body',
      'Low Maintenance'
    ],
    description:
      'Prestige School Bus by SML Isuzu is AIS 052 and AIS 063 approved, equipped with BS-VI SLT6 diesel engine, robust suspension, multiple seating configurations, and strong safety features for schools.',
    availability: 'available'
  },
  {
    id: '12',
    name: 'SML Isuzu LX Executive School Bus',
    type: 'school',
    fuelType: 'diesel',
    seats: 52, // max capacity based on seating layout (3x2 School Bus Seats 51+1+D / 2x2 Semi Reclining Highback Seats 37+1+1)
    price: 0, // not mentioned in brochure
    year: 2023,
    mileage: 0, // not mentioned
    transmission: 'manual',
    image: '/api/placeholder/400/300',
    engine: {
      description: 'BS-VI SLT6',
      displacement: '3455 cc',
      type: '4-Cylinder In-line CRDI (Common Rail Direct Injection) Diesel Turbocharger with Intercooler',
      power: '75 kW @ 2600 rpm / 85 kW @ 2600 rpm*',
      torque: '315 Nm @ 1400 - 1600 rpm / 400 Nm @ 1400 - 1600 rpm*'
    },
    clutch: 'Single Plate Dry Diaphragm type',
    suspension: 'Semi-Elliptical with Multi-leaf Springs',
    wheelBaseOptions: ['4240 mm', '5100 mm'],
    busWidth: '2262 mm',
    // seatingLayouts: {
    //   '3x2 School Bus Seats': ['40+1', '42+1', '49+1+1', '51+1+1'],
    //   '2x2 Semi Reclining Highback Seats': ['27+1+1', '29+1+1', '35+1+1', '37+1+1']
    // },
    tyres: {
      noOfTyres: ['6+1'],
      tyreSize: ['8.25X16-16PR']
    },
    powerSteering: 'Recirculating Ball Type - Power Steering',
    brakes: [
      'Vacuum Assisted Dual Circuit Pneumatic (Air Brakes)',
      'Mechanical Expanding Type Parking Brake on Rear Wheels',
      'ABS (Anti-lock Braking System)',
      'Auto Slack Adjustor'
    ],
    features: [
      // Safety
      'School Bus Insignia',
      'Windows Rail Guards in Sliding Glass Variant',
      'Emergency Exit',
      'Reverse Parking Sensor with Camera',
      'First Aid Kit & Fire Extinguisher',
      'Anti-Skid Floor',
      // Comfort
      'Comfortable Seats with Padded Arm Rest & Semi-Reclining',
      'Dedicated Racks for School Bags & Bottle Hooks',
      'Driver Controlled Electro-Pneumatic Door with Buzzer Sound',
      'Low Footstep for Easy Entry & Exit',
      'Fully Air Conditioned Bus with Individual AC Louvers & Reading Lamps',
      // Economy
      'Equipped with Efficient BS-VI Engine'
    ],
    description:
      'LX Executive School Bus by SML Isuzu is designed with advanced safety features, BS-VI SLT6 engine, robust suspension, child-friendly interiors, and multiple seating configurations. It ensures comfort, premium feel, and compliance with school safety standards.',
    availability: 'available'
  },
  {
    id: '3',
    name: 'SML Isuzu GS School Bus',
    type: 'school',
    fuelType: 'diesel',
    seats: 59, // max seating configuration (3x3 School Seats 59+D)
    price: 0, // not provided
    year: 2023,
    mileage: 0, // not mentioned
    // transmission: '5 Forward + 1 Reverse (Manual)',
    image: '/api/placeholder/400/300',
    // engine: {
    //   model: 'SLT6, BS-VI Compliant',
    //   type: 'Diesel Engine, Common Rail Direct Injection, Turbocharged with Intercooler (In-line 4 cylinders)',
    //   displacement: '3455 cc',
    //   power: '75 kW @ 2600 rpm',
    //   torque: '315 Nm @ 1400 - 1600 rpm'
    // },
    // electricals: {
    //   systemVoltage: '12 V',
    //   batteryRating: '12 V, 70 A/h'
    // },
    // steering: {
    //   powerSteering: 'Yes',
    //   type: 'Recirculating Ball Type'
    // },
    // driveTrain: {
    //   clutchType: 'Dia Dry Single Plate',
    //   transmission: '5 Forward + 1 Reverse'
    // },
    // suspension: {
    //   type: 'Semi-elliptical with Anti Roll Bar',
    //   shockAbsorbers: 'Hydraulic Double Acting & Telescopic Dampers (Front & Rear)'
    // },
    // brakes: {
    //   serviceBrakes: 'Dual Circuit Vacuum Assisted Pneumatic (Air Brakes)',
    //   parkingBrake: 'Mechanical Expanding Type on Rear Wheels',
    //   autoSlackAdjuster: 'Yes',
    //   abs: 'Yes'
    // },
    // tyres: {
    //   noOfTyres: '6 + 1',
    //   tyreSize: '8.25x16'
    // },
    // fuelCapacity: {
    //   dieselTank: '90 litres (180 litres optional)',
    //   adblueTank: '15 litres'
    // },
    // safety: {
    //   fireDetectionSuppression: 'Yes (AIS 153)',
    //   panicSwitches: 'Yes (AIS 140)'
    // },
    // dimensionsSeats: {
    //   wheelBase: ['3335 mm', '4240 mm', '5100 mm'],
    //   groundClearance: '228 mm',
    //   seating: {
    //     '3x2 School Seats': ['30+D', '42+D', '50+D / 52+D'],
    //     '2x2 School Seats': ['24+D', '32+D / 31+D', '40+D'],
    //     '2x2 High Head Rest': ['22+D', '30+D', '38+D'],
    //     '3x3 School Seats': ['35+D', '47+D', '59+D']
    //   }
    // },
    features: [
      // Prominent Features
      'Equipped with efficient BS-VI Engine',
      'Anti Skid Floor',
      'Low Footstep for Easy Entry/Exit',
      '3 Guard Rails on Windows',
      'School Bus Insignia',
      'Comfortable Seats with Arm Rests',
      'Children’s Bags Space Under Seat Cushion',
      'Grab Handle with every seat',
      'Wide Full Length Hatrack',
      'Anti-Bacterial Laminated Fire Retardant Upholstery',
      'Panic Switch with Every Seat',
      'Aesthetically Designed Driver Cabin with Smartly placed Controls',
      'Side Peep Window',
      'Emergency Exit',
      'Fire Extinguisher & First Aid Kit'
    ],
    description:
      'The GS School Bus from SML Isuzu is a BS-VI compliant diesel school bus equipped with SLT6 engine, advanced safety systems including fire detection and suppression, panic switches, ABS, and dual circuit air brakes. It offers multiple seating layouts (up to 59+D), comfortable interiors with dedicated storage, anti-skid flooring, and long-lasting build for safe and efficient school transportation.',
    availability: 'available'
  }
];
