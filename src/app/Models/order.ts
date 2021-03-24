import { Product } from "./product";

export class Order {
  orderItems: OrderItem[];
  status: string;
  username?: string;
  id?: number;
}

export class OrderItem {
  // tslint:disable-next-line:variable-name
  product_id: number;
  product: Product;
  quantity: number;

  constructor(raw) {
    Object.assign(this, raw);
    this.product = new Product(this.product);
  }
}
