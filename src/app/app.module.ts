import { RegisterComponent } from "./View/register/register.component";
import { CatalogueComponent } from "./View/catalogue/catalogue.component";
import { ProductDetailsComponent } from "./View/product-details/product-details.component";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TokenInterceptor } from "./UI/token.interceptor";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./UI/layout/header/header.component";
import { AboutUsComponent } from "./View/aboutUs/aboutUs.component";
import { HomeComponent } from "./View/home/home.component";
import { AppComponent } from "./app.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./UI/layout/footer/footer.component";
import { EditPasswordComponent } from "./editPassword/editPassword.component";
import { LoginComponent } from "./View/login/login.component";
import { MyAccountComponent } from "./myAccount/myAccount.component";
import { BrowserModule } from "@angular/platform-browser";
import { CategoryComponent } from './View/category/category.component';

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
    ProductDetailsComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
