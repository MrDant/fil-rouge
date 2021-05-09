import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ProductsComponent } from "./products/products.component";
import { AddComponent } from "./add/add.component";
import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
  { path: "", component: ProductsComponent },
  { path: "add", component: AddComponent },
  { path: "edit/:id", component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
