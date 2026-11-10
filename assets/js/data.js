/**
 * BUILDIQ 2027 - Centralized Dynamic Data Store
 * Stores ONLY repeating cards, lists of items, and form dropdown options.
 * Single-use page headings, paragraphs, heroes, and static sections live directly in the HTML files.
 */
window.BUILDIQ_DATA = {
  // 1. Technology Ecosystem Strip (Homepage)
  technologyStrip: [
    { id: "ts-1", title: "Smart Home Automation", icon: "home", slug: "smart-home-automation" },
    { id: "ts-2", title: "Building Management Systems", icon: "building", slug: "building-management-systems" },
    { id: "ts-3", title: "IoT & Connectivity", icon: "wifi", slug: "networking-connected-infrastructure" },
    { id: "ts-4", title: "Intelligent Lighting", icon: "lightbulb", slug: "intelligent-lighting-technologies" },
    { id: "ts-5", title: "Security & Surveillance", icon: "shield", slug: "smart-security-surveillance" },
    { id: "ts-6", title: "Energy Management", icon: "zap", slug: "energy-management-smart-electrical-solutions" }
  ],

  // 2. Welcome Highlight Stat Cards (Homepage)
  welcomeHighlights: [
    { value: "3", label: "Days", icon: "calendar" },
    { value: "10", label: "Product Categories", icon: "building" },
    { value: "18+", label: "Visitor Profiles", icon: "users" },
    { value: "5", label: "Concurrent Expos", icon: "layers" }
  ],

  // 3. 10 Official Exhibit Categories (Cards & Modal Solutions List)
  exhibitCategories: [
    {
      id: "cat-01",
      displayOrder: 1,
      active: true,
      slug: "smart-home-automation",
      title: "Smart Home Automation",
      shortTitle: "Smart Home Automation",
      icon: "Home",
      shortDescription: "Home automation systems, smart switches, intelligent controls, connected appliances, voice-controlled solutions and residential gateways.",
      fullDescription: "Home automation systems, smart switches, intelligent controls, connected appliances, voice-controlled solutions, smart sensors, home gateways and integrated residential automation.",
      image: "assets/images/smart-home-automation.png",
      fallbackImage: "assets/images/smart-home-control-panel.png",
      solutions: [
        "Home Automation Systems",
        "Smart Switches & Touch Panels",
        "Intelligent Controls",
        "Connected Appliances",
        "Voice-Controlled Solutions",
        "Smart Sensors",
        "Home Gateways",
        "Integrated Residential Automation"
      ]
    },
    {
      id: "cat-02",
      displayOrder: 2,
      active: true,
      slug: "building-management-systems",
      title: "Building Management Systems",
      shortTitle: "Building Management Systems",
      icon: "Building2",
      shortDescription: "Building Management Systems (BMS), Integrated Building Management Systems (IBMS), automation controllers, IoT platforms and centralised controls.",
      fullDescription: "Building Management Systems (BMS), Integrated Building Management Systems (IBMS), automation controllers, IoT platforms, intelligent sensors, monitoring systems and centralised building controls.",
      image: "assets/images/building-management-systems.png",
      fallbackImage: "assets/images/smart-building-software.png",
      solutions: [
        "Building Management Systems (BMS)",
        "Integrated Building Management Systems (IBMS)",
        "Automation Controllers",
        "IoT Platforms",
        "Intelligent Sensors",
        "Monitoring Systems",
        "Centralised Building Controls"
      ]
    },
    {
      id: "cat-03",
      displayOrder: 3,
      active: true,
      slug: "intelligent-lighting-technologies",
      title: "Intelligent Lighting Technologies",
      shortTitle: "Intelligent Lighting",
      icon: "Lightbulb",
      shortDescription: "Smart LED lighting, architectural lighting, automated lighting controls, dimming systems, occupancy sensors and daylight harvesting.",
      fullDescription: "Smart LED lighting, architectural lighting, automated lighting controls, dimming systems, occupancy sensors, daylight harvesting, lighting management and connected lighting solutions.",
      image: "assets/images/intelligent-lighting.png",
      fallbackImage: "assets/images/integrated-smart-spaces.png",
      solutions: [
        "Smart LED Lighting",
        "Architectural Lighting",
        "Automated Lighting Controls",
        "Dimming Systems",
        "Occupancy Sensors",
        "Daylight Harvesting",
        "Lighting Management",
        "Connected Lighting Solutions"
      ]
    },
    {
      id: "cat-04",
      displayOrder: 4,
      active: true,
      slug: "smart-security-surveillance",
      title: "Smart Security & Surveillance",
      shortTitle: "Security & Access Control",
      icon: "ShieldCheck",
      shortDescription: "CCTV and IP surveillance, video door phones, biometric access control, smart locks, intrusion detection and perimeter security.",
      fullDescription: "CCTV and IP surveillance, video door phones, biometric access control, smart locks, intrusion detection, perimeter security, integrated security platforms and monitoring solutions.",
      image: "assets/images/smart-security-surveillance.png",
      fallbackImage: "assets/images/smart-building-tower.jpg",
      solutions: [
        "CCTV & IP Surveillance",
        "Video Door Phones",
        "Biometric Access Control",
        "Smart Locks",
        "Intrusion Detection",
        "Perimeter Security",
        "Integrated Security Platforms",
        "Monitoring Solutions"
      ]
    },
    {
      id: "cat-05",
      displayOrder: 5,
      active: true,
      slug: "audio-visual-communication-solutions",
      title: "Audio-Visual & Communication Solutions",
      shortTitle: "AV & Communication",
      icon: "MonitorSpeaker",
      shortDescription: "Professional audio systems, video conferencing, interactive displays, digital signage, home theatres and integrated AV controls.",
      fullDescription: "Professional audio systems, video conferencing, interactive displays, digital signage, home theatres, integrated AV controls, meeting room technologies and communication systems.",
      image: "assets/images/av-communication-solutions.jpg",
      fallbackImage: "assets/images/integrated-smart-spaces.png",
      solutions: [
        "Professional Audio Systems",
        "Video Conferencing",
        "Interactive Displays",
        "Digital Signage",
        "Home Theatres",
        "Integrated AV Controls",
        "Meeting Room Technologies",
        "Communication Systems"
      ]
    },
    {
      id: "cat-06",
      displayOrder: 6,
      active: true,
      slug: "smart-hvac-climate-management",
      title: "Smart HVAC & Climate Management",
      shortTitle: "Smart HVAC & Climate",
      icon: "Wind",
      shortDescription: "Intelligent air-conditioning controls, smart thermostats, HVAC automation, ventilation management and indoor air quality monitoring.",
      fullDescription: "Intelligent air-conditioning controls, smart thermostats, HVAC automation, ventilation management, indoor air quality monitoring, environmental sensors and climate optimisation.",
      image: "assets/images/smart-hvac-climate.jpg",
      fallbackImage: "assets/images/smart-home-control-panel.png",
      solutions: [
        "Intelligent Air-Conditioning Controls",
        "Smart Thermostats",
        "HVAC Automation",
        "Ventilation Management",
        "Indoor Air Quality Monitoring",
        "Environmental Sensors",
        "Climate Optimisation"
      ]
    },
    {
      id: "cat-07",
      displayOrder: 7,
      active: true,
      slug: "energy-management-smart-electrical-solutions",
      title: "Energy Management & Smart Electrical Solutions",
      shortTitle: "Intelligent Electrical Systems",
      icon: "Zap",
      shortDescription: "Energy monitoring systems, smart meters, intelligent power management, energy automation, load management and connected electrical devices.",
      fullDescription: "Energy monitoring systems, smart meters, intelligent power management, energy automation, load management, connected electrical devices and energy-efficient building technologies.",
      image: "assets/images/energy-smart-electrical.png",
      fallbackImage: "assets/images/smart-building-tower.jpg",
      solutions: [
        "Energy Monitoring Systems",
        "Smart Meters",
        "Intelligent Power Management",
        "Energy Automation",
        "Load Management",
        "Connected Electrical Devices",
        "Energy-Efficient Building Technologies"
      ]
    },
    {
      id: "cat-08",
      displayOrder: 8,
      active: true,
      slug: "networking-connected-infrastructure",
      title: "Networking & Connected Infrastructure",
      shortTitle: "Networking & Infrastructure",
      icon: "Network",
      shortDescription: "Structured cabling, fibre optics, networking equipment, wireless connectivity, IoT gateways and connected building platforms.",
      fullDescription: "Structured cabling, fibre optics, networking equipment, wireless connectivity, IoT gateways, communication infrastructure, network management and connected building platforms.",
      image: "assets/images/networking-connected-infrastructure.png",
      fallbackImage: "assets/images/building-management-systems.png",
      solutions: [
        "Structured Cabling",
        "Fibre Optics",
        "Networking Equipment",
        "Wireless Connectivity",
        "IoT Gateways",
        "Communication Infrastructure",
        "Network Management",
        "Connected Building Platforms"
      ]
    },
    {
      id: "cat-09",
      displayOrder: 9,
      active: true,
      slug: "smart-building-technologies-software",
      title: "Smart Building Technologies & Software",
      shortTitle: "Smart Building Software",
      icon: "Cpu",
      shortDescription: "Building analytics, digital building platforms, building performance monitoring, smart facility software and predictive maintenance.",
      fullDescription: "Building analytics, digital building platforms, building performance monitoring, smart facility software, predictive maintenance, IoT applications and intelligent building management solutions.",
      image: "assets/images/smart-building-software.png",
      fallbackImage: "assets/images/building-management-systems.png",
      solutions: [
        "Building Analytics",
        "Digital Building Platforms",
        "Building Performance Monitoring",
        "Smart Facility Software",
        "Predictive Maintenance",
        "IoT Applications",
        "Intelligent Building Management Solutions"
      ]
    },
    {
      id: "cat-10",
      displayOrder: 10,
      active: true,
      slug: "integrated-smart-space-solutions",
      title: "Integrated Smart Space Solutions",
      shortTitle: "Integrated Smart Spaces",
      icon: "Layers",
      shortDescription: "Integrated solutions for smart homes, offices, hotels, hospitals, educational institutions, industrial facilities and commercial complexes.",
      fullDescription: "Integrated solutions for smart homes, offices, hotels, hospitals, educational institutions, industrial facilities, commercial complexes and other intelligent environments.",
      image: "assets/images/integrated-smart-spaces.png",
      fallbackImage: "assets/images/smart-building-tower.jpg",
      solutions: [
        "Smart Homes & Luxury Residences",
        "Smart Offices & Corporate Campuses",
        "Smart Hotels & Hospitality",
        "Smart Hospitals & Healthcare",
        "Educational Institutions",
        "Industrial Facilities",
        "Commercial Complexes"
      ]
    }
  ],

  // 4. Why BUILDIQ Benefit Cards (8 items)
  whyBuildiqBenefits: [
    {
      id: "wb-1",
      title: "Showcase Technology Innovations",
      description: "Present the latest smart building products, intelligent systems and integrated solutions to a targeted industry audience.",
      icon: "Sparkles",
      tag: "Product Showcase"
    },
    {
      id: "wb-2",
      title: "Connect with Decision-Makers",
      description: "Engage with architects, developers, consultants, contractors, system integrators and facility management professionals.",
      icon: "Users",
      tag: "B2B Networking"
    },
    {
      id: "wb-3",
      title: "Expand Market Reach",
      description: "Strengthen brand visibility and explore business opportunities across Tamil Nadu, South India and other Indian markets.",
      icon: "Globe",
      tag: "Market Expansion"
    },
    {
      id: "wb-4",
      title: "Develop Channel Partnerships",
      description: "Connect with dealers, distributors, resellers, electrical contractors and technology solution providers.",
      icon: "Handshake",
      tag: "Channel Growth"
    },
    {
      id: "wb-5",
      title: "Generate Business Enquiries",
      description: "Interact with prospective buyers, project stakeholders, specifiers and technology adopters.",
      icon: "TrendingUp",
      tag: "Lead Generation"
    },
    {
      id: "wb-6",
      title: "Introduce New Products",
      description: "Demonstrate new technologies, product innovations and integrated solutions.",
      icon: "Rocket",
      tag: "Product Launches"
    },
    {
      id: "wb-7",
      title: "Explore Project Opportunities",
      description: "Build relationships with professionals involved in residential, commercial, industrial and institutional developments.",
      icon: "Building",
      tag: "Project Pipeline"
    },
    {
      id: "wb-8",
      title: "Strengthen Industry Presence",
      description: "Position your organisation within the rapidly evolving smart building and intelligent infrastructure ecosystem.",
      icon: "Award",
      tag: "Brand Leadership"
    }
  ],

  // 5. Why Exhibit Strategic Pillars (6 items)
  whyExhibitPillars: [
    {
      id: "we-1",
      number: "01",
      title: "Connect with the Right Audience",
      description: "Meet architects, interior designers, developers, consultants, contractors, system integrators, facility managers and technology decision-makers.",
      icon: "UserCheck"
    },
    {
      id: "we-2",
      number: "02",
      title: "Expand Your Dealer and Distribution Network",
      description: "Engage with electrical dealers, automation distributors, technology resellers, system integrators and regional channel partners.",
      icon: "Share2"
    },
    {
      id: "we-3",
      number: "03",
      title: "Promote Your Products and Solutions",
      description: "Demonstrate your latest innovations, integrated technologies and application-based solutions to a relevant professional audience.",
      icon: "Presentation"
    },
    {
      id: "we-4",
      number: "04",
      title: "Develop Business Relationships",
      description: "Build connections with project developers, infrastructure companies, commercial establishments, institutional buyers and other potential customers.",
      icon: "Briefcase"
    },
    {
      id: "we-5",
      number: "05",
      title: "Strengthen Brand Visibility",
      description: "Increase your organisation's visibility among stakeholders involved in the specification, procurement and deployment of smart building technologies.",
      icon: "Eye"
    },
    {
      id: "we-6",
      number: "06",
      title: "Explore Emerging Markets",
      description: "Position your products and services in the expanding markets for intelligent homes, smart offices, connected buildings and energy-efficient infrastructure.",
      icon: "Compass"
    }
  ],

  // 6. Who Should Exhibit List (15 items)
  whoShouldExhibit: [
    { id: "wse-01", title: "Smart home technology manufacturers", icon: "Home" },
    { id: "wse-02", title: "Home and building automation companies", icon: "Sliders" },
    { id: "wse-03", title: "BMS and IBMS solution providers", icon: "Server" },
    { id: "wse-04", title: "Smart electrical product manufacturers", icon: "Zap" },
    { id: "wse-05", title: "Lighting manufacturers and technology brands", icon: "Lightbulb" },
    { id: "wse-06", title: "Security, surveillance and access control companies", icon: "ShieldCheck" },
    { id: "wse-07", title: "Audio-visual and communication technology providers", icon: "MonitorSpeaker" },
    { id: "wse-08", title: "HVAC automation and climate control companies", icon: "Wind" },
    { id: "wse-09", title: "Energy management and monitoring solution providers", icon: "Activity" },
    { id: "wse-10", title: "IoT technology and software companies", icon: "Cpu" },
    { id: "wse-11", title: "Networking and connectivity solution providers", icon: "Wifi" },
    { id: "wse-12", title: "Smart switches, sensors and control device manufacturers", icon: "ToggleRight" },
    { id: "wse-13", title: "System integrators and technology consultants", icon: "Workflow" },
    { id: "wse-14", title: "Dealers, distributors and channel partners", icon: "Network" },
    { id: "wse-15", title: "Smart building infrastructure and engineering companies", icon: "Building2" }
  ],

  // 7. Visitor Profile Sector Groups (4 cards)
  visitorGroups: [
    {
      id: "vg-1",
      groupTitle: "Architecture, Design & Real Estate Development",
      description: "Visionaries, project owners and planners defining residential, commercial and institutional developments.",
      icon: "Compass",
      audiences: [
        { id: "vc-01", title: "Real estate developers and builders", icon: "Building2" },
        { id: "vc-02", title: "Architects and architectural consultants", icon: "Compass" },
        { id: "vc-03", title: "Interior designers and design consultants", icon: "Layout" },
        { id: "vc-13", title: "Commercial building owners and operators", icon: "Landmark" },
        { id: "vc-14", title: "Hotel, hospital and institutional project representatives", icon: "Hotel" }
      ]
    },
    {
      id: "vg-2",
      groupTitle: "Engineering, MEP, HVAC & Electrical Contracting",
      description: "Technical consultants and contracting specialists specifying and deploying core building systems.",
      icon: "Zap",
      audiences: [
        { id: "vc-04", title: "MEP consultants and engineering professionals", icon: "Settings" },
        { id: "vc-05", title: "Electrical consultants and contractors", icon: "Zap" },
        { id: "vc-12", title: "HVAC consultants and contractors", icon: "Wind" },
        { id: "vc-17", title: "Government and public infrastructure representatives", icon: "Shield" }
      ]
    },
    {
      id: "vg-3",
      groupTitle: "Automation, System Integration, IT & Security",
      description: "Technology integrators connecting hardware, software, networks and intelligent building automation.",
      icon: "Cpu",
      audiences: [
        { id: "vc-06", title: "Smart home and building automation integrators", icon: "Home" },
        { id: "vc-07", title: "System integrators and technology solution providers", icon: "Workflow" },
        { id: "vc-10", title: "IT and networking professionals", icon: "Network" },
        { id: "vc-11", title: "Security and surveillance solution providers", icon: "ShieldCheck" }
      ]
    },
    {
      id: "vg-4",
      groupTitle: "Facility Management, Channel Partners & Procurement",
      description: "Operational leaders, corporate administration heads, procurement specialists and trade distribution partners.",
      icon: "Briefcase",
      audiences: [
        { id: "vc-08", title: "Facility and property management companies", icon: "Sliders" },
        { id: "vc-09", title: "Corporate infrastructure and administration heads", icon: "Users" },
        { id: "vc-15", title: "Industrial facility managers", icon: "Factory" },
        { id: "vc-16", title: "Dealers, distributors and resellers", icon: "Share2" },
        { id: "vc-18", title: "Project management and procurement professionals", icon: "CheckCircle2" }
      ]
    }
  ],

  // 8. Complete 18 Visitor Profile Directory Cards
  visitorDirectory: [
    { id: "vc-01", title: "Real estate developers and builders", group: "Development & Design", icon: "Building2" },
    { id: "vc-02", title: "Architects and architectural consultants", group: "Development & Design", icon: "Compass" },
    { id: "vc-03", title: "Interior designers and design consultants", group: "Development & Design", icon: "Layout" },
    { id: "vc-04", title: "MEP consultants and engineering professionals", group: "Engineering & MEP", icon: "Settings" },
    { id: "vc-05", title: "Electrical consultants and contractors", group: "Engineering & MEP", icon: "Zap" },
    { id: "vc-06", title: "Smart home and building automation integrators", group: "Automation & IT", icon: "Home" },
    { id: "vc-07", title: "System integrators and technology solution providers", group: "Automation & IT", icon: "Workflow" },
    { id: "vc-08", title: "Facility and property management companies", group: "Operations & Trade", icon: "Sliders" },
    { id: "vc-09", title: "Corporate infrastructure and administration heads", group: "Operations & Trade", icon: "Users" },
    { id: "vc-10", title: "IT and networking professionals", group: "Automation & IT", icon: "Network" },
    { id: "vc-11", title: "Security and surveillance solution providers", group: "Automation & IT", icon: "ShieldCheck" },
    { id: "vc-12", title: "HVAC consultants and contractors", group: "Engineering & MEP", icon: "Wind" },
    { id: "vc-13", title: "Commercial building owners and operators", group: "Development & Design", icon: "Landmark" },
    { id: "vc-14", title: "Hotel, hospital and institutional project representatives", group: "Development & Design", icon: "Hotel" },
    { id: "vc-15", title: "Industrial facility managers", group: "Operations & Trade", icon: "Factory" },
    { id: "vc-16", title: "Dealers, distributors and resellers", group: "Operations & Trade", icon: "Share2" },
    { id: "vc-17", title: "Government and public infrastructure representatives", group: "Engineering & MEP", icon: "Shield" },
    { id: "vc-18", title: "Project management and procurement professionals", group: "Operations & Trade", icon: "CheckCircle2" }
  ],

  // 9. Why Visit Core Benefit Cards (6 items)
  whyVisitBenefits: [
    {
      id: "vb-1",
      title: "Discover Smart Technologies",
      description: "Discover the latest smart home and building automation technologies alongside intelligent lighting, security and energy management solutions.",
      icon: "Cpu",
      highlight: "Technology Discovery"
    },
    {
      id: "vb-2",
      title: "Evaluate Products",
      description: "Compare products and technologies from multiple manufacturers and understand how connected technologies can improve building performance.",
      icon: "Sliders",
      highlight: "Product Evaluation"
    },
    {
      id: "vb-3",
      title: "Meet Manufacturers",
      description: "Interact directly with product specialists, R&D engineers and technology providers demonstrating live smart building systems.",
      icon: "Users",
      highlight: "Direct Engagement"
    },
    {
      id: "vb-4",
      title: "Connect with Suppliers",
      description: "Identify suitable suppliers, dealers and system integration partners across all ten intelligent building categories.",
      icon: "Handshake",
      highlight: "Supplier Networking"
    },
    {
      id: "vb-5",
      title: "Explore Project Solutions",
      description: "Explore solutions for ongoing and upcoming building projects across smart offices, intelligent homes and commercial infrastructure.",
      icon: "Building2",
      highlight: "Project Opportunities"
    },
    {
      id: "vb-6",
      title: "Build Industry Relationships",
      description: "Develop new professional and business relationships with peers, technology innovators and infrastructure leaders.",
      icon: "Network",
      highlight: "Industry Connections"
    }
  ],

  // 10. Official Visitor Takeaway Checklist (9 items)
  visitorChecklist: [
    "Discover the latest smart home and building automation technologies.",
    "Explore intelligent lighting, security and energy management solutions.",
    "Compare products and technologies from multiple manufacturers.",
    "Interact directly with product specialists and technology providers.",
    "Identify suitable suppliers, dealers and system integration partners.",
    "Explore solutions for ongoing and upcoming building projects.",
    "Understand how connected technologies can improve building performance.",
    "Discover innovations in smart offices, intelligent homes and commercial infrastructure.",
    "Develop new professional and business relationships."
  ],

  // 11. Market Opportunity Drivers List (8 items)
  marketDrivers: [
    { id: "md-1", text: "Growth in residential and commercial real estate.", icon: "building" },
    { id: "md-2", text: "Expansion of IT parks, corporate campuses and office developments.", icon: "cpu" },
    { id: "md-3", text: "Increasing adoption of smart home technologies.", icon: "home" },
    { id: "md-4", text: "Demand for energy-efficient buildings and intelligent electrical systems.", icon: "zap" },
    { id: "md-5", text: "Greater emphasis on safety, security and access management.", icon: "shield" },
    { id: "md-6", text: "Growing use of IoT, sensors and connected technologies.", icon: "wifi" },
    { id: "md-7", text: "Modernisation of hospitals, hotels, educational institutions and industrial facilities.", icon: "layers" },
    { id: "md-8", text: "Increasing demand for integrated building management and automation.", icon: "sliders" }
  ],

  // 12. Concurrent Exhibitions Cards (4 items)
  concurrentExhibitions: [
    {
      id: "ce-iconmeq",
      code: "ICONMEQ",
      fullName: "International Construction Machineries & Equipment Expo",
      focus: "Construction machinery, equipment and technologies.",
      logo: "assets/images/logos/iconmeq-logo.png",
      image: "assets/images/chennai-trade-centre-hall.png",
      sector: "Heavy Construction & Machinery",
      synergy: "Connects heavy project contractors and civil infrastructure developers with intelligent building systems."
    },
    {
      id: "ce-iconmat",
      code: "ICONMAT",
      fullName: "International Construction Materials Expo",
      focus: "Building materials, construction products and solutions.",
      logo: "assets/images/logos/iconmat-logo.png",
      image: "assets/images/smart-building-tower.jpg",
      sector: "Smart Materials & Structural Solutions",
      synergy: "Brings architects, specifiers and builders sourcing architectural envelopes alongside smart automation."
    },
    {
      id: "ce-elvision",
      code: "ELVISION",
      fullName: "Electrical Industry Expo",
      focus: "Electrical products, systems and power solutions.",
      logo: "assets/images/logos/elvision-logo.png",
      image: "assets/images/energy-smart-electrical.png",
      sector: "Electrical Systems & Power Infrastructure",
      synergy: "Direct synergy with smart switchgear, energy monitoring, MEP consultants and electrical contractors."
    },
    {
      id: "ce-propaint",
      code: "PROPAINT",
      fullName: "International Paints & Coating Products Expo",
      focus: "Paint products, coatings, finishes and related solutions.",
      logo: "assets/images/logos/propaint-logo.png",
      image: "assets/images/integrated-smart-spaces.png",
      sector: "Architectural Finishes & Protective Coatings",
      synergy: "Attracts interior designers, commercial developers and facility finishing specialists."
    }
  ],

  // 13. Sponsorship Tier Cards (7 items)
  sponsorshipTiers: [
    {
      id: "sp-title",
      name: "Title & Presenting",
      badge: "Premier Tier",
      icon: "Crown",
      description: "Exclusive flagship positioning across all exhibition touchpoints, main entrance arches, keynote stage and official marketing campaigns.",
      highlights: [
        "Title or Presenting credit with official BUILDIQ 2027 branding",
        "Prime island exhibition space at the main hall entrance",
        "Keynote speaking & VIP inauguration prominence",
        "Omnichannel digital, print and on-site branding dominance"
      ]
    },
    {
      id: "sp-platinum",
      name: "Platinum Sponsorship",
      badge: "Executive Tier",
      icon: "Award",
      description: "High-impact executive visibility designed for global smart building and automation market leaders.",
      highlights: [
        "Premium exhibition booth in high-footfall technology zone",
        "High-visibility branding across registration & conference zones",
        "Dedicated product demonstration & launch session slot",
        "Priority B2B stakeholder introduction support"
      ]
    },
    {
      id: "sp-gold",
      name: "Gold Sponsorship",
      badge: "Strategic Tier",
      icon: "Star",
      description: "Strategic multi-channel brand exposure tailored for established technology manufacturers and solution providers.",
      highlights: [
        "Preferred exhibition space location",
        "Logo placement on official event signage & visitor guide",
        "Inclusion in pre-event digital & media promotions",
        "Knowledge session participation opportunity"
      ]
    },
    {
      id: "sp-silver",
      name: "Silver Sponsorship",
      badge: "Growth Tier",
      icon: "Shield",
      description: "Targeted brand reinforcement for growing smart building brands expanding across South India and national markets.",
      highlights: [
        "Co-branded visibility across key venue touchpoints",
        "Digital catalog & website sponsor recognition",
        "On-site directional & pavilion branding inclusions",
        "VIP networking pass allocation"
      ]
    },
    {
      id: "sp-branding",
      name: "Branding Opportunities",
      badge: "Custom Inventory",
      icon: "Sparkles",
      description: "High-visibility physical and digital branding formats across Chennai Trade Centre.",
      highlights: [
        "Entrance and registration branding",
        "Main stage and conference branding",
        "Digital and promotional media visibility",
        "Special branding and promotional integrations"
      ]
    },
    {
      id: "sp-demos",
      name: "Product Demonstrations",
      badge: "Live Experience",
      icon: "Presentation",
      description: "Showcase live IoT, BMS, lighting and automation workflows in action before specifiers and buyers.",
      highlights: [
        "Product demonstration and launch opportunities",
        "Knowledge sessions and industry presentations",
        "Interactive smart-space experience zones",
        "Direct technical Q&A with project consultants"
      ]
    },
    {
      id: "sp-partnerships",
      name: "Industry Partnerships",
      badge: "Ecosystem Alliance",
      icon: "Handshake",
      description: "Collaborative associations for trade bodies, engineering councils, media platforms and knowledge institutions.",
      highlights: [
        "Visitor engagement and networking opportunities",
        "Industry association & institutional partnerships",
        "Trade media & technology publication alliances",
        "Delegation & knowledge exchange collaborations"
      ]
    }
  ],

  // 14. Official Sponsorship Opportunities Checklist (10 items)
  sponsorshipChecklist: [
    "Title and presenting sponsorship.",
    "Platinum, Gold and Silver sponsorships.",
    "Premium exhibition space.",
    "Entrance and registration branding.",
    "Main stage and conference branding.",
    "Digital and promotional media visibility.",
    "Product demonstration and launch opportunities.",
    "Knowledge sessions and industry presentations.",
    "Visitor engagement and networking opportunities.",
    "Special branding and promotional integrations."
  ],

  // 15. News Articles List & Showcase Gallery Cards
  newsArticles: [],

  mediaGallery: [
    {
      id: "gal-1",
      title: "Smart Home Automation & Touch Control Interfaces",
      category: "Smart Home Automation",
      image: "assets/images/smart-home-control-panel.png",
      caption: "Integrated residential automation, intelligent switches and connected living environments."
    },
    {
      id: "gal-2",
      title: "Centralised Building Management Systems (BMS & IBMS)",
      category: "Building Management Systems",
      image: "assets/images/building-management-systems.png",
      caption: "Real-time building telemetry, IoT sensor analytics and automated command centres."
    },
    {
      id: "gal-3",
      title: "Architectural & Connected LED Lighting Systems",
      category: "Intelligent Lighting",
      image: "assets/images/intelligent-lighting.png",
      caption: "Daylight harvesting, occupancy-driven dimming and smart commercial lighting."
    },
    {
      id: "gal-4",
      title: "Smart Electrical Switchgear & Power Monitoring",
      category: "Energy Management",
      image: "assets/images/energy-smart-electrical.png",
      caption: "Intelligent power distribution, load automation and energy-efficient building infrastructure."
    },
    {
      id: "gal-5",
      title: "Biometric Access & Integrated IP Surveillance",
      category: "Smart Security",
      image: "assets/images/smart-security-surveillance.png",
      caption: "Next-generation perimeter security, smart locks and AI-assisted monitoring platforms."
    },
    {
      id: "gal-6",
      title: "Networking & Fiber Optic Building Infrastructure",
      category: "Connected Infrastructure",
      image: "assets/images/networking-connected-infrastructure.png",
      caption: "High-speed structured cabling, IoT gateways and connected building backbones."
    },
    {
      id: "gal-7",
      title: "Digital Twin & Building Analytics Software",
      category: "Smart Building Software",
      image: "assets/images/smart-building-software.png",
      caption: "Predictive maintenance, 3D building performance modelling and smart facility platforms."
    },
    {
      id: "gal-8",
      title: "Smart HVAC & Precision Climate Controls",
      category: "Climate Management",
      image: "assets/images/smart-hvac-climate.jpg",
      caption: "Intelligent thermostats, indoor air quality monitoring and automated climate optimisation."
    },
    {
      id: "gal-9",
      title: "Connected Commercial Workspaces & AV Boardrooms",
      category: "Integrated Smart Spaces",
      image: "assets/images/integrated-smart-spaces.png",
      caption: "Future-ready commercial offices, boardrooms, hospitality and institutional developments."
    }
  ],

  // 16. FAQ Accordion List (6 items)
  faqs: [
    {
      id: "faq-1",
      question: "What are the official dates and venue for BUILDIQ 2027?",
      answer: "BUILDIQ 2027 – International Smart Building & Intelligent Infrastructure Expo will take place from 14–16 May 2027 at Chennai Trade Centre, Chennai, Tamil Nadu, India."
    },
    {
      id: "faq-2",
      question: "Who is the organiser of BUILDIQ 2027?",
      answer: "BUILDIQ 2027 is organised by FAIR CONNECTS INDIA LLP (FCI), based in Chennai, Tamil Nadu, India."
    },
    {
      id: "faq-3",
      question: "What product categories are featured at BUILDIQ 2027?",
      answer: "BUILDIQ features 10 official exhibit categories: Smart Home Automation, Building Management Systems (BMS/IBMS), Intelligent Lighting Technologies, Smart Security & Surveillance, Audio-Visual & Communication Solutions, Smart HVAC & Climate Management, Energy Management & Smart Electrical Solutions, Networking & Connected Infrastructure, Smart Building Technologies & Software, and Integrated Smart Space Solutions."
    },
    {
      id: "faq-4",
      question: "How can my company book a stall or exhibit at BUILDIQ 2027?",
      answer: "Technology manufacturers, brands, solution providers and distributors can submit an Exhibitor Enquiry through the 'Book a Stall' form on our website. The FAIR CONNECTS INDIA LLP exhibition team will connect with you regarding stall options and participation details."
    },
    {
      id: "faq-5",
      question: "Who can attend BUILDIQ 2027 as a visitor?",
      answer: "BUILDIQ is a focused B2B exhibition designed for real estate developers, architects, interior designers, MEP consultants, electrical contractors, smart home & building automation integrators, system integrators, facility managers, IT & networking professionals, HVAC consultants, building owners, dealers, distributors, government representatives, and procurement professionals."
    },
    {
      id: "faq-6",
      question: "Which concurrent exhibitions are held alongside BUILDIQ 2027?",
      answer: "BUILDIQ 2027 is organised concurrently at Chennai Trade Centre alongside four specialised industry exhibitions: ICONMEQ (International Construction Machineries & Equipment Expo), ICONMAT (International Construction Materials Expo), ELVISION (Electrical Industry Expo), and PROPAINT (International Paints & Coating Products Expo)."
    }
  ],

  // 17. Form Related Dropdown Options (for when forms are enabled)
  formDropdowns: {
    productCategories: [
      "1. Smart Home Automation",
      "2. Building Management Systems (BMS / IBMS)",
      "3. Intelligent Lighting Technologies",
      "4. Smart Security & Surveillance",
      "5. Audio-Visual & Communication Solutions",
      "6. Smart HVAC & Climate Management",
      "7. Energy Management & Smart Electrical Solutions",
      "8. Networking & Connected Infrastructure",
      "9. Smart Building Technologies & Software",
      "10. Integrated Smart Space Solutions",
      "Other Smart Building Solutions"
    ],
    visitorIndustries: [
      "Real estate developers and builders",
      "Architects and architectural consultants",
      "Interior designers and design consultants",
      "MEP consultants and engineering professionals",
      "Electrical consultants and contractors",
      "Smart home and building automation integrators",
      "System integrators and technology solution providers",
      "Facility and property management companies",
      "Corporate infrastructure and administration heads",
      "IT and networking professionals",
      "Security and surveillance solution providers",
      "HVAC consultants and contractors",
      "Commercial building owners and operators",
      "Hotel, hospital and institutional project representatives",
      "Industrial facility managers",
      "Dealers, distributors and resellers",
      "Government and public infrastructure representatives",
      "Project management and procurement professionals"
    ],
    sponsorshipInterests: [
      "Title & Presenting Sponsorship",
      "Platinum Sponsorship",
      "Gold Sponsorship",
      "Silver Sponsorship",
      "Entrance & Registration Branding",
      "Main Stage & Conference Branding",
      "Product Demonstration & Launch Opportunity",
      "Knowledge Sessions & Industry Presentations",
      "Industry Association / Media Partnership"
    ],
    enquiryTypes: [
      "Association & Institutional Partnership",
      "Media & Trade Press Partnership",
      "Speaker / Knowledge Session Proposal",
      "Concurrent Exhibitions Enquiry",
      "General Exhibition Enquiry"
    ]
  }
};
