export const productsData = [
  {
    id: "agro-node-pro",
    name: "AgroNode Pro Sensor",
    category: "hardware",
    price: "₹39,999",
    rating: 4.9,
    reviews: 128,
    badge: "Best Seller",
    image: "/product_node.jpg",
    shortDesc: "Solar-powered soil moisture, pH, EC & temperature telemetry unit.",
    description: "The AgroNode Pro delivers continuous multi-depth soil moisture, salinity, pH, and root-zone temperature metrics via cellular and LoRaWAN long-range connectivity. Designed for rugged field conditions with 10-year solar power lifespan.",
    specs: [
      { label: "Connectivity", value: "LoRaWAN / Cellular 4G LTE-M" },
      { label: "Power", value: "Solar Panel + Lithium Backup (10 yr)" },
      { label: "Sensory Depth", value: "10cm, 30cm, 60cm, 90cm multi-depth probe" },
      { label: "Enclosure", value: "IP68 Waterproof & UV Resistant" }
    ],
    features: [
      "Real-time telemetry sent every 15 minutes",
      "Automatic alert triggers on frost or drought thresholds",
      "Plug-and-play installation in under 10 minutes",
      "Includes 2-year cloud dashboard platform subscription"
    ]
  },
  {
    id: "agro-sense-ai",
    name: "AgroSense AI Gateway",
    category: "software",
    price: "₹71,999",
    rating: 5.0,
    reviews: 94,
    badge: "AI Powered",
    image: "/product_gateway.jpg",
    shortDesc: "Edge AI compute node for real-time field data processing and micro-climate forecasting.",
    description: "Connect up to 250 field sensors locally without internet latency. AgroSense AI analyzes localized humidity, evapotranspiration rates, and satellite data to issue precision irrigation commands.",
    specs: [
      { label: "Processor", value: "Quad-Core ARM Neural Engine" },
      { label: "Coverage", value: "Up to 5,000 Acres per Gateway" },
      { label: "Protocol Support", value: "LoRaWAN, Zigbee, Modbus RTU, MQTT" },
      { label: "Backup Storage", value: "64GB On-board Encrypted Buffer" }
    ],
    features: [
      "Offline edge processing during network dropouts",
      "Machine learning weather model adapted to your zip code",
      "Automated valve actuation interface",
      "Direct API integration with John Deere Operations Center"
    ]
  },
  {
    id: "bloom-drip-controller",
    name: "BloomDrip Smart Valve Controller",
    category: "hardware",
    price: "₹27,999",
    rating: 4.8,
    reviews: 76,
    badge: "Water Saver",
    image: "/product_valve.jpg",
    shortDesc: "Automated hydraulic valve controller for drip and pivot irrigation systems.",
    description: "Eliminate manual valve switching and overwatering. BloomDrip interfaces with electric and hydraulic valves to execute targeted zone watering schedules based on real-time transpiration metrics.",
    specs: [
      { label: "Valve Control", value: "Up to 8 DC Latching Solenoid Valves" },
      { label: "Wireless Range", value: "2.5 km Line-of-sight" },
      { label: "Battery", value: "Solar-recharged 18650 Pack" },
      { label: "Housing", value: "Vandal-proof NEMA 4X" }
    ],
    features: [
      "Saves up to 40% irrigation water usage",
      "Pressure drop leak detection alert system",
      "Custom fertigation dosing integration",
      "Manual override toggle button on hardware unit"
    ]
  },
  {
    id: "sky-scan-pro-drone",
    name: "SkyScan Multispectral Drone Probe",
    category: "drones",
    price: "₹1,99,999",
    rating: 4.9,
    reviews: 52,
    badge: "Enterprise",
    image: "/products_hero.jpg",
    shortDesc: "High-resolution NDVI and thermal imaging payload for crop health mapping.",
    description: "Scan up to 500 acres per flight with 5-band multispectral resolution. Detect nitrogen deficiency, weed infestations, and fungal outbreaks 2 weeks before visual symptoms manifest.",
    specs: [
      { label: "Bands", value: "NDVI, NDRE, Thermal, RGB, RedEdge" },
      { label: "Flight Time", value: "45 Minutes per Battery" },
      { label: "GSD Resolution", value: "2.1 cm/pixel at 120m altitude" },
      { label: "Compatibility", value: "DJI Mavic 3 Enterprise / Custom UAVs" }
    ],
    features: [
      "Autopilot field survey pattern generator included",
      "Instant orthomosaic stitching in AgroBloom Cloud",
      "Prescription map output for variable rate application",
      "Thermal stress index monitoring for early canopy heat detection"
    ]
  },
  {
    id: "soil-master-lab-kit",
    name: "SoilMaster Mobile NPK Scanner",
    category: "hardware",
    price: "₹51,999",
    rating: 4.7,
    reviews: 63,
    badge: "Instant Lab",
    image: "/product_scanner.jpg",
    shortDesc: "Portable optical spectroscopy scanner for immediate Nitrogen, Phosphorus & Potassium readings.",
    description: "Skip 2-week lab delays. SoilMaster measures soil organic matter, active carbon, and NPK nutrients instantly directly in the field using Near-Infrared (NIR) optical sensors.",
    specs: [
      { label: "Method", value: "NIR Spectroscopy + Optical Fluorescence" },
      { label: "Test Speed", value: "< 15 seconds per sample point" },
      { label: "GPS Sync", value: "Integrated RTK High Precision GPS" },
      { label: "Sync App", value: "Bluetooth 5.2 Mobile App" }
    ],
    features: [
      "Geotagged soil sample points automatically pinned to field map",
      "Custom fertilizer recommendations generated instantly",
      "Export CSV, SHP, and PDF reports for agronomists",
      "Rechargeable USB-C lithium battery with 500 tests per charge"
    ]
  },
  {
    id: "bloom-vision-software",
    name: "BloomVision Satellite & AI SaaS Platform",
    category: "software",
    price: "₹7,999/mo",
    rating: 5.0,
    reviews: 140,
    badge: "Cloud SaaS",
    image: "/product_saas.jpg",
    shortDesc: "All-in-one farm management software with daily satellite imagery and predictive yields.",
    description: "Unify sensor data, weather forecasts, satellite crop vigor imagery, and equipment tracking into a single sleek dashboard accessible on web and mobile devices.",
    specs: [
      { label: "Imagery Refresh", value: "Every 24-48 Hours (3m resolution)" },
      { label: "Supported Devices", value: "iOS, Android, Web Browser" },
      { label: "Data Import", value: "Shapefiles, ISO-XML, John Deere, Climate FieldView" },
      { label: "Users", value: "Unlimited farm team access" }
    ],
    features: [
      "Daily Sentinel & Planet Labs satellite imagery updates",
      "Yield prediction algorithm with 94% accuracy rating",
      "Automated field activity logging and cost accounting",
      "Custom agronomic advisor alert sharing link"
    ]
  }
];
