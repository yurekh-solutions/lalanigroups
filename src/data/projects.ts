import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import aboutBg from "@/assets/about-bg.jpg";

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
  category: "residential" | "commercial" | "completed" | "ongoing";
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
}

export const projects: Project[] = [
  // LALANI GOODWILL
  {
    id: 1,
    slug: "lalani-goodwill",
    name: "Lalani Goodwill",
    location: "J.B. Nagar, Andheri (E)",
    area: "Andheri East",
    rera: "P51800079065",
    reraNumber2: "P51800078852",
    type: "1BHK, 2BHK & 3BHK Residences",
    status: "Ongoing",
    category: "ongoing",
    price: "₹85 Lakhs Onwards",
    possession: "December 2025",
    image: project1,
    images: [project1, hero1, hero2],
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
    ]
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
    category: "completed",
    price: "₹75 Lakhs Onwards",
    possession: "Ready to Move - OC Received",
    image: project3,
    images: [project3, hero2, project1, hero1, aboutBg],
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
    ]
  },

  // LALANI GRANDEUR
  {
    id: 3,
    slug: "lalani-grandeur",
    name: "Lalani Grandeur",
    location: "Goregaon (E)",
    area: "Goregaon East",
    rera: "P51800045678",
    type: "2BHK & 3BHK Residences",
    status: "Ongoing",
    category: "residential",
    price: "₹1.12 Cr Onwards",
    possession: "March 2026",
    image: hero1,
    images: [hero1, project2, hero2, project1, aboutBg],
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
    ]
  },

  // LALANI BUSINESS PARK (Commercial)
  {
    id: 4,
    slug: "lalani-business-park",
    name: "Lalani Business Park",
    location: "Khar (W)",
    area: "Khar West",
    rera: "P51800033063",
    type: "Commercial Spaces",
    status: "Ongoing",
    category: "ongoing",
    price: "₹1.2 Cr Onwards",
    possession: "June 2026",
    image: project2,
    images: [project2, hero1, project3],
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
    ]
  },

  // LALANI HERITAGE PARK (Residential)
  {
    id: 5,
    slug: "lalani-heritage-park",
    name: "Lalani Heritage Park",
    location: "Jogeshwari (W)",
    area: "Jogeshwari West",
    rera: "P51800056789",
    type: "2BHK & 3BHK Residences",
    status: "Ongoing",
    category: "residential",
    price: "₹98 Lakhs Onwards",
    possession: "September 2026",
    image: aboutBg,
    images: [aboutBg, hero1, project1, hero2, project2],
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
    floorPlanTitle: "Floor Plans"
  },

  // DREAM RESIDENCY
  {
    id: 7,
    slug: "dream-residency",
    name: "Lalani Dream Residency",
    location: "Karjat (W)",
    area: "Karjat",
    rera: "P51800078901",
    type: "1BHK & 2BHK Weekend Homes",
    status: "Ongoing",
    category: "residential",
    price: "₹32 Lakhs Onwards",
    possession: "December 2026",
    image: project3,
    images: [project3, hero1, hero2, project1, aboutBg],
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
    ]
  },

  // LALANI CORPORATE PLAZA (Commercial)
  {
    id: 6,
    slug: "lalani-corporate-plaza",
    name: "Lalani Corporate Plaza",
    location: "BKC, Bandra (E)",
    area: "Bandra Kurla Complex",
    rera: "P51800067890",
    type: "Premium Office Spaces",
    status: "Ongoing",
    category: "commercial",
    price: "₹1.8 Cr Onwards",
    possession: "August 2026",
    image: hero2,
    images: [hero2, project2, hero1],
    description: "Lalani Corporate Plaza is a landmark commercial tower in the prestigious Bandra Kurla Complex. Featuring premium office spaces with world-class amenities, this project offers an unparalleled business address in Mumbai's premier business district.",
    highlights: [
      "MahaRERA Approved - P51800067890",
      "Prime location in BKC",
      "A-Grade commercial building",
      "High-speed elevators",
      "Central air conditioning",
      "24/7 security & surveillance",
      "Ample parking facility",
      "LEED certified building"
    ],
    amenities: [
      "Premium Lobby & Reception",
      "High-Speed Elevators",
      "Central Air Conditioning",
      "24/7 Security",
      "CCTV Surveillance",
      "Multi-Level Parking",
      "Power Backup",
      "Fire Safety Systems",
      "Food Court & Cafeteria",
      "ATM & Banking Facilities",
      "Conference Rooms",
      "High-Speed Internet Infrastructure"
    ],
    specifications: [
      {
        title: "Office Features",
        details: [
          "Flexible floor plates",
          "False ceiling with lighting",
          "Fully air-conditioned",
          "Fiber optic connectivity ready",
          "Premium washrooms"
        ]
      },
      {
        title: "Building Features",
        details: [
          "Smart building management system",
          "Earthquake resistant structure",
          "Rainwater harvesting",
          "Energy efficient design"
        ]
      }
    ],
    configuration: [
      {
        type: "Office Space",
        area: "1000-5000 sq.ft",
        price: "₹1.8 Cr onwards"
      },
      {
        type: "Full Floor",
        area: "10000+ sq.ft",
        price: "On Request"
      }
    ],
    nearbyLocations: [
      { name: "BKC Metro Station", distance: "3 min" },
      { name: "Bandra Railway Station", distance: "8 min" },
      { name: "International Airport", distance: "15 min" },
      { name: "Domestic Airport", distance: "20 min" },
      { name: "Western Express Highway", distance: "5 min" },
      { name: "Banks & Financial Institutions", distance: "Walking distance" }
    ]
  },

  // ROYAL MANOR (Completed)
  {
    id: 8,
    slug: "royal-manor",
    name: "Royal Manor",
    location: "Bandra (W)",
    area: "Bandra West",
    rera: "Legacy Project",
    type: "Luxury Residences",
    status: "Ready Possession",
    category: "completed",
    price: "Sold Out",
    possession: "Completed",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80"
    ],
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
    ]
  },

  // ORCHID ENCLAVE (Completed)
  {
    id: 9,
    slug: "orchid-enclave",
    name: "Orchid Enclave",
    location: "Andheri (E)",
    area: "Andheri East",
    rera: "Legacy Project",
    type: "Residential Apartments",
    status: "Ready Possession",
    category: "completed",
    price: "Sold Out",
    possession: "Completed",
    image: project1,
    images: [project1, hero1, hero2],
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
    ]
  },

  // LALANI FAIRMONT (Completed)
  {
    id: 10,
    slug: "lalani-fairmont",
    name: "Lalani Fairmont",
    location: "Khar (W)",
    area: "Khar West",
    rera: "Legacy Project",
    type: "Premium Residences",
    status: "Ready Possession",
    category: "completed",
    price: "Sold Out",
    possession: "Completed",
    image: project2,
    images: [project2, hero1, hero2],
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
    ]
  },

  // LALANI SKYVIEW (Residential)
  {
    id: 11,
    slug: "lalani-skyview",
    name: "Lalani Skyview",
    location: "Goregaon (W)",
    area: "Goregaon West",
    rera: "P51800089012",
    type: "2BHK & 3BHK Residences",
    status: "Ongoing",
    category: "residential",
    price: "₹1.25 Cr Onwards",
    possession: "June 2027",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80"
    ],
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
    ]
  },

  // LALANI TOWERS (Commercial)
  {
    id: 12,
    slug: "lalani-towers",
    name: "Lalani Towers",
    location: "Andheri (W)",
    area: "Andheri West",
    rera: "P51800090123",
    type: "Premium Retail & Office Spaces",
    status: "Ongoing",
    category: "commercial",
    price: "₹95 Lakhs Onwards",
    possession: "December 2026",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Lalani Towers is a modern commercial complex in the bustling Andheri West business corridor. Offering premium retail shops and office spaces, this project provides excellent visibility and footfall for businesses seeking a prime commercial address.",
    highlights: [
      "MahaRERA Approved - P51800090123",
      "Prime location on Linking Road",
      "High street retail frontage",
      "Near Andheri Metro Station",
      "Excellent visibility & footfall",
      "Modern commercial architecture",
      "Flexible office configurations",
      "Ample parking space"
    ],
    amenities: [
      "Grand Entrance Lobby",
      "High-Speed Elevators",
      "Central Air Conditioning",
      "24/7 Security",
      "CCTV Surveillance",
      "Multi-Level Parking",
      "100% Power Backup",
      "Fire Safety Systems",
      "Visitor Management System",
      "High-Speed Internet Ready",
      "Food Court",
      "ATM Space"
    ],
    specifications: [
      {
        title: "Retail Spaces",
        details: [
          "Double-height showroom options",
          "Premium glass frontage",
          "Flexible layouts",
          "Excellent street visibility"
        ]
      },
      {
        title: "Office Spaces",
        details: [
          "Open floor plans",
          "False ceiling with lighting",
          "Central AC provision",
          "Premium washrooms"
        ]
      }
    ],
    configuration: [
      {
        type: "Retail Shop",
        area: "300-1500 sq.ft",
        price: "₹95 Lakhs onwards"
      },
      {
        type: "Office Space",
        area: "500-3000 sq.ft",
        price: "₹1.1 Cr onwards"
      }
    ],
    nearbyLocations: [
      { name: "Andheri Metro Station", distance: "5 min" },
      { name: "Andheri Railway Station", distance: "8 min" },
      { name: "Linking Road", distance: "2 min" },
      { name: "Versova", distance: "10 min" },
      { name: "International Airport", distance: "20 min" },
      { name: "Lokhandwala", distance: "7 min" }
    ]
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
