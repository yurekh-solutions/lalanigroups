import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import aboutBg from "@/assets/about-bg.jpg";

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
  category: "residential" | "commercial" | "completed";
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
    category: "residential",
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
    images: [project3, hero2, project1],
    description: "Velentine Apartment Wing D offers ready-to-move-in 1BHK and 2BHK apartments in Malad East. With OC received, these homes are perfect for immediate possession. The project features modern amenities and is strategically located with excellent connectivity to major landmarks.",
    highlights: [
      "Ready Possession - OC Received",
      "MahaRERA Approved - P51800028866",
      "Move-in ready apartments",
      "Near Malad Railway Station",
      "Close to schools, hospitals & shopping centers",
      "Well-planned residential complex",
      "Excellent connectivity to Western Express Highway",
      "Family-friendly neighborhood"
    ],
    amenities: [
      "24/7 Security",
      "CCTV Surveillance",
      "Covered Parking",
      "Power Backup",
      "Lift Facility",
      "Children's Play Area",
      "Landscaped Gardens",
      "Intercom System",
      "Water Storage & Pump",
      "Fire Safety Equipment"
    ],
    specifications: [
      {
        title: "Flooring",
        details: [
          "Vitrified tiles in living and dining",
          "Anti-skid ceramic tiles in bathrooms",
          "Kitchen with ceramic tiles"
        ]
      },
      {
        title: "Doors & Windows",
        details: [
          "Main door with premium finish",
          "Internal doors flush type",
          "UPVC/Aluminum windows with mosquito mesh"
        ]
      },
      {
        title: "Electrical",
        details: [
          "Concealed copper wiring",
          "Modular switches",
          "Sufficient light and power points"
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
      { name: "Schools & Hospitals", distance: "5-10 min" }
    ]
  },

  // LALANI GRANDEUR
  {
    id: 3,
    slug: "lalani-grandeur",
    name: "Lalani Grandeur",
    location: "Malad (E)",
    area: "Malad East",
    rera: "P51800045678",
    type: "2BHK & 3BHK Residences",
    status: "Ongoing",
    category: "residential",
    price: "₹1.12 Cr Onwards",
    possession: "March 2026",
    image: hero1,
    images: [hero1, project2, hero2],
    description: "Lalani Grandeur is an architectural masterpiece offering premium 2BHK and 3BHK apartments in Goregaon East. Designed with contemporary aesthetics and world-class amenities, this project redefines luxury living in one of Mumbai's most sought-after locations.",
    highlights: [
      "MahaRERA Approved - P51800045678",
      "Premium 2BHK & 3BHK Apartments",
      "Strategic location in Goregaon East",
      "Near Metro Station & Railway Station",
      "Close to Film City and IT Parks",
      "Modern clubhouse with premium amenities",
      "Earthquake resistant structure",
      "Vastu-compliant design"
    ],
    amenities: [
      "Grand Clubhouse",
      "State-of-the-art Gymnasium",
      "Swimming Pool with Deck",
      "Indoor Games Room",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "Children's Play Area",
      "Jogging Track",
      "Outdoor Sports Facilities",
      "24/7 Security with CCTV",
      "High-Speed Elevators",
      "Basement & Ground Parking",
      "Power Backup",
      "Rainwater Harvesting",
      "Sewage Treatment Plant"
    ],
    specifications: [
      {
        title: "Living & Bedrooms",
        details: [
          "Premium vitrified tile flooring",
          "Elegant paint with texture finish",
          "Large windows with scenic views"
        ]
      },
      {
        title: "Modular Kitchen",
        details: [
          "Black granite platform",
          "Designer ceramic wall tiles",
          "Stainless steel sink with drain board",
          "Provision for chimney and water purifier"
        ]
      },
      {
        title: "Bathrooms",
        details: [
          "Designer wall and floor tiles",
          "Premium CP fittings",
          "Hot & cold water mixer",
          "Exhaust fan provision"
        ]
      },
      {
        title: "Safety & Security",
        details: [
          "Video door phone",
          "Fire alarm system",
          "Smoke detectors",
          "Emergency exits"
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
        type: "3 BHK",
        area: "1050-1200 sq.ft",
        price: "₹1.58 Cr onwards"
      }
    ],
    nearbyLocations: [
      { name: "Malad Railway Station", distance: "8 min" },
      { name: "Mindspace IT Park", distance: "10 min" },
      { name: "Inorbit Mall", distance: "12 min" },
      { name: "Infiniti Mall", distance: "15 min" },
      { name: "International Airport", distance: "25 min" },
      { name: "Western Express Highway", distance: "5 min" },
      { name: "Schools & Hospitals", distance: "5-10 min" }
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
    category: "commercial",
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
    images: [aboutBg, hero1, project1],
    description: "Lalani Heritage Park offers spacious 2BHK and 3BHK apartments in Jogeshwari West. This thoughtfully designed project combines modern living with natural surroundings, featuring extensive green spaces and premium amenities for a balanced lifestyle.",
    highlights: [
      "MahaRERA Approved - P51800056789",
      "Spacious 2BHK & 3BHK Apartments",
      "Near Jogeshwari Metro Station",
      "Close to Western Express Highway",
      "Excellent connectivity to suburbs",
      "Premium amenities and facilities",
      "Vastu-compliant design",
      "Green building certified"
    ],
    amenities: [
      "Clubhouse with Indoor Games",
      "Swimming Pool",
      "Gymnasium & Yoga Room",
      "Landscaped Gardens",
      "Children's Play Area",
      "Jogging Track",
      "24/7 Security",
      "CCTV Surveillance",
      "Covered Parking",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heaters"
    ],
    specifications: [
      {
        title: "Living Areas",
        details: [
          "Vitrified tile flooring",
          "Premium quality paint",
          "Large balconies with views"
        ]
      },
      {
        title: "Kitchen",
        details: [
          "Granite countertops",
          "Ceramic wall tiles",
          "Modular kitchen provision",
          "Chimney and exhaust provision"
        ]
      },
      {
        title: "Bathrooms",
        details: [
          "Designer tiles",
          "Premium sanitary fittings",
          "Hot & cold water mixer",
          "Anti-skid flooring"
        ]
      }
    ],
    configuration: [
      {
        type: "2 BHK",
        area: "700-800 sq.ft",
        price: "₹98 Lakhs onwards"
      },
      {
        type: "3 BHK",
        area: "1000-1150 sq.ft",
        price: "₹1.35 Cr onwards"
      }
    ],
    nearbyLocations: [
      { name: "Jogeshwari Metro Station", distance: "8 min" },
      { name: "Jogeshwari Railway Station", distance: "10 min" },
      { name: "Western Express Highway", distance: "5 min" },
      { name: "Oshiwara", distance: "7 min" },
      { name: "Lokhandwala", distance: "12 min" },
      { name: "Schools & Hospitals", distance: "5-10 min" }
    ]
  },

  // DREAM RESIDENCY
  {
    id: 7,
    slug: "dream-residency",
    name: "Dream Residency",
    location: "Karjat (W)",
    area: "Karjat",
    rera: "P51800078901",
    type: "1BHK & 2BHK Weekend Homes",
    status: "Ongoing",
    category: "residential",
    price: "₹32 Lakhs Onwards",
    possession: "December 2026",
    image: project3,
    images: [project3, hero1, hero2],
    description: "Dream Residency is an idyllic weekend retreat nestled in the scenic surroundings of Karjat. Offering spacious 1BHK and 2BHK homes amidst lush greenery, this project is perfect for those seeking a peaceful escape from the city while staying connected to Mumbai.",
    highlights: [
      "MahaRERA Approved - P51800078901",
      "Scenic hill and valley views",
      "Clean & pollution-free environment",
      "Close to Karjat Railway Station",
      "2.5 hours from Mumbai by train",
      "Weekend home & investment opportunity",
      "Vastu-compliant design",
      "Green building practices"
    ],
    amenities: [
      "Swimming Pool",
      "Clubhouse",
      "Landscaped Gardens",
      "Children's Play Area",
      "Jogging Track",
      "Outdoor Sports Area",
      "24/7 Security",
      "Covered Parking",
      "Power Backup",
      "Rainwater Harvesting",
      "Nature Walk Path",
      "Bonfire Area"
    ],
    specifications: [
      {
        title: "Living Areas",
        details: [
          "Vitrified tile flooring",
          "Premium quality paint",
          "Large windows with nature views"
        ]
      },
      {
        title: "Kitchen",
        details: [
          "Granite countertops",
          "Ceramic wall tiles",
          "Modular kitchen provision"
        ]
      },
      {
        title: "Bathrooms",
        details: [
          "Designer tiles",
          "Premium sanitary fittings",
          "Anti-skid flooring"
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
        type: "2 BHK",
        area: "580-680 sq.ft",
        price: "₹52 Lakhs onwards"
      }
    ],
    nearbyLocations: [
      { name: "Karjat Railway Station", distance: "10 min" },
      { name: "Ulhas River", distance: "5 min" },
      { name: "Kondana Caves", distance: "15 min" },
      { name: "Bhivpuri Waterfall", distance: "20 min" },
      { name: "Mumbai", distance: "2.5 hrs by train" },
      { name: "Pune", distance: "2 hrs by road" }
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
    image: hero2,
    images: [hero2, project2, project1],
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
