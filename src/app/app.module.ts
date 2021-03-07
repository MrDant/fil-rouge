import { ContactComponent } from './contact/contact.component';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./UI/layout/footer/footer.component";
import { HeaderComponent } from "./UI/layout/header/header.component";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EditPasswordComponent } from "./editPassword/editPassword.component";
import { MyAccountComponent } from "./myAccount/myAccount.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./View/login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { RegisterComponent } from "./View/register/register.component";
import { AboutUsComponent } from './aboutUs/aboutUs.component';
import { CatalogueComponent } from './View/catalogue/catalogue.component';
import { ProductDetailsComponent } from './View/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    EditPasswordComponent,
    MyAccountComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    AboutUsComponent,
    CatalogueComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
