import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditPasswordComponent } from "./editPassword/editPassword.component";
import { MyAccountComponent } from "./myAccount/myAccount.component";
import { LoginComponent } from "./View/login/login.component";
import { RegisterComponent } from "./View/register/register.component";
import { AboutUsComponent } from "./aboutUs/aboutUs.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./View/home/home.component";
import { CatalogueComponent } from "./View/catalogue/catalogue.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", component: HomeComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
    ],
  },
  { path: "myAccount", component: MyAccountComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "contact", component: ContactComponent },
  { path: "editPassword", component: EditPasswordComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "contact", component: ContactComponent },
  { path: "catalogue", component: CatalogueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
