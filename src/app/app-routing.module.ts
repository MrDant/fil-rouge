import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./View/home/home.component";
import { EditPasswordComponent } from "./View/editPassword/editPassword.component";
import { MyAccountComponent } from "./View/myAccount/myAccount.component";
import { ProductDetailsComponent } from "./View/product-details/product-details.component";
import { LoginComponent } from "./View/login/login.component";
import { RegisterComponent } from "./View/register/register.component";
import { ContactComponent } from "./contact/contact.component";
import { CatalogueComponent } from "./View/catalogue/catalogue.component";
import { AboutUsComponent } from "./View/aboutUs/aboutUs.component";
import { StorageComponent } from './View/storage/storage.component';
import { NgModule } from "@angular/core";
import { CategoryComponent } from "./View/category/category.component";
import { CartComponent } from "./View/cart/cart.component";
import {CGVComponent} from "./View/cgv/cgv.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", component: HomeComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
    ],
  },
  {
    path: "cgv",
    component: CGVComponent
  },
  { path: "account", component: MyAccountComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "contact", component: ContactComponent },
  { path: "change-password", component: EditPasswordComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "contact", component: ContactComponent },
  { path: "catalogue", component: CatalogueComponent },
  { path: "product/:id", component: ProductDetailsComponent },
  { path: "category/:id", component: CategoryComponent },
  { path: "cart", component: CartComponent },
  { path: "storage", component: StorageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
