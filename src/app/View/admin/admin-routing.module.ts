import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "admin",
    children: [
      { path: "", redirectTo: "/admin/users", pathMatch: "full" },
      {
        path: "users",
        loadChildren: () =>
          import("./user/user.module").then((m) => m.UserModule),
      },
      {
        path: "products",
        loadChildren: () =>
          import("./product/product.module").then((m) => m.ProductModule),
      },
      {
        path: "orders",
        loadChildren: () =>
          import("./order/order.module").then((m) => m.OrderModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
