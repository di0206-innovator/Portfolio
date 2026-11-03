export interface BudgetItem {
  id: string;
  name: string;
  category: string;
  specs: string;
  price: number;
  qty: number;
  purpose: string;
}

export const SETUP_CATEGORIES = [
  "Professional Audio Capture",
  "Portable Video & Stabilization",
  "Lighting & Production Rigging",
  "High-Speed Storage & Power",
  "Campus Activations & Field Testing",
  "Production & Distribution Software",
] as const;

export const BUDGET_ITEMS: BudgetItem[] = [
  // 1. Professional Audio Capture ($707.00)
  {
    id: "dji-mic-2",
    name: "DJI Mic 2 (2 TX + 1 RX + Case)",
    category: "Professional Audio Capture",
    specs: "32-bit float internal, 250m range, 18-hr battery",
    price: 349.0,
    qty: 1,
    purpose: "Wireless low-latency speech capture for campus interviews and live voice prompts.",
  },
  {
    id: "shure-mv7-plus",
    name: "Shure MV7+ Broadcast Microphone",
    category: "Professional Audio Capture",
    specs: "USB-C/XLR hybrid, onboard DSP auto-leveling",
    price: 279.0,
    qty: 1,
    purpose: "Studio-fidelity desk voiceovers and remote podcast interviews.",
  },
  {
    id: "rode-lav-go",
    name: "Rode Lavalier GO Lapel Mic",
    category: "Professional Audio Capture",
    specs: "Omnidirectional 4.5mm miniature capsule",
    price: 79.0,
    qty: 1,
    purpose: "Discreet secondary lapel capture for street and cafeteria dialogues.",
  },

  // 2. Portable Video & Stabilization ($868.00)
  {
    id: "dji-pocket-3",
    name: "DJI Osmo Pocket 3 Creator Combo",
    category: "Portable Video & Stabilization",
    specs: "1\" CMOS sensor, 4K/120fps, 3-axis mechanical gimbal",
    price: 669.0,
    qty: 1,
    purpose: "Pocket-sized 4K cinematography for high-velocity documentary recording.",
  },
  {
    id: "zhiyun-smooth-5s",
    name: "Zhiyun Smooth 5S AI Pro Gimbal",
    category: "Portable Video & Stabilization",
    specs: "Magnetic AI visual tracker, built-in 650-lux fill light",
    price: 199.0,
    qty: 1,
    purpose: "Vertical 9:16 mobile stabilization for Instagram and YouTube Shorts.",
  },

  // 3. Lighting & Production Rigging ($372.00)
  {
    id: "amaran-mc-pro",
    name: "Aputure Amaran MC Pro RGBWW Panel",
    category: "Lighting & Production Rigging",
    specs: "IP65 weather-proof, magnetic mount, full HSI",
    price: 149.0,
    qty: 1,
    purpose: "Compact magnetic key light for night hackathons and dimly lit labs.",
  },
  {
    id: "ulanzi-vl110",
    name: "Ulanzi VL110 Magnetic Tube Wand",
    category: "Lighting & Production Rigging",
    specs: "Handheld RGB wand, 2500K-9000K, 2600mAh battery",
    price: 45.0,
    qty: 1,
    purpose: "Tactile rim lighting and colored ambient accents for interview setups.",
  },
  {
    id: "smallrig-tripod",
    name: "SmallRig Carbon Travel Tripod",
    category: "Lighting & Production Rigging",
    specs: "Carbon fiber legs, 360° fluid ball head, 1.3kg",
    price: 129.0,
    qty: 1,
    purpose: "Camera lock-off for stationary desk demos and over-the-shoulder capture.",
  },
  {
    id: "smallrig-cage",
    name: "SmallRig Mobile Video Rig Cage",
    category: "Lighting & Production Rigging",
    specs: "Dual silicone handles, cold shoe mounts",
    price: 49.0,
    qty: 1,
    purpose: "Two-handed stability when running through busy hackathon demo floors.",
  },

  // 4. High-Speed Storage & Power ($374.00)
  {
    id: "sandisk-ssd",
    name: "SanDisk 2TB Extreme PRO Portable SSD",
    category: "High-Speed Storage & Power",
    specs: "2000 MB/s NVMe, IP65 aluminum chassis",
    price: 199.0,
    qty: 1,
    purpose: "Instant on-set raw 4K video dumping and direct external editing.",
  },
  {
    id: "anker-737",
    name: "Anker 737 Power Bank (PowerCore 24K)",
    category: "High-Speed Storage & Power",
    specs: "24,000mAh, 140W bi-directional fast charging",
    price: 119.0,
    qty: 1,
    purpose: "Continuous power for cameras, microphones, phones, and laptop in the field.",
  },
  {
    id: "lexar-sd-cards",
    name: "2x Lexar 256GB Professional microSDXC",
    category: "High-Speed Storage & Power",
    specs: "160 MB/s read, V30 rating for 4K recording",
    price: 28.0,
    qty: 2,
    purpose: "Redundant high-speed media cards for the DJI Osmo Pocket 3.",
  },

  // 5. Campus Activations & Field Testing ($349.00)
  {
    id: "activation-kits",
    name: "5x Campus Voice-Sprint Activation Kits",
    category: "Campus Activations & Field Testing",
    specs: "Challenge prompt cards, enamel badges, stickers",
    price: 250.0,
    qty: 1,
    purpose: "Tangible incentives and physical challenge prompts for builder sprints.",
  },
  {
    id: "soundcore-headphones",
    name: "Anker Soundcore Space One ANC",
    category: "Campus Activations & Field Testing",
    specs: "LDAC Hi-Res audio, 2X voice reduction ANC",
    price: 99.0,
    qty: 1,
    purpose: "Audio monitoring in loud spaces to verify clean dictation levels.",
  },

  // 6. Production & Distribution Software ($330.00)
  {
    id: "descript-license",
    name: "Descript Creator License (1 Year)",
    category: "Production & Distribution Software",
    specs: "AI text-based voice/video editing, studio sound",
    price: 144.0,
    qty: 1,
    purpose: "High-speed editing of voice demonstrations and interview clips.",
  },
  {
    id: "riverside-license",
    name: "Riverside.fm Standard License (1 Year)",
    category: "Production & Distribution Software",
    specs: "Separate uncompressed 4K video & 48kHz audio",
    price: 186.0,
    qty: 1,
    purpose: "Studio-fidelity remote recording with tech leaders and creators.",
  },
];

export const TOTAL_BUDGET = BUDGET_ITEMS.reduce(
  (acc, item) => acc + item.price * item.qty,
  0
);
// Exactly 3000.00 USD
