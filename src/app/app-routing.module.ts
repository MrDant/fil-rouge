import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./View/home/home.component";
import { EditPasswordComponent } from "./editPassword/editPassword.component";
import { LoginComponent } from "./View/login/login.component";
import { NgModule } from "@angular/core";
import { AboutUsComponent } from "./View/aboutUs/aboutUs.component";
import { CatalogueComponent } from "./View/catalogue/catalogue.component";
import { ContactComponent } from "./contact/contact.component";
import { RegisterComponent } from "./View/register/register.component";
import { MyAccountComponent } from "./myAccount/myAccount.component";
import { CategoryComponent } from "./View/category/category.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", component: HomeComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
    ],
  },
  { path: "account", component: MyAccountComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "contact", component: ContactComponent },
  { path: "editPassword", component: EditPasswordComponent },
  { path: "catalogue", component: CatalogueComponent },
  { path: "categorie/:id", component: CategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
