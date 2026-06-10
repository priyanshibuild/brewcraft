import { StatItem, FeatureItem, BeverageItem, DessertItem, TestimonialItem } from "./types";

export const STATS: StatItem[] = [
  {
    id: "stat-years",
    value: "12+",
    label: "Years of Craft Brewing",
  },
  {
    id: "stat-customers",
    value: "50K+",
    label: "Happy Customers",
  },
];

export const FEATURES: FeatureItem[] = [
  {
    id: "feat-beans",
    icon: "☕",
    title: "Premium Beans",
    description: "Sourced with single-origin integrity from remote heights of Ethiopia, Colombia, and Brazil.",
    delay: "0s",
  },
  {
    id: "feat-brewing",
    icon: "🫘",
    title: "Artisan Brewing",
    description: "Every golden extraction is carefully hand-pulled by our team of expert master baristas.",
    delay: "0.4s",
  },
  {
    id: "feat-sustainable",
    icon: "🌿",
    title: "Sustainable Sourcing",
    description: "Dedicated to local eco-friendly packaging, fair trade practices, and carbon-neutral roasting.",
    delay: "0.8s",
  },
];

export const BEVERAGES: BeverageItem[] = [
  {
    id: "bev-espresso",
    name: "Espresso",
    description: "Pure intensity in a tiny cup, extracted perfectly.",
    price: "$3.50",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400",
    category: "Hot Coffee",
  },
  {
    id: "bev-cappuccino",
    name: "Cappuccino",
    description: "Silky microfoam meets bold, premium espresso.",
    price: "$4.20",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400",
    category: "Hot Coffee",
  },
  {
    id: "bev-caramel-latte",
    name: "Caramel Latte",
    description: "Sweet, creamy, and absolutely irresistible caramel notes.",
    price: "$4.80",
    image: "https://images.unsplash.com/photo-1596078841242-12f73dc697c6?w=600&auto=format&fit=crop&q=80",
    category: "Hot Coffee",
  },
  {
    id: "bev-cold-brew",
    name: "Cold Brew",
    description: "12-hour steeped signature extract, smooth as silk.",
    price: "$5.00",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400",
    category: "Cold Coffee",
  },
  {
    id: "bev-iced-americano",
    name: "Iced Americano",
    description: "Bold, refreshing, and always a true classic.",
    price: "$3.80",
    image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?w=400",
    category: "Cold Coffee",
  },
  {
    id: "bev-flat-white",
    name: "Flat White",
    description: "Velvety steamed milk and perfectly balanced double shots.",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    category: "Hot Coffee",
  },
  {
    id: "bev-mocha",
    name: "Mocha",
    description: "Decadent dark chocolate and signature espresso, united.",
    price: "$5.20",
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400",
    category: "Specials",
  },
  {
    id: "bev-matcha-latte",
    name: "Matcha Latte",
    description: "Earthy, creamy authentic Japanese green tea blend.",
    price: "$5.50",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400",
    category: "Tea",
  },
  {
    id: "bev-iced-caramel-macchiato",
    name: "Iced Caramel Macchiato",
    description: "Layered beauty with dark espresso and sweet caramel drizzle.",
    price: "$5.80",
    image: "https://images.unsplash.com/photo-1585494156145-1c60a4fe952b?w=400",
    category: "Cold Coffee",
  },
];

export const DESSERTS: DessertItem[] = [
  {
    id: "des-tiramisu",
    name: "Tiramisu",
    description: "Classic Italian coffee dessert layered with espresso-soaked ladyfingers.",
    price: "$6.50",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400",
  },
  {
    id: "des-chocolate-lava",
    name: "Chocolate Lava Cake",
    description: "Warm, gooey, and dangerously rich with liquid cocoa core.",
    price: "$7.00",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400",
  },
  {
    id: "des-cheesecake",
    name: "Cheesecake",
    description: "Velvety smooth, authentic New York style with graham cracker crust.",
    price: "$6.00",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400",
  },
  {
    id: "des-croissant",
    name: "Croissant",
    description: "Flaky, buttery, freshly baked daily in our kitchen.",
    price: "$3.50",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400",
  },
  {
    id: "des-waffle",
    name: "Waffle",
    description: "Traditional Belgian style served warm with pure organic maple drizzle.",
    price: "$5.50",
    image: "https://images.unsplash.com/photo-1568051243858-533a607809a5?w=400",
  },
  {
    id: "des-cinnamon-roll",
    name: "Cinnamon Roll",
    description: "Soft, warm, glazed to absolute sugar-cinnamon perfection.",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "testi-1",
    name: "Elena Rostova",
    initials: "ER",
    location: "Rome, Italy",
    rating: 5,
    quote: "The espresso reminds me of Rome. Rich aroma, perfect crema, and an atmosphere that genuinely invites you to slow down and stay.",
    offsetY: "md:translate-y-4",
    swayDelay: "0s",
  },
  {
    id: "testi-2",
    name: "Marcus Vance",
    initials: "MV",
    location: "New York, USA",
    rating: 5,
    quote: "The Caramel Latte is a absolute masterclass in balance. Not overly sweet, beautifully extracted espresso, just pure silk microfoam.",
    offsetY: "md:-translate-y-4",
    swayDelay: "1.2s",
  },
  {
    id: "testi-3",
    name: "Sophia Lin",
    initials: "SL",
    location: "Kyoto, Japan",
    rating: 5,
    quote: "BrewCraft has an unmatched level of aesthetic. Their matcha latte is authentic, earthy, cream-textured, and perfectly whisked.",
    offsetY: "md:translate-y-4",
    swayDelay: "2.4s",
  },
];
