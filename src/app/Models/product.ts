import { environment } from "../../environments/environment";

export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  image: string;

  constructor(raw: Product) {
    Object.assign(this, raw);
    this.image = this.image
      ? environment.apiUrl + this.image
      : "/assets/img/not-found.jpeg";
  }
}
