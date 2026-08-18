export const servicesData = [
  {
    id: "smart-irrigation",
    title: "Precision Smart Irrigation Setup",
    icon: "Droplets",
    badge: "Most Popular",
    image: "/services_hero.jpg",
    shortDesc: "Automated, sensor-driven watering systems tailored for your soil profile and crop root zones.",
    fullDesc: "We design and deploy closed-loop irrigation controllers that eliminate water waste while ensuring crops never experience moisture stress. Our system evaluates evapotranspiration (ET), soil tension, and weather forecasts to automatically trigger precise irrigation runs.",
    benefits: [
      "Up to 45% reduction in annual water consumption",
      "Prevents root rot, nutrient leaching, and fungal growth",
      "Remote zone control via smartphone app",
      "Solar powered options for off-grid fields"
    ]
  },
  {
    id: "crop-health-ai",
    title: "AI Crop Health & Disease Diagnostics",
    icon: "BrainCircuit",
    badge: "AI Powered",
    image: "/product_saas.jpg",
    shortDesc: "Continuous multispectral and satellite scanning to pinpoint disease, pests, and nutrient strain.",
    fullDesc: "Leveraging computer vision and satellite spectral analysis, AgroBloom flags early anomalies before visual symptoms appear. Receive push notifications pinpointing exact GPS coordinates of pest hotspots or nitrogen stress.",
    benefits: [
      "Detect crop stress 14 days before visible leaf yellowing",
      "Targeted chemical application reducing spray costs by 30%",
      "Automated disease risk index based on humidity & temperature",
      "Weekly PDF agronomic reports for farm managers"
    ]
  },
  {
    id: "soil-mapping",
    title: "High-Resolution Soil & Topography Mapping",
    icon: "Layers",
    badge: "Hardware & Survey",
    image: "/product_scanner.jpg",
    shortDesc: "3D topography elevation mapping, electro-conductivity scan, and soil zone profiling.",
    fullDesc: "Our field surveying team maps your farm down to centimeter accuracy using RTK GPS and electro-conductivity sensors. Identify soil texture shifts, drainage bottlenecks, and micro-climates across every acre.",
    benefits: [
      "Variable rate fertilization zone prescription maps",
      "Optimize field tile drainage and terrace layout",
      "Accurate soil organic matter & CEC baseline profiling",
      "Direct export to tractor GPS guidance displays"
    ]
  },
  {
    id: "drone-scanning",
    title: "Autonomous Thermal & Multispectral Drone Audits",
    icon: "Plane",
    badge: "Aerial Survey",
    image: "/products_hero.jpg",
    shortDesc: "Scheduled UAV flyovers delivering centimeter-accurate orthomosaic maps and plant counts.",
    fullDesc: "Our licensed drone operators perform scheduled autonomous flights over your fields. Generate precise stand counts, emergence uniformity metrics, and thermal canopy stress overlays.",
    benefits: [
      "Early stand count evaluation post-emergence",
      "Identify clogged irrigation nozzles and pivot line leaks",
      "Rapid storm damage assessment for crop insurance claims",
      "High-resolution 3D canopy volume measurements"
    ]
  }
];

export const pricingTiers = [
  {
    id: "starter",
    name: "Growth Starter",
    acres: "Up to 250 Acres",
    price: "₹14,999",
    period: "/month",
    features: [
      "5 AgroNode Soil Telemetry Sensors",
      "BloomVision Satellite Dashboard (Weekly)",
      "Automated Weather Alerting",
      "Email & Chat Technical Support",
      "Mobile App Access (3 Users)"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    id: "pro",
    name: "Enterprise Acre Pro",
    acres: "Up to 1,500 Acres",
    price: "₹39,999",
    period: "/month",
    features: [
      "20 AgroNode Soil Telemetry Sensors",
      "1 AgroSense AI Edge Gateway",
      "Daily Planet Labs Satellite Imagery (3m)",
      "Automated Valve Control Integration",
      "Quarterly Drone Multispectral Survey",
      "Dedicated Agronomist Account Manager"
    ],
    cta: "Deploy Pro Stack",
    popular: true
  },
  {
    id: "custom",
    name: "Industrial & Agri-Corp",
    acres: "1,500+ Acres / Multi-farm",
    price: "Custom",
    period: "quote",
    features: [
      "Custom sensor density deployment",
      "Unlimited edge computing gateways",
      "Full API & ERP / John Deere Sync",
      "Bi-weekly drone survey flight plan",
      "On-site installation & training team",
      "24/7 Priority Telephone Support"
    ],
    cta: "Contact Sales Team",
    popular: false
  }
];
