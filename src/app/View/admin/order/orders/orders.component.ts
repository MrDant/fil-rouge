import { Component, OnInit } from "@angular/core";
import { Order } from "../../../../Models/order";
import { OrderService } from "../../../../Services/order.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"],
})
export class OrdersComponent implements OnInit {
  items: Order[];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.list().subscribe((e) => (this.items = e));
  }

  delete(id: number): void {
    this.orderService.delete(id).subscribe(() => {
      this.items = this.items.filter((e) => e.id !== id);
    });
  }
}
