import type { User } from "./user.inerface";

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  slug: string;
  stock: number;
  sizes: Size[];
  gender: Gender;
  tags: string[];
  images: string[];
  user: User;
}

export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL";
export type Gender = "Kid" | "men" | "women" | "unisex";
