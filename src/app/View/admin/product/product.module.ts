import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsComponent } from "./products/products.component";
import { AddComponent } from "./add/add.component";
import { EditComponent } from "./edit/edit.component";
import { ProductRoutingModule } from "./product-routing.module";
import { AdminModule } from "../admin.module";
import { FormComponent } from "./form/form.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ProductsComponent, AddComponent, EditComponent, FormComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    AdminModule,
    ReactiveFormsModule,
  ],
})
export class ProductModule {}
