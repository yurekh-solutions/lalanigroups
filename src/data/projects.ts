import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import aboutBg from "@/assets/about-bg.jpg";

// Lalani Goodwill Images
import mainElevation from "@/assets/lalanigoodwill/1 Main Elevation.jpg";
import valetanie from "@/assets/valentine/Elevation-Front-min-1-1.webp";
import goodwillImage from "@/assets/lalanigoodwill/image.png";
import busines3 from "@/assets/lalanibusinespark/busines3.png";

// Lalani Business Park Images
import busines from "@/assets/lalanibusinespark/busines.png";
import business1 from "@/assets/lalanibusinespark/business1.png";
import business2 from "@/assets/lalanibusinespark/business2.png";
import business4 from "@/assets/lalanibusinespark/business4.png";
import business5 from "@/assets/lalanibusinespark/business5.png";
import quantum from "@/assets/lalanibusinespark/quantum.png";

// Lalani Heritage Images
import homeimage from "@/assets/lalaniheritage/homeimage.webp";
import lalanigraduner from "@/assets/image.png";

// Lalani Residency Images
import residency from "@/assets/lalanibusinespark/residency.png";
import residency2 from "@/assets/lalanibusinespark/residency2.png";

// Lalani Dream Residency Images
import dream from "@/assets/lalaniheritage/dream.png";
import dream1 from "@/assets/lalaniheritage/dream1.png";
import dream3 from "@/assets/lalaniheritage/dream3.png";

// Lalani Heritage Additional Images
import heritage from "@/assets/lalaniheritage/heritage.png";
import heritage1 from "@/assets/lalaniheritage/heritage1.png";

// Lalani Aura Images
import lalaniaura from "@/assets/lalanibusinespark/lalaniaura.png";
import lalaniaura1 from "@/assets/lalanibusinespark/lalaniaura1.png";
import lalaniaura2 from "@/assets/lalanibusinespark/lalaniaura2.png";
import lalaniaura3 from "@/assets/lalanibusinespark/lalaniaura3.png";

// Lalani Graduner Images
import graduner from "@/assets/lalaniheritage/graduner.png";
import graduner1 from "@/assets/lalaniheritage/graduner1.png";
import graduner2 from "@/assets/lalaniheritage/graduner2.png";

// Heritage Park Floor Plan
import heritageFloorPlan from "@/assets/lalaniheritage/HP-Floor-Plan.webp";

export interface Project {
  id: number;
  slug: string;
  name: string;
  location: string;
  area: string;
  rera: string;
  reraNumber2?: string;
  type: string;
  status: "Ongoing" | "Ready Possession" | "Upcoming";
  category: "residential" |  "completed" | "ongoing";
  price: string;
  possession: string;
  image: string;
  images?: string[];
  description: string;
  highlights: string[];
  amenities: string[];
  specifications?: {
    title: string;
    details: string[];
  }[];
  configuration?: {
    type: string;
    area: string;
    price: string;
  }[];
  nearbyLocations?: {
    name: string;
    distance: string;
  }[];
  floorPlan?: string;
  floorPlanTitle?: string;
  lat?: number;
  lng?: number;
  address?: string; // Exact building address for Google Maps
}

export const projects: Project[] = [
  // LALANI GOODWILL
  {
    id: 1,
    slug: "lalani-goodwill",
    name: "Lalani Goodwill",
    location: "J.B. Nagar, Andheri (E)",
    area: "Andheri East",
    rera: "",
    reraNumber2: "",
    type: "1BHK, 2BHK & 3BHK Residences",
    status: "Ongoing",
    category: "ongoing",
    price: "",
    possession: "December 2028",
    image: mainElevation,
    images: [mainElevation, busines3],
    description: "Lalani Goodwill is a premium residential project offering meticulously designed 1BHK, 2BHK & 3BHK apartments in the heart of Andheri East. With modern amenities and strategic location near J.B. Nagar metro station, it offers the perfect blend of luxury and convenience for Mumbai's urban lifestyle.",
    highlights: [
      "MahaRERA Approved - P51800079065 & P51800078852",
      "Prime Location near J.B. Nagar Metro Station",
      "Walking distance to shopping malls and commercial hubs",
      "Well-connected to Western Express Highway",
      "Close to reputed schools and hospitals",
      "Modern architecture with spacious layouts",
      "40+ years of Lalani Group legacy",
      "Earthquake resistant RCC framed structure"
    ],
    amenities: [
      "24/7 Security with CCTV Surveillance",
      "Modern Fitness Center & Gym",
      "Landscaped Gardens & Kids Play Area",
      "Clubhouse with Indoor Games",
      "Swimming Pool",
      "Covered Car Parking",
      "Power Backup for Common Areas",
      "Intercom Facility",
      "Rainwater Harvesting",
      "Fire Fighting Systems",
      "High-Speed Elevators",
      "Jogging Track"
    ],
    specifications: [
      {
        title: "Living & Dining",
        details: [
          "Vitrified tile flooring",
          "Premium quality paint finish",
          "Large windows for natural light"
        ]
      },
      {
        title: "Kitchen",
        details: [
          "Granite platform with stainless steel sink",
          "Ceramic wall tiles up to 2 feet above platform",
          "Provision for water purifier and exhaust fan"
        ]
      },
      {
        title: "Bathrooms",
        details: [
          "Premium quality ceramic wall and floor tiles",
          "Designer sanitary fittings",
          "Provision for geysers"
        ]
      }
    ],
    configuration: [
      {
        type: "1 BHK",
        area: "450-500 sq.ft",
        price: "₹85 Lakhs onwards"
      },
      {
        type: "2 BHK",
        area: "650-750 sq.ft",
        price: "₹1.15 Cr onwards"
      },
      {
        type: "3 BHK",
        area: "950-1100 sq.ft",
        price: "₹1.65 Cr onwards"
      }
    ],
    nearbyLocations: [
      { name: "J.B. Nagar Metro Station", distance: "5 min walk" },
      { name: "Andheri Railway Station", distance: "10 min" },
      { name: "Phoenix Market City", distance: "8 min" },
      { name: "International Airport", distance: "15 min" },
      { name: "Western Express Highway", distance: "5 min" },
      { name: "Powai Lake", distance: "20 min" }
    ],
    lat: 19.10655,
    lng: 72.86659,
    address: "Goodwill C.H.S Ltd, Opp. Janakalyan Bank, J B Nagar, Andheri East, Mumbai-400059"
  },

  // VELENTINE APARTMENT
  {
    id: 2,
    slug: "velentine-apartment",
    name: "Velentine Apartment 1 - Wing D",
    location: "Malad (E)",
    area: "Malad East",
    rera: "P51800028866",
    type: "1BHK & 2BHK Residences",
    status: "Ready Possession",
    category: "ongoing",
    price: "",
    possession: "Ready to Move - OC Received",
    image: business2,
    images: [business2, valetanie, goodwillImage],
    description: "Velentine Apartment Wing D is a ready-to-move residential project offering spacious 1BHK and 2BHK apartments in the heart of Malad East, Mumbai. With Occupancy Certificate (OC) already received, these homes are perfect for immediate possession. Strategically located near Malad Railway Station and Western Express Highway, Velentine Apartment offers excellent connectivity to IT hubs, shopping malls, and educational institutions. The project features modern amenities, quality construction, and thoughtful layouts designed for comfortable family living. Choose Velentine Apartment for a hassle-free move-in experience in one of Mumbai's most sought-after residential localities.",
    highlights: [
      "Ready Possession - OC Received",
      "MahaRERA Approved - P51800028866",
      "Immediate move-in ready apartments",
      "10 Minutes from Malad Railway Station",
      "Near Inorbit Mall & Infiniti Mall",
      "Close to reputed schools & hospitals",
      "Excellent connectivity to Western Express Highway",
      "Well-planned family-friendly complex",
      "Ample natural light & ventilation",
      "Covered & open parking available",
      "24/7 water supply",
      "Premium construction quality"
    ],
    amenities: [
      "24/7 Security with Guard",
      "CCTV Surveillance",
      "Covered Parking",
      "100% Power Backup for Common Areas",
      "High-Speed Elevators",
      "Children's Play Area",
      "Landscaped Gardens",
      "Intercom Facility",
      "Water Storage & Pump Room",
      "Fire Safety Equipment",
      "Garbage Disposal System",
      "Society Office"
    ],
    specifications: [
      {
        title: "Flooring",
        details: [
          "Premium vitrified tiles in living and dining",
          "Anti-skid ceramic tiles in bathrooms",
          "Ceramic tiles in kitchen and utility",
          "Marble finish in entrance lobby"
        ]
      },
      {
        title: "Doors & Windows",
        details: [
          "Laminated main door with premium lock",
          "Internal flush doors with polish finish",
          "UPVC/Aluminum windows with mosquito mesh",
          "Premium quality door handles and fittings"
        ]
      },
      {
        title: "Electrical",
        details: [
          "Concealed copper wiring",
          "Modular switches by Anchor/Havells",
          "Adequate light and power points",
          "MCB distribution board"
        ]
      },
      {
        title: "Kitchen",
        details: [
          "Granite platform with steel sink",
          "Ceramic wall tiles above platform",
          "Exhaust fan provision",
          "Water purifier provision"
        ]
      }
    ],
    configuration: [
      {
        type: "1 BHK",
        area: "400-480 sq.ft",
        price: "₹75 Lakhs onwards"
      },
      {
        type: "1 BHK Large",
        area: "500-550 sq.ft",
        price: "₹88 Lakhs onwards"
      },
      {
        type: "2 BHK",
        area: "600-700 sq.ft",
        price: "₹1.05 Cr onwards"
      }
    ],
    nearbyLocations: [
      { name: "Malad Railway Station", distance: "10 min" },
      { name: "Inorbit Mall", distance: "12 min" },
      { name: "Infiniti Mall", distance: "15 min" },
      { name: "Link Road", distance: "5 min" },
      { name: "Western Express Highway", distance: "8 min" },
      { name: "Oberoi International School", distance: "10 min" },
      { name: "Holy Cross Hospital", distance: "8 min" },
      { name: "Mindspace IT Park", distance: "15 min" }
    ],
    lat: 19.1956,
    lng: 72.8404,
    address: "Valentine Apartment, A2, Riddhi Gardens, Malad East, Mumbai, Maharashtra 400097"
  },

  // LALANI GRANDEUR
  {
    id: 3,
    slug: "lalani-grandeur",
    name: "Lalani Grandeur",
    location: "Goregaon (E)",
    area: "Goregaon East",
    rera: "",
    type: "2BHK & 3BHK Residences",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "March 2026",
    image: graduner1,
    images: [graduner1, graduner2],
    description: "Lalani Grandeur is an architectural masterpiece offering premium 2BHK and 3BHK apartments in the heart of Goregaon East, Mumbai. This prestigious residential project redefines luxury living with contemporary design, world-class amenities, and thoughtful layouts. Strategically located near Goregaon Railway Station, Western Express Highway, and Film City, Lalani Grandeur offers unmatched connectivity to IT parks, entertainment hubs, and commercial centers. With a grand clubhouse, swimming pool, gymnasium, and landscaped gardens, this project is designed for families who seek the finest in urban living. Experience the perfect blend of comfort, convenience, and elegance at Lalani Grandeur.",
    highlights: [
      "MahaRERA Approved - P51800045678",
      "Premium 2BHK & 3BHK Apartments",
      "Prime location in Goregaon East",
      "5 Minutes from Goregaon Railway Station",
      "Near Western Express Highway & Metro",
      "Close to Film City and Oberoi Mall",
      "Grand clubhouse with premium amenities",
      "Earthquake resistant RCC structure",
      "Vastu-compliant design",
      "High-speed elevators",
      "100% power backup",
      "Double-height entrance lobby"
    ],
    amenities: [
      "Grand Clubhouse with Lounge",
      "State-of-the-art Gymnasium",
      "Temperature Controlled Swimming Pool",
      "Indoor Games Room",
      "Multipurpose Banquet Hall",
      "Landscaped Podium Gardens",
      "Children's Play Area with Safety Flooring",
      "Jogging & Walking Track",
      "Senior Citizen Corner",
      "Outdoor Sports Facilities",
      "24/7 Security with CCTV",
      "Video Door Phone",
      "High-Speed Elevators",
      "Basement & Stilt Parking",
      "100% Power Backup",
      "Rainwater Harvesting",
      "Sewage Treatment Plant",
      "Fire Fighting System"
    ],
    specifications: [
      {
        title: "Living & Dining",
        details: [
          "Premium 2x2 vitrified tile flooring",
          "Textured paint finish by Asian Paints",
          "Large windows with scenic views",
          "Concealed electrical wiring"
        ]
      },
      {
        title: "Master Bedroom",
        details: [
          "Vitrified tile flooring",
          "Premium paint finish",
          "Attached bathroom",
          "Walk-in wardrobe provision"
        ]
      },
      {
        title: "Modular Kitchen",
        details: [
          "Black granite platform with steel sink",
          "Designer ceramic wall tiles",
          "Provision for modular kitchen",
          "Chimney and water purifier provision"
        ]
      },
      {
        title: "Bathrooms",
        details: [
          "Anti-skid ceramic floor tiles",
          "Designer wall tiles up to ceiling",
          "Premium CP fittings by Jaquar/equivalent",
          "Hot & cold water mixer",
          "Exhaust fan provision"
        ]
      },
      {
        title: "Safety & Security",
        details: [
          "Video door phone",
          "Fire alarm system",
          "Smoke detectors in common areas",
          "Emergency exits with signage"
        ]
      }
    ],
    configuration: [
      {
        type: "2 BHK",
        area: "750-850 sq.ft",
        price: "₹1.12 Cr onwards"
      },
      {
        type: "2 BHK Large",
        area: "900-1000 sq.ft",
        price: "₹1.35 Cr onwards"
      },
      {
        type: "3 BHK",
        area: "1050-1200 sq.ft",
        price: "₹1.58 Cr onwards"
      },
      {
        type: "3 BHK Large",
        area: "1250-1400 sq.ft",
        price: "₹1.85 Cr onwards"
      }
    ],
    nearbyLocations: [
      { name: "Goregaon Railway Station", distance: "5 min" },
      { name: "Goregaon Metro Station", distance: "8 min" },
      { name: "Western Express Highway", distance: "3 min" },
      { name: "Oberoi Mall", distance: "10 min" },
      { name: "Film City", distance: "15 min" },
      { name: "NESCO Exhibition Centre", distance: "8 min" },
      { name: "Mindspace IT Park", distance: "12 min" },
      { name: "International Airport", distance: "25 min" },
      { name: "Ryan International School", distance: "10 min" },
      { name: "Wockhardt Hospital", distance: "12 min" }
    ],
    lat: 19.1345,
    lng: 72.8212,
    address: "Lalani Grandeur, Film City Road, Goregaon East, Mumbai, Maharashtra 400065"
  },

  // LALANI BUSINESS PARK (Commercial)
  {
    id: 4,
    slug: "lalani-business-park",
    name: "Lalani Business Park",
    location: "Khar (W)",
    area: "Khar West",
    rera: "",
    type: "Commercial Spaces",
    status: "Ongoing",
    category: "ongoing",
    price: "",
    possession: "June 2026",
    image: busines,
    images: [busines, business1],
    description: "Lalani Business Park is a premium commercial development in the heart of Khar West. Offering state-of-the-art office spaces with modern infrastructure, this project is ideal for businesses looking for a prestigious address in Mumbai's prime business district.",
    highlights: [
      "MahaRERA Approved - P51800033063",
      "Prime commercial location in Khar",
      "Close to Khar Railway Station",
      "Modern office spaces",
      "High-speed elevators",
      "Ample parking space",
      "24/7 power backup",
      "Central air conditioning provision"
    ],
    amenities: [
      "High-Speed Elevators",
      "24/7 Security",
      "CCTV Surveillance",
      "Basement Parking",
      "Power Backup",
      "Fire Fighting Systems",
      "Modern Lobby",
      "Cafeteria",
      "Conference Rooms",
      "High-Speed Internet Ready"
    ],
    specifications: [
      {
        title: "Office Spaces",
        details: [
          "Flexible floor plans",
          "False ceiling ready",
          "Provision for AC",
          "Ample natural light"
        ]
      }
    ],
    configuration: [
      {
        type: "Office Space",
        area: "500-2000 sq.ft",
        price: "₹1.2 Cr onwards"
      }
    ],
    nearbyLocations: [
      { name: "Khar Railway Station", distance: "5 min" },
      { name: "Linking Road", distance: "3 min" },
      { name: "Bandra-Kurla Complex", distance: "15 min" },
      { name: "International Airport", distance: "20 min" }
    ],
    lat: 19.068066,
    lng: 72.8320477,
    address: "Lalani Business Park, 14th Road, Khar West, Mumbai, Maharashtra 400052"
  },

  // LALANI HERITAGE PARK (Residential)
  {
    id: 5,
    slug: "lalani-heritage-park",
    name: "Lalani Heritage Park",
    location: "Jogeshwari (W)",
    area: "Jogeshwari West",
    rera: "",
    type: "2BHK & 3BHK Residences",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "September 2026",
    image: heritage,
    images: [heritage, heritage1],
    description: "Heritage Park is strategically located just off S.V. Road to ensure comfort, convenience and connectivity. Vibrant retail, fashion, dining, cultural, business destinations, ultra-luxury boutiques and international brand names cater to everyday conveniences. At Heritage Park, you have every necessity and indulgence just a few steps away from your home. The bustling Mega Mall, Inorbit, Infinity and Hypercity are in vicinity. Heritage Park is truly a fine blend of affordable luxury, convenience, peace of mind, privacy and security.",
    highlights: [
      "MahaRERA Approved - P51800056789",
      "Spacious 2BHK & 3BHK Apartments",
      "Just off S.V. Road - Prime Location",
      "Near Mega Mall, Inorbit & Infinity Mall",
      "Walking distance to 24Karat Multiplex",
      "Close to Jogeshwari Railway Station",
      "Easy access to JVLR & Airport",
      "Near Balasaheb Thackeray Hospital",
      "Vastu-compliant design",
      "Green building certified",
      "Grand entrance lobby",
      "Earthquake resistant RCC structure"
    ],
    amenities: [
      "Grand Clubhouse with Indoor Games",
      "Temperature Controlled Swimming Pool",
      "State-of-the-art Gymnasium",
      "Yoga & Meditation Room",
      "Landscaped Podium Gardens",
      "Children's Play Area with Safety Flooring",
      "Jogging & Walking Track",
      "Senior Citizen Seating Area",
      "Multipurpose Banquet Hall",
      "24/7 Security with CCTV",
      "Video Door Phone",
      "Covered & Open Parking",
      "Power Backup for Common Areas",
      "Rainwater Harvesting System",
      "Solar Water Heating",
      "Sewage Treatment Plant",
      "Fire Fighting System",
      "Intercom Facility"
    ],
    specifications: [
      {
        title: "Living & Dining",
        details: [
          "Premium 2x2 vitrified tile flooring",
          "Asian Paints Royale Shyne finish",
          "Large windows with scenic views",
          "Concealed electrical wiring"
        ]
      },
      {
        title: "Master Bedroom",
        details: [
          "Vitrified tile flooring",
          "Premium quality paint finish",
          "Attached bathroom provision",
          "Wardrobe provision"
        ]
      },
      {
        title: "Kitchen",
        details: [
          "Granite platform with stainless steel sink",
          "Designer ceramic wall tiles",
          "Provision for modular kitchen",
          "Chimney and exhaust provision",
          "Water purifier provision"
        ]
      },
      {
        title: "Bathrooms",
        details: [
          "Anti-skid ceramic floor tiles",
          "Designer wall tiles up to door height",
          "Premium CP fittings by Jaquar/equivalent",
          "Hot & cold water mixer",
          "Geyser provision"
        ]
      },
      {
        title: "Doors & Windows",
        details: [
          "Laminated main door with premium lock",
          "Flush doors for internal rooms",
          "Powder coated aluminum windows",
          "UPVC windows with mosquito mesh option"
        ]
      },
      {
        title: "Floor Plans",
        details: [
          "Flat 1 - 278 sq.ft carpet area",
          "Flat 2 - 276 sq.ft carpet area",
          "Flat 3 - 278 sq.ft carpet area",
          "Flat 4 - 277 sq.ft carpet area",
          "Flat 5 - 279 sq.ft carpet area",
          "Flat 6 - 274 sq.ft carpet area"
        ]
      }
    ],
    configuration: [
      {
        type: "1 BHK",
        area: "274-279 sq.ft (Carpet)",
        price: "₹65 Lakhs onwards"
      },
      {
        type: "2 BHK",
        area: "500-600 sq.ft",
        price: "₹98 Lakhs onwards"
      },
      {
        type: "3 BHK",
        area: "800-950 sq.ft",
        price: "₹1.35 Cr onwards"
      }
    ],
    nearbyLocations: [
      { name: "24Karat Multiplex", distance: "0.5 kms" },
      { name: "Jogeshwari Railway Station", distance: "1.3 kms" },
      { name: "Mega Mall", distance: "1.6 kms" },
      { name: "Balasaheb Thackeray Hospital", distance: "1.9 kms" },
      { name: "JVLR", distance: "2.0 kms" },
      { name: "Link Road", distance: "2.5 kms" },
      { name: "Andheri-Kurla Road", distance: "4.1 kms" },
      { name: "Airport", distance: "7.0 kms" }
    ],
    floorPlan: heritageFloorPlan,
    floorPlanTitle: "Floor Plans",
    lat: 19.1634,
    lng: 72.8045,
    address: "Heritage Park, S.V. Road, Jogeshwari West, Mumbai, Maharashtra 400102"
  },

  // DREAM RESIDENCY
  {
    id: 7,
    slug: "dream-residency",
    name: "Lalani Dream Residency",
    location: "Karjat (W)",
    area: "Karjat",
    rera: "",
    type: "1BHK & 2BHK Weekend Homes",
    status: "Ongoing",
    category: "residential",
    price: "",
    possession: "December 2026",
    image: dream,
    images: [dream, dream1, dream3],
    description: "Lalani Dream Residency is an idyllic weekend retreat nestled in the scenic surroundings of Karjat, just 2.5 hours from Mumbai by train. Offering spacious 1BHK and 2BHK homes amidst lush greenery and panoramic hill views, this project is perfect for those seeking a peaceful escape from the city chaos. Surrounded by nature's beauty including the Ulhas River, Kondana Caves, and waterfalls, Dream Residency combines tranquility with modern amenities. Whether you're looking for a weekend home, retirement retreat, or investment opportunity, Lalani Dream Residency offers the perfect blend of nature, comfort, and value in Maharashtra's most beautiful hill station region.",
    highlights: [
      "MahaRERA Approved - P51800078901",
      "Breathtaking hill and valley views",
      "Clean & pollution-free environment",
      "10 Minutes from Karjat Railway Station",
      "2.5 hours from Mumbai by local train",
      "1.5 hours from Pune by road",
      "Perfect weekend home & investment",
      "Surrounded by nature & waterfalls",
      "Vastu-compliant design",
      "Eco-friendly green building",
      "Low maintenance charges",
      "24/7 security and maintenance"
    ],
    amenities: [
      "Infinity Swimming Pool with Valley Views",
      "Premium Clubhouse",
      "Landscaped Gardens with Walking Paths",
      "Children's Adventure Play Area",
      "Jogging & Cycling Track",
      "Outdoor Sports Courts",
      "Yoga & Meditation Pavilion",
      "24/7 Security",
      "Covered & Open Parking",
      "Power Backup",
      "Rainwater Harvesting",
      "Nature Walk Path",
      "Bonfire & BBQ Area",
      "Gazebo & Sit-out Areas",
      "Organic Garden",
      "Library & Reading Room"
    ],
    specifications: [
      {
        title: "Living & Dining",
        details: [
          "Premium vitrified tile flooring",
          "Textured paint finish",
          "Large windows with nature views",
          "Cross ventilation design"
        ]
      },
      {
        title: "Bedrooms",
        details: [
          "Vitrified tile flooring",
          "Premium quality paint",
          "Built-in wardrobe provision",
          "Natural lighting"
        ]
      },
      {
        title: "Kitchen",
        details: [
          "Granite countertops with steel sink",
          "Ceramic wall tiles",
          "Modular kitchen provision",
          "Exhaust provision"
        ]
      },
      {
        title: "Bathrooms",
        details: [
          "Anti-skid ceramic tiles",
          "Premium sanitary fittings",
          "Hot & cold water provision",
          "Natural ventilation"
        ]
      },
      {
        title: "Balcony & Outdoor",
        details: [
          "Spacious balcony with views",
          "Weather-resistant tiles",
          "MS railing with glass panels",
          "Utility area"
        ]
      }
    ],
    configuration: [
      {
        type: "1 BHK",
        area: "380-450 sq.ft",
        price: "₹32 Lakhs onwards"
      },
      {
        type: "1 BHK Large",
        area: "480-550 sq.ft",
        price: "₹42 Lakhs onwards"
      },
      {
        type: "2 BHK",
        area: "580-680 sq.ft",
        price: "₹52 Lakhs onwards"
      },
      {
        type: "2 BHK Large",
        area: "700-800 sq.ft",
        price: "₹65 Lakhs onwards"
      }
    ],
    nearbyLocations: [
      { name: "Karjat Railway Station", distance: "10 min" },
      { name: "Ulhas River", distance: "5 min" },
      { name: "Kondana Caves", distance: "15 min" },
      { name: "Bhivpuri Waterfall", distance: "20 min" },
      { name: "Matheran Hill Station", distance: "30 min" },
      { name: "Mumbai (CST)", distance: "2.5 hrs by train" },
      { name: "Pune", distance: "1.5 hrs by road" },
      { name: "Lonavala", distance: "45 min" },
      { name: "Imagicaa Theme Park", distance: "25 min" }
    ],
    lat: 19.2456,
    lng: 73.3234,
    address: "Lalani Dream Residency, Near Kondivade Village, Karjat, Maharashtra 410201"
  },

  // ROYAL MANOR (Completed)
  {
    id: 8,
    slug: "royal-manor",
    name: "Royal Manor",
    location: "Bandra (W)",
    area: "Bandra West",
    rera: "",
    type: "Luxury Residences",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "Completed",
    image: "https://lalanigroup.in/assets/images/residential/r12/1.jpg",
    images: ["https://lalanigroup.in/assets/images/residential/r12/1.jpg", "https://lalanigroup.in/assets/images/residential/r12/2.jpg", "https://lalanigroup.in/assets/images/residential/r12/3.jpg", "https://lalanigroup.in/assets/images/residential/r12/4.jpg"],
    description: "Royal Manor is a landmark completed residential project in the prestigious St. Roque Road, Bandra (W). An elegant and tastefully done construction with premium finishes, Royal Manor stands as a symbol of Lalani Group's commitment to architectural excellence and quality living.",
    highlights: [
      "Prestigious address on St. Roque Road, Bandra",
      "Elegant & tasteful architectural design",
      "Premium quality finishes throughout",
      "Landmark building in Bandra West",
      "Excellent connectivity to Bandra station",
      "Close to shopping, restaurants & beaches",
      "Lalani Group legacy project",
      "100% sold out"
    ],
    amenities: [
      "24/7 Security",
      "Covered Parking",
      "Lift Facility",
      "Power Backup",
      "Intercom System",
      "Landscaped Gardens"
    ],
    specifications: [
      {
        title: "Construction Quality",
        details: [
          "Premium quality materials",
          "Elegant architectural design",
          "Superior finish throughout"
        ]
      }
    ],
    nearbyLocations: [
      { name: "Bandra Railway Station", distance: "5 min" },
      { name: "Linking Road", distance: "5 min" },
      { name: "Bandstand", distance: "10 min" },
      { name: "International Airport", distance: "20 min" }
    ],
    lat: 19.0596,
    lng: 72.8295,
    address: "Royal Manor, 17th Road, Bandra West, Mumbai, Maharashtra 400050"
  },

  // ORCHID ENCLAVE (Completed)
  {
    id: 9,
    slug: "orchid-enclave",
    name: "Orchid Enclave",
    location: "Andheri (E)",
    area: "Andheri East",
    rera: "",
    type: "Residential Apartments",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "Completed",
    image: "https://lalanigroup.in/assets/images/residential/r21/1.jpg",
    images: ["https://lalanigroup.in/assets/images/residential/r21/1.jpg", "https://lalanigroup.in/assets/images/residential/r21/3.jpg", "https://lalanigroup.in/assets/images/residential/r21/5.jpg", "https://lalanigroup.in/assets/images/residential/r21/6.jpg"],
    description: "Orchid Enclave is a successfully completed residential project in Andheri East offering residents the best amenities and quality living standards at competitive pricing. The well-planned apartments maximize floor space, offering true value for money, a hallmark of the Lalani Group.",
    highlights: [
      "Strategically located in Andheri East",
      "Best-in-class amenities provided",
      "Quality living standards at competitive pricing",
      "Well-planned apartments - maximum space utilization",
      "Near Andheri Railway Station & Metro",
      "Excellent connectivity to airport",
      "Lalani Group legacy project",
      "100% sold out"
    ],
    amenities: [
      "24/7 Security",
      "Covered Parking",
      "Lift Facility",
      "Power Backup",
      "Intercom System",
      "Children's Play Area",
      "Landscaped Gardens"
    ],
    specifications: [
      {
        title: "Construction Quality",
        details: [
          "Quality construction with best materials",
          "Well-planned space utilization",
          "Competitive pricing with premium quality"
        ]
      }
    ],
    nearbyLocations: [
      { name: "Andheri Railway Station", distance: "10 min" },
      { name: "Andheri Metro Station", distance: "8 min" },
      { name: "International Airport", distance: "15 min" },
      { name: "Western Express Highway", distance: "5 min" }
    ],
    address: "Orchid Enclave, MIDC, Andheri East, Mumbai, Maharashtra 400093"
  },

  // LALANI FAIRMONT (Completed)
  {
    id: 10,
    slug: "lalani-fairmont",
    name: "Lalani Fairmont",
    location: "Khar (W)",
    area: "Khar West",
    rera: "",
    type: "Premium Residences",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "Completed",
    image: "https://lalanigroup.in/assets/images/residential/r7/1.jpg",
    images: ["https://lalanigroup.in/assets/images/residential/r7/1.jpg", "https://lalanigroup.in/assets/images/residential/r7/2.jpg", "https://lalanigroup.in/assets/images/residential/r7/3.jpg", "https://lalanigroup.in/assets/images/residential/r7/4.jpg"],
    description: "Lalani Fairmont is one of the Group's most celebrated completed projects in the premium Khar (W) locality of Mumbai. With clear architectural distinction from surrounding buildings, Lalani Fairmont has set the benchmark for quality residential construction, as endorsed by its esteemed residents including retired ONGC officials and senior professionals.",
    highlights: [
      "Premium location in Khar West",
      "Clear distinction from surrounding buildings",
      "Technically & commercially superior design",
      "Prestigious address in one of Mumbai's best neighborhoods",
      "High-quality construction materials",
      "Maintained to the highest standards",
      "Lalani Group flagship legacy project",
      "100% sold out"
    ],
    amenities: [
      "24/7 Security",
      "CCTV Surveillance",
      "Covered Parking",
      "Power Backup",
      "High-Speed Elevators",
      "Intercom System",
      "Landscaped Gardens",
      "Society Management"
    ],
    specifications: [
      {
        title: "Premium Construction",
        details: [
          "Highest quality materials used",
          "Technically & aesthetically superior",
          "Well-maintained common areas"
        ]
      }
    ],
    nearbyLocations: [
      { name: "Khar Railway Station", distance: "5 min" },
      { name: "Linking Road", distance: "3 min" },
      { name: "Bandra-Kurla Complex", distance: "15 min" },
      { name: "International Airport", distance: "20 min" }
    ],
    address: "Lalani Fairmont, 16th Road, Khar West, Mumbai, Maharashtra 400052"
  },

  // LALANI SKYVIEW (Residential)
  {
    id: 11,
    slug: "lalani-skyview",
    name: "Lalani Skyview",
    location: "Goregaon (W)",
    area: "Goregaon West",
    rera: "",
    type: "2BHK & 3BHK Residences",
    status: "Ongoing",
    category: "residential",
    price: "",
    possession: "June 2027",
    image: residency,
    images: [residency, residency2],
    description: "Lalani Skyview is a stunning high-rise residential project in Goregaon West offering breathtaking panoramic views of the city skyline. With contemporary architecture and premium amenities, this project is designed for those who aspire to live above the ordinary.",
    highlights: [
      "MahaRERA Approved - P51800089012",
      "High-rise tower with panoramic views",
      "Near Goregaon Metro & Railway Station",
      "Close to Oberoi Mall & commercial hubs",
      "Premium clubhouse with sky lounge",
      "Smart home ready apartments",
      "Earthquake resistant structure",
      "IGBC Green Building certified"
    ],
    amenities: [
      "Sky Lounge & Terrace Garden",
      "Infinity Swimming Pool",
      "State-of-the-art Gymnasium",
      "Indoor Games & Entertainment Zone",
      "Multipurpose Banquet Hall",
      "Landscaped Podium Gardens",
      "Children's Play Area",
      "Yoga & Meditation Room",
      "24/7 Security with CCTV",
      "High-Speed Elevators",
      "Covered Car Parking",
      "Power Backup",
      "Rainwater Harvesting",
      "EV Charging Points"
    ],
    specifications: [
      {
        title: "Living & Bedrooms",
        details: [
          "Italian marble flooring",
          "Designer false ceiling with cove lighting",
          "Floor-to-ceiling windows"
        ]
      },
      {
        title: "Kitchen",
        details: [
          "Modular kitchen with premium fittings",
          "Quartz countertops",
          "Built-in chimney and hob",
          "Water purifier provision"
        ]
      },
      {
        title: "Bathrooms",
        details: [
          "Premium imported tiles",
          "Designer sanitary ware",
          "Rain shower with mixer",
          "Anti-skid flooring"
        ]
      }
    ],
    configuration: [
      {
        type: "2 BHK",
        area: "800-900 sq.ft",
        price: "₹1.25 Cr onwards"
      },
      {
        type: "3 BHK",
        area: "1100-1300 sq.ft",
        price: "₹1.75 Cr onwards"
      }
    ],
    nearbyLocations: [
      { name: "Goregaon Railway Station", distance: "10 min" },
      { name: "Goregaon Metro Station", distance: "8 min" },
      { name: "Oberoi Mall", distance: "5 min" },
      { name: "Film City", distance: "15 min" },
      { name: "International Airport", distance: "25 min" },
      { name: "Western Express Highway", distance: "5 min" }
    ],
    address: "Lalani Skyview, Off New Link Road, Goregaon West, Mumbai, Maharashtra 400104"
  },

  // LALANI QUANTUM (Completed - Commercial)
  {
    id: 13,
    slug: "lalani-quantum",
    name: "Lalani Quantum",
    location: "Bavdhan, Pune",
    area: "Bavdhan, Pune",
    rera: "",
    type: "Commercial Complex",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "Completed",
    image: "https://lalanigroup.in/assets/images/commercial/c2/1.jpg",
    images: ["https://lalanigroup.in/assets/images/commercial/c2/1.jpg", "https://lalanigroup.in/assets/images/commercial/c2/2.jpg", "https://lalanigroup.in/assets/images/commercial/c2/3.jpg", "https://lalanigroup.in/assets/images/commercial/c2/4.jpg"],
    description: "Lalani Quantum is a completed commercial complex in Bavdhan, Pune — one of Lalani Group's landmark commercial projects outside Mumbai. Offering premium commercial spaces in Pune's rapidly growing zone, Lalani Quantum reflects the Group's commitment to quality construction and timely delivery.",
    highlights: ["Landmark commercial project in Pune", "Prime location in Bavdhan", "Premium quality construction", "Lalani Group legacy project", "100% completed & handed over"],
    amenities: ["24/7 Security", "Covered Parking", "Power Backup", "Lift Facility", "Fire Safety Systems"],
    nearbyLocations: [{ name: "Bavdhan Market", distance: "5 min" }, { name: "Mumbai-Pune Highway", distance: "10 min" }],
    address: "Lalani Quantum, Survey No. 38, Bavdhan, Pune, Maharashtra 411021"
  },

  // KOHINOOR GRANDEUR (Completed - JV)
  {
    id: 14,
    slug: "kohinoor-grandeur",
    name: "Kohinoor Grandeur (JV)",
    location: "Ravet, Pune",
    area: "Ravet, Pune",
    rera: "",
    type: "Residential Apartments",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "Completed",
    image: "https://lalanigroup.in/assets/images/residential/r28.jpg",
    images: ["https://lalanigroup.in/assets/images/residential/r28.jpg"],
    description: "Kohinoor Grandeur is a successfully completed joint venture residential project in Ravet, Pune. Developed in collaboration with Kohinoor Group, this project exemplifies Lalani Group's capability to execute large-scale residential developments in Pune's growing suburban zones.",
    highlights: ["Joint venture with Kohinoor Group", "Prime location in Ravet, Pune", "Quality residential construction", "All amenities provided", "100% sold out"],
    amenities: ["24/7 Security", "Covered Parking", "Lift Facility", "Power Backup", "Landscaped Gardens"],
    nearbyLocations: [{ name: "Ravet Bus Stand", distance: "5 min" }, { name: "Pimpri-Chinchwad", distance: "15 min" }],
    address: "Kohinoor Grandeur, Ravet, Pune, Maharashtra 412101"
  },

  // LALANI RESIDENCY (Completed)
  {
    id: 15,
    slug: "lalani-residency-thane",
    name: "Lalani Residency",
    location: "Thane (W)",
    area: "Thane West",
    rera: "",
    type: "Residential Apartments",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "Completed",
    image: "https://lalanigroup.in/assets/images/residential/r8/1.jpg",
    images: ["https://lalanigroup.in/assets/images/residential/r8/1.jpg", "https://lalanigroup.in/assets/images/residential/r8/2.jpg", "https://lalanigroup.in/assets/images/residential/r8/3.jpg", "https://lalanigroup.in/assets/images/residential/r8/4.jpg"],
    description: "Lalani Residency in Thane (W) is a completed award-winning residential project that received the prestigious 'Best Residential Project of the Year' award from Accommodation Times. Located in the rapidly developing suburb of Thane West, this project offers quality homes with excellent connectivity to Mumbai and Pune.",
    highlights: ["Award-winning residential project", "Best Residential Project - Accommodation Times", "Prime location in Thane West", "Excellent connectivity", "100% sold out"],
    amenities: ["24/7 Security", "Covered Parking", "Lift Facility", "Power Backup", "Children's Play Area", "Landscaped Gardens"],
    nearbyLocations: [{ name: "Thane Railway Station", distance: "10 min" }, { name: "Viviana Mall", distance: "15 min" }, { name: "Eastern Express Highway", distance: "5 min" }],
    address: "Lalani Residency, Pokhran Road No. 2, Thane West, Maharashtra 400610"
  },

  // LALANI'S DIVINE RESIDENCY (Completed)
  {
    id: 16,
    slug: "lalanis-divine-residency",
    name: "Lalani's Divine Residency",
    location: "Andheri (W)",
    area: "Andheri West",
    rera: "",
    type: "Residential Apartments",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "Completed",
    image: "https://lalanigroup.in/assets/images/residential/r6/1.jpg",
    images: ["https://lalanigroup.in/assets/images/residential/r6/1.jpg", "https://lalanigroup.in/assets/images/residential/r6/2.jpg", "https://lalanigroup.in/assets/images/residential/r6/3.jpg", "https://lalanigroup.in/assets/images/residential/r6/4.jpg"],
    description: "Lalani's Divine Residency is a completed premium residential project in Andheri (W), offering well-designed apartments in one of Mumbai's most sought-after western suburbs. With excellent connectivity and modern amenities, this project stands as a testament to Lalani Group's quality construction.",
    highlights: ["Premium Andheri West location", "Well-designed apartment layouts", "Excellent connectivity", "Close to railway station", "100% sold out"],
    amenities: ["24/7 Security", "Covered Parking", "Lift Facility", "Power Backup", "Intercom System", "Landscaped Gardens"],
    nearbyLocations: [{ name: "Andheri Railway Station", distance: "10 min" }, { name: "Andheri Metro", distance: "8 min" }, { name: "International Airport", distance: "15 min" }],
    address: "Lalani's Divine Residency, D.N. Nagar, Andheri West, Mumbai, Maharashtra 400053"
  },

  // VELENTINE APT - VI (Completed)
  {
    id: 17,
    slug: "velentine-apt-vi",
    name: "Velentine Apt - VI",
    location: "Goregaon (E)",
    area: "Goregaon East",
    rera: "",
    type: "Residential Apartments",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "Completed",
    image: "https://lalanigroup.in/assets/images/residential/r4/1.jpg",
    images: ["https://lalanigroup.in/assets/images/residential/r4/1.jpg", "https://lalanigroup.in/assets/images/residential/r4/2.jpg", "https://lalanigroup.in/assets/images/residential/r4/3.jpg", "https://lalanigroup.in/assets/images/residential/r4/4.jpg"],
    description: "Velentine Apartment VI is a completed residential project in Goregaon East, the sixth in the acclaimed Velentine series by Lalani Group. Located near Film City, Goregaon Railway Station, and Western Express Highway, this project offers excellent connectivity and a well-established neighbourhood.",
    highlights: ["Sixth in the Velentine series", "Prime Goregaon East location", "Near Film City & WEH", "Quality construction", "100% sold out"],
    amenities: ["24/7 Security", "Covered Parking", "Lift Facility", "Power Backup", "Intercom System"],
    nearbyLocations: [{ name: "Goregaon Railway Station", distance: "10 min" }, { name: "Film City", distance: "15 min" }, { name: "Western Express Highway", distance: "5 min" }],
    address: "Velentine Apartment VI, SV Road, Goregaon East, Mumbai, Maharashtra 400063"
  },

  // LALANI AURA (Completed)
  {
    id: 18,
    slug: "lalani-aura",
    name: "Lalani Aura",
    location: "34th Rd, Khar (W)",
    area: "Khar West",
    rera: "",
    type: "Commercial Building",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "Completed",
    image: "https://lalanigroup.in/assets/images/residential/c2/2.jpg",
    images: ["https://lalanigroup.in/assets/images/residential/c2/2.jpg", "https://lalanigroup.in/assets/images/residential/c2/3.jpg", "https://lalanigroup.in/assets/images/residential/c2/4.jpg", "https://lalanigroup.in/assets/images/residential/c2/5.jpg"],
    description: "Lalani Aura on 34th Road, Khar (W) is the prestigious headquarters of Lalani Group itself. A landmark commercial building offering premium office spaces, Lalani Aura represents the pinnacle of the Group's architectural excellence in one of Mumbai's most prime neighborhoods.",
    highlights: ["Lalani Group Headquarters", "Prime 34th Road, Khar (W) address", "Premium commercial office spaces", "Iconic commercial architecture", "State-of-the-art infrastructure"],
    amenities: ["High-Speed Elevators", "24/7 Security", "CCTV Surveillance", "Covered Parking", "Power Backup", "Modern Lobby"],
    nearbyLocations: [{ name: "Khar Railway Station", distance: "5 min" }, { name: "Linking Road", distance: "3 min" }, { name: "Bandra-Kurla Complex", distance: "15 min" }],
    address: "Lalani Aura, 34th Road, Khar West, Mumbai, Maharashtra 400052"
  },

  // RELIANCE TRENDS (Completed - Commercial)
  {
    id: 19,
    slug: "reliance-trends",
    name: "Reliance Trends",
    location: "Hill Rd, Bandra (W)",
    area: "Bandra West",
    rera: "",
    type: "Retail Commercial Space",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "Completed",
    image: "https://lalanigroup.in/assets/images/residential/c1/1.jpg",
    images: ["https://lalanigroup.in/assets/images/residential/c1/1.jpg", "https://lalanigroup.in/assets/images/residential/c1/2.jpg", "https://lalanigroup.in/assets/images/residential/c1/3.jpg", "https://lalanigroup.in/assets/images/residential/c1/4.jpg"],
    description: "Reliance Trends on Hill Road, Bandra (W) is a landmark completed commercial project by Lalani Group. This high-street retail development hosts the renowned Reliance Trends retail outlet and stands as one of Lalani Group's celebrated commercial achievements in the prestigious Bandra West area.",
    highlights: ["High-street retail landmark", "Prime Hill Road, Bandra (W) location", "Hosts Reliance Trends retail", "Award-winning project", "100% tenanted"],
    amenities: ["24/7 Security", "CCTV Surveillance", "Covered Parking", "Power Backup", "Modern Retail Infrastructure"],
    nearbyLocations: [{ name: "Bandra Railway Station", distance: "5 min" }, { name: "Linking Road", distance: "3 min" }, { name: "Bandstand", distance: "10 min" }],
    address: "Reliance Trends, Hill Road, Bandra West, Mumbai, Maharashtra 400050"
  },

  // VELENTINE APT - V (Completed)
  {
    id: 20,
    slug: "velentine-apt-v",
    name: "Velentine Apt - V",
    location: "Goregaon (E)",
    area: "Goregaon East",
    rera: "",
    type: "Residential Apartments",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "Completed",
    image: "https://lalanigroup.in/assets/images/residential/r10-1.jpg",
    images: ["https://lalanigroup.in/assets/images/residential/r10-1.jpg"],
    description: "Velentine Apartment V is a completed residential project in Goregaon East, the fifth in the acclaimed Velentine series by Lalani Group. A well-established residential complex offering comfortable family homes in one of Mumbai's most well-connected eastern suburbs.",
    highlights: ["Fifth in the Velentine series", "Prime Goregaon East location", "Well-established complex", "Quality construction", "100% sold out"],
    amenities: ["24/7 Security", "Covered Parking", "Lift Facility", "Power Backup"],
    nearbyLocations: [{ name: "Goregaon Railway Station", distance: "10 min" }, { name: "Western Express Highway", distance: "5 min" }],
    address: "Velentine Apartment V, SV Road, Goregaon East, Mumbai, Maharashtra 400063"
  },

  // VELENTINE APT - IV (Completed)
  {
    id: 21,
    slug: "velentine-apt-iv",
    name: "Velentine Apt - IV",
    location: "Goregaon (E)",
    area: "Goregaon East",
    rera: "",
    type: "Residential Apartments",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "Completed",
    image: "https://lalanigroup.in/assets/images/residential/r13-1.jpg",
    images: ["https://lalanigroup.in/assets/images/residential/r13-1.jpg"],
    description: "Velentine Apartment IV is a completed residential project in Goregaon East, the fourth in the Velentine series by Lalani Group. Offering quality residential homes in a well-connected location with access to major transportation hubs and commercial centers.",
    highlights: ["Fourth in the Velentine series", "Goregaon East prime location", "Quality residential homes", "Well-connected", "100% sold out"],
    amenities: ["24/7 Security", "Covered Parking", "Lift Facility", "Power Backup"],
    nearbyLocations: [{ name: "Goregaon Railway Station", distance: "10 min" }, { name: "Western Express Highway", distance: "5 min" }],
    address: "Velentine Apartment IV, SV Road, Goregaon East, Mumbai, Maharashtra 400063"
  },

  // MEADOW PARK (Completed)
  {
    id: 22,
    slug: "meadow-park",
    name: "Meadow Park",
    location: "Jogeshwari (W)",
    area: "Jogeshwari West",
    rera: "",
    type: "Residential Apartments",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "Completed",
    image: "https://lalanigroup.in/assets/images/residential/r2/1.jpg",
    images: ["https://lalanigroup.in/assets/images/residential/r2/1.jpg", "https://lalanigroup.in/assets/images/residential/r2/2.jpg", "https://lalanigroup.in/assets/images/residential/r2/6.jpg", "https://lalanigroup.in/assets/images/residential/r2/7.jpg"],
    description: "Meadow Park is a completed residential project in Jogeshwari (W), offering comfortable homes in one of Mumbai's well-established western suburbs. Located near S.V. Road and Jogeshwari Railway Station, this project exemplifies Lalani Group's commitment to quality residential development.",
    highlights: ["Prime Jogeshwari West location", "Near S.V. Road", "Quality residential complex", "Close to Jogeshwari Station", "100% sold out"],
    amenities: ["24/7 Security", "Covered Parking", "Lift Facility", "Power Backup", "Landscaped Gardens"],
    nearbyLocations: [{ name: "Jogeshwari Railway Station", distance: "10 min" }, { name: "S.V. Road", distance: "5 min" }, { name: "Airport", distance: "15 min" }],
    address: "Meadow Park, S.V. Road, Jogeshwari West, Mumbai, Maharashtra 400102"
  },

  // LOTUS PARK (Completed)
  {
    id: 23,
    slug: "lotus-park",
    name: "Lotus Park",
    location: "Jogeshwari (W)",
    area: "Jogeshwari West",
    rera: "",
    type: "Residential Apartments",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "Completed",
    image: "https://lalanigroup.in/assets/images/residential/r9/1.jpg",
    images: ["https://lalanigroup.in/assets/images/residential/r9/1.jpg", "https://lalanigroup.in/assets/images/residential/r9/2.jpg", "https://lalanigroup.in/assets/images/residential/r9/3.jpg", "https://lalanigroup.in/assets/images/residential/r9/4.jpg"],
    description: "Lotus Park is a completed large-scale residential project in Jogeshwari (W), offering well-designed apartments in a lush, green setting. One of Lalani Group's prominent developments in the Jogeshwari area, featuring spacious homes with modern amenities.",
    highlights: ["Large residential complex", "Lush green surroundings", "Prime Jogeshwari West", "Modern amenities", "100% sold out"],
    amenities: ["24/7 Security", "Covered Parking", "Lift Facility", "Power Backup", "Children's Play Area", "Landscaped Gardens"],
    nearbyLocations: [{ name: "Jogeshwari Railway Station", distance: "10 min" }, { name: "JVLR", distance: "5 min" }, { name: "Airport", distance: "15 min" }],
    address: "Lotus Park, JVLR, Jogeshwari West, Mumbai, Maharashtra 400102"
  },

  // OYSTER (Completed - Commercial)
  {
    id: 24,
    slug: "oyster-khar",
    name: "Oyster",
    location: "Khar (W)",
    area: "Khar West",
    rera: "",
    type: "Commercial Space",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "Completed",
    image: "https://lalanigroup.in/assets/images/commercial/c3/1.jpg",
    images: ["https://lalanigroup.in/assets/images/commercial/c3/1.jpg", "https://lalanigroup.in/assets/images/commercial/c3/2.jpg", "https://lalanigroup.in/assets/images/commercial/c3/3.jpg", "https://lalanigroup.in/assets/images/commercial/c3/5.jpg"],
    description: "Oyster is a completed commercial development in the prime Khar (W) area of Mumbai. Located in one of Mumbai's most prestigious neighborhoods, this commercial project offers premium retail and office spaces with excellent connectivity and high footfall near Linking Road.",
    highlights: ["Prime Khar West commercial location", "Premium retail & office spaces", "High footfall area", "Near Linking Road", "100% tenanted"],
    amenities: ["24/7 Security", "Covered Parking", "Power Backup", "Modern Infrastructure"],
    nearbyLocations: [{ name: "Khar Railway Station", distance: "5 min" }, { name: "Linking Road", distance: "3 min" }],
    address: "Oyster, 16th Road, Khar West, Mumbai, Maharashtra 400052"
  },

  // VELENTINE APT - III (Completed)
  {
    id: 25,
    slug: "velentine-apt-iii",
    name: "Velentine Apt - III",
    location: "Goregaon (E)",
    area: "Goregaon East",
    rera: "",
    type: "Residential Apartments",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "Completed",
    image: "https://lalanigroup.in/assets/images/residential/r30.jpg",
    images: ["https://lalanigroup.in/assets/images/residential/r30.jpg"],
    description: "Velentine Apartment III is a completed residential project in Goregaon East, the third in the Velentine series by Lalani Group. Part of the iconic Velentine cluster in Goregaon East, this project has established itself as a premier residential address for Mumbai families.",
    highlights: ["Third in the Velentine series", "Goregaon East address", "Established residential complex", "Quality construction", "100% sold out"],
    amenities: ["24/7 Security", "Covered Parking", "Lift Facility", "Power Backup"],
    nearbyLocations: [{ name: "Goregaon Railway Station", distance: "10 min" }, { name: "Western Express Highway", distance: "5 min" }],
    address: "Velentine Apartment III, SV Road, Goregaon East, Mumbai, Maharashtra 400063"
  },

  // VELENTINE APT - II (Completed)
  {
    id: 26,
    slug: "velentine-apt-ii",
    name: "Velentine Apt - II",
    location: "Goregaon (E)",
    area: "Goregaon East",
    rera: "",
    type: "Residential Apartments",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "Completed",
    image: "https://lalanigroup.in/assets/images/residential/r14.jpg",
    images: ["https://lalanigroup.in/assets/images/residential/r14.jpg"],
    description: "Velentine Apartment II is a completed residential project in Goregaon East, the second in the Velentine series by Lalani Group. One of the earlier Velentine projects that helped establish Lalani Group's presence in Goregaon East, offering quality residential homes to Mumbai families.",
    highlights: ["Second in the Velentine series", "Established residential address", "Goregaon East location", "Quality construction", "100% sold out"],
    amenities: ["24/7 Security", "Covered Parking", "Lift Facility", "Power Backup"],
    nearbyLocations: [{ name: "Goregaon Railway Station", distance: "10 min" }, { name: "Western Express Highway", distance: "5 min" }],
    address: "Velentine Apartment II, SV Road, Goregaon East, Mumbai, Maharashtra 400063"
  },

  // VELENTINE APT - I (Completed)
  {
    id: 27,
    slug: "velentine-apt-i",
    name: "Velentine Apt - I",
    location: "Goregaon (E)",
    area: "Goregaon East",
    rera: "",
    type: "Residential Apartments",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "Completed",
    image: "https://lalanigroup.in/assets/images/residential/r15.jpg",
    images: ["https://lalanigroup.in/assets/images/residential/r15.jpg"],
    description: "Velentine Apartment I is the first and original project in the iconic Velentine series by Lalani Group in Goregaon East. This pioneering project established Lalani Group's foothold in Goregaon East and set the quality benchmark for all subsequent Velentine projects.",
    highlights: ["The original Velentine project", "Pioneer of the Velentine series", "Established Goregaon East legacy", "Quality foundation project", "100% sold out"],
    amenities: ["24/7 Security", "Covered Parking", "Lift Facility", "Power Backup"],
    nearbyLocations: [{ name: "Goregaon Railway Station", distance: "10 min" }, { name: "Western Express Highway", distance: "5 min" }],
    address: "Velentine Apartment I, SV Road, Goregaon East, Mumbai, Maharashtra 400063"
  },

  // SHISHU WELFARE TRUST (Completed)
  {
    id: 28,
    slug: "shishu-welfare-trust",
    name: "Shishu Welfare Trust",
    location: "Goregaon (E)",
    area: "Goregaon East",
    rera: "",
    type: "Residential / Social",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "Completed",
    image: "https://lalanigroup.in/assets/images/residential/r29.jpg",
    images: ["https://lalanigroup.in/assets/images/residential/r29.jpg"],
    description: "Shishu Welfare Trust is a completed social contribution project by Lalani Group in Goregaon East. Reflecting the Group's commitment to social responsibility, this project demonstrates Lalani Group's broader vision beyond commercial real estate development and their dedication to community welfare.",
    highlights: ["Social contribution project", "Lalani Group CSR initiative", "Goregaon East location", "Community development", "Completed project"],
    amenities: ["24/7 Security", "Landscaped Surroundings", "Community Facilities"],
    nearbyLocations: [{ name: "Goregaon Railway Station", distance: "10 min" }, { name: "Western Express Highway", distance: "5 min" }],
    address: "Shishu Welfare Trust, SV Road, Goregaon East, Mumbai, Maharashtra 400063"
  },

  // VELENTINE TOWER (Completed)
  {
    id: 29,
    slug: "velentine-tower",
    name: "Velentine Tower",
    location: "Goregaon (E)",
    area: "Goregaon East",
    rera: "",
    type: "Residential Tower",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "Completed",
    image: "https://lalanigroup.in/assets/images/residential/r17.jpg",
    images: ["https://lalanigroup.in/assets/images/residential/r17.jpg"],
    description: "Velentine Tower is a completed high-rise residential tower in Goregaon East. Part of the iconic Velentine series by Lalani Group, this tower offers panoramic views and spacious apartments in the heart of Goregaon East, contributing to the Group's rich legacy in this sought-after suburb.",
    highlights: ["High-rise residential tower", "Part of the Velentine series", "Panoramic views", "Prime Goregaon East address", "100% sold out"],
    amenities: ["24/7 Security", "Covered Parking", "High-Speed Lifts", "Power Backup"],
    nearbyLocations: [{ name: "Goregaon Railway Station", distance: "10 min" }, { name: "Film City", distance: "15 min" }, { name: "Western Express Highway", distance: "5 min" }],
    address: "Velentine Tower, SV Road, Goregaon East, Mumbai, Maharashtra 400063"
  },

  // CLASSIC (Completed)
  {
    id: 30,
    slug: "classic-bandra",
    name: "Classic",
    location: "Bandra (W)",
    area: "Bandra West",
    rera: "",
    type: "Residential Apartments",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "Completed",
    image: "https://lalanigroup.in/assets/images/residential/r19.jpg",
    images: ["https://lalanigroup.in/assets/images/residential/r19.jpg"],
    description: "Classic is a completed residential project in the prestigious Bandra (W). A refined residential development by Lalani Group in one of Mumbai's most coveted addresses, offering timeless design and quality construction to discerning homebuyers.",
    highlights: ["Prestigious Bandra West address", "Classic architectural design", "Premium residential finishes", "Excellent connectivity", "100% sold out"],
    amenities: ["24/7 Security", "Covered Parking", "Lift Facility", "Power Backup"],
    nearbyLocations: [{ name: "Bandra Railway Station", distance: "5 min" }, { name: "Linking Road", distance: "5 min" }, { name: "Bandstand", distance: "10 min" }],
    address: "Classic, Chapel Road, Bandra West, Mumbai, Maharashtra 400050"
  },

  // DUNHILL DOME (Completed)
  {
    id: 31,
    slug: "dunhill-dome",
    name: "Dunhill Dome",
    location: "Bandra (W)",
    area: "Bandra West",
    rera: "",
    type: "Residential Apartments",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "Completed",
    image: "https://lalanigroup.in/assets/images/residential/r27.jpg",
    images: ["https://lalanigroup.in/assets/images/residential/r27.jpg"],
    description: "Dunhill Dome is a completed residential project in Bandra (W), part of Lalani Group's iconic Dunhill series. Known for its distinctive dome architecture, this project stands as a testament to the Group's architectural creativity and quality in Mumbai's most premium neighborhoods.",
    highlights: ["Iconic dome architecture", "Part of the Dunhill series", "Prestigious Bandra West address", "Distinctive design landmark", "100% sold out"],
    amenities: ["24/7 Security", "Covered Parking", "Lift Facility", "Power Backup"],
    nearbyLocations: [{ name: "Bandra Railway Station", distance: "5 min" }, { name: "Linking Road", distance: "5 min" }],
    address: "Dunhill Dome, Hill Road, Bandra West, Mumbai, Maharashtra 400050"
  },

  // ORCHARD PALACE (Completed)
  {
    id: 32,
    slug: "orchard-palace",
    name: "Orchard Palace",
    location: "Bandra (W)",
    area: "Bandra West",
    rera: "",
    type: "Residential Apartments",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "Completed",
    image: "https://lalanigroup.in/assets/images/residential/r20.jpg",
    images: ["https://lalanigroup.in/assets/images/residential/r20.jpg"],
    description: "Orchard Palace is a completed luxury residential project in Bandra (W). With its palatial design and premium quality construction, this project exemplifies Lalani Group's excellence in developing high-end residential properties in Mumbai's most desirable western suburb.",
    highlights: ["Palatial residential design", "Luxury Bandra West address", "Premium quality construction", "Prestigious neighborhood", "100% sold out"],
    amenities: ["24/7 Security", "Covered Parking", "Lift Facility", "Power Backup", "Landscaped Gardens"],
    nearbyLocations: [{ name: "Bandra Railway Station", distance: "5 min" }, { name: "Bandstand", distance: "10 min" }],
    address: "Orchard Palace, St. Paul Road, Bandra West, Mumbai, Maharashtra 400050"
  },

  // DUNHILL CORNER (Completed)
  {
    id: 33,
    slug: "dunhill-corner",
    name: "Dunhill Corner",
    location: "Santacruz (E)",
    area: "Santacruz East",
    rera: "",
    type: "Residential Apartments",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "Completed",
    image: "https://lalanigroup.in/assets/images/residential/r26.jpg",
    images: ["https://lalanigroup.in/assets/images/residential/r26.jpg"],
    description: "Dunhill Corner is a completed residential project in Santacruz (E), part of Lalani Group's Dunhill series. Offering quality homes in the strategically located Santacruz East — close to the international airport, railways, and commercial centers.",
    highlights: ["Part of the Dunhill series", "Santacruz East prime location", "Near international airport", "Excellent connectivity", "100% sold out"],
    amenities: ["24/7 Security", "Covered Parking", "Lift Facility", "Power Backup"],
    nearbyLocations: [{ name: "Santacruz Railway Station", distance: "5 min" }, { name: "International Airport", distance: "10 min" }, { name: "Vile Parle", distance: "8 min" }],
    address: "Dunhill Corner, Nehru Road, Santacruz East, Mumbai, Maharashtra 400055"
  },

  // DUNHILL APARTMENT (Completed)
  {
    id: 34,
    slug: "dunhill-apartment",
    name: "Dunhill Apartment",
    location: "Andheri (E)",
    area: "Andheri East",
    rera: "",
    type: "Residential Apartments",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "Completed",
    image: "https://lalanigroup.in/assets/images/residential/r25.jpg",
    images: ["https://lalanigroup.in/assets/images/residential/r25.jpg"],
    description: "Dunhill Apartment is a completed residential project in Andheri (E), part of Lalani Group's Dunhill series. Located in the vibrant Andheri East, this project offers comfortable residential homes with excellent connectivity to Mumbai's financial districts and the international airport.",
    highlights: ["Part of the Dunhill series", "Andheri East location", "Near international airport", "Excellent connectivity", "100% sold out"],
    amenities: ["24/7 Security", "Covered Parking", "Lift Facility", "Power Backup"],
    nearbyLocations: [{ name: "Andheri Railway Station", distance: "10 min" }, { name: "International Airport", distance: "15 min" }, { name: "MIDC", distance: "5 min" }],
    address: "Dunhill Apartment, MIDC, Andheri East, Mumbai, Maharashtra 400093"
  },

  // DUNHILL VILLA (Completed)
  {
    id: 35,
    slug: "dunhill-villa",
    name: "Dunhill Villa",
    location: "Santacruz (W)",
    area: "Santacruz West",
    rera: "",
    type: "Residential Villa",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "Completed",
    image: "https://lalanigroup.in/assets/images/residential/r24.jpg",
    images: ["https://lalanigroup.in/assets/images/residential/r24.jpg"],
    description: "Dunhill Villa is a completed luxury villa project in Santacruz (W), part of Lalani Group's Dunhill series. An exclusive development in one of Mumbai's most upscale western suburbs, offering the finest in luxury living with villa-style spaciousness and premium finishes.",
    highlights: ["Luxury villa-style development", "Part of the Dunhill series", "Exclusive Santacruz West address", "Spacious layouts", "100% sold out"],
    amenities: ["24/7 Security", "Private Parking", "Landscaped Gardens", "Power Backup"],
    nearbyLocations: [{ name: "Santacruz Railway Station", distance: "5 min" }, { name: "Carter Road", distance: "10 min" }, { name: "International Airport", distance: "10 min" }],
    address: "Dunhill Villa, Juhu Tara Road, Santacruz West, Mumbai, Maharashtra 400054"
  },

  // DUNHILL CASTLE (Completed)
  {
    id: 36,
    slug: "dunhill-castle",
    name: "Dunhill Castle",
    location: "Ville Parle (E)",
    area: "Ville Parle East",
    rera: "",
    type: "Residential Apartments",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "Completed",
    image: "https://lalanigroup.in/assets/images/residential/r23.jpg",
    images: ["https://lalanigroup.in/assets/images/residential/r23.jpg"],
    description: "Dunhill Castle is a completed residential project in Ville Parle (E), part of Lalani Group's Dunhill series. Named for its castle-like grandeur, this project stands proudly in the elegant Ville Parle East — known for its tree-lined streets, educational institutions, and cosmopolitan community.",
    highlights: ["Castle-inspired grand architecture", "Part of the Dunhill series", "Prestigious Ville Parle East", "Educational hub location", "100% sold out"],
    amenities: ["24/7 Security", "Covered Parking", "Lift Facility", "Power Backup", "Landscaped Gardens"],
    nearbyLocations: [{ name: "Vile Parle Railway Station", distance: "5 min" }, { name: "International Airport", distance: "10 min" }, { name: "Juhu Beach", distance: "10 min" }],
    address: "Dunhill Castle, Irla Road, Vile Parle East, Mumbai, Maharashtra 400057"
  },

  // DUNHILL APT (Completed)
  {
    id: 37,
    slug: "dunhill-apt-bandra",
    name: "Dunhill Apt",
    location: "Bandra (W)",
    area: "Bandra West",
    rera: "",
    type: "Residential Apartments",
    status: "Ready Possession",
    category: "completed",
    price: "",
    possession: "Completed",
    image: "https://lalanigroup.in/assets/images/residential/r22.jpg",
    images: ["https://lalanigroup.in/assets/images/residential/r22.jpg"],
    description: "Dunhill Apt is a completed residential project in Bandra (W), part of Lalani Group's iconic Dunhill series. Nestled in Mumbai's most sought-after western suburb, this project offers premium residential apartments with the signature Dunhill quality and Lalani Group's 40+ year legacy of excellence.",
    highlights: ["Part of the iconic Dunhill series", "Premium Bandra West address", "Signature Dunhill quality", "Excellent neighborhood", "100% sold out"],
    amenities: ["24/7 Security", "Covered Parking", "Lift Facility", "Power Backup"],
    nearbyLocations: [{ name: "Bandra Railway Station", distance: "5 min" }, { name: "Linking Road", distance: "5 min" }, { name: "Bandstand", distance: "10 min" }],
    address: "Dunhill Apartment, 16th Road, Bandra West, Mumbai, Maharashtra 400050"
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "all") return projects;
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(p => p.status === "Ongoing").slice(0, 3);
};
