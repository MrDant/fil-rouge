import { VisualObject } from "./base";

export class Product extends VisualObject {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
}
