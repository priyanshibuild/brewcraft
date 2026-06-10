export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  delay: string;
}

export type BeverageCategory = "All" | "Hot Coffee" | "Cold Coffee" | "Tea" | "Specials";

export interface BeverageItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: BeverageCategory;
}

export interface DessertItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  initials: string;
  location: string;
  rating: number;
  quote: string;
  offsetY: string;
  swayDelay: string;
}
