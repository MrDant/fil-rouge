import { ContactComponent } from "./contact/contact.component";
import { BrowserModule } from "@angular/platform-browser";
import { LOCALE_ID, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./UI/layout/footer/footer.component";
import { HeaderComponent } from "./UI/layout/header/header.component";
import { EditPasswordComponent } from "./View/editPassword/editPassword.component";
import { MyAccountComponent } from "./View/myAccount/myAccount.component";
import { HomeComponent } from "./View/home/home.component";
import { LoginComponent } from "./View/login/login.component";
import { RegisterComponent } from "./View/register/register.component";
import { CatalogueComponent } from "./View/catalogue/catalogue.component";
import { ProductDetailsComponent } from "./View/product-details/product-details.component";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TokenInterceptor } from "./UI/token.interceptor";
import { AboutUsComponent } from "./View/aboutUs/aboutUs.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AdminModule } from "./View/admin/admin.module";
import { ModalModule } from "./Modal/modal.module";
import { StorageComponent } from "./View/storage/storage.component";
import { CategoryComponent } from "./View/category/category.component";
import { CartComponent } from "./View/cart/cart.component";
import { MatMenuModule } from "@angular/material/menu";

import {NgcCookieConsentModule, NgcCookieConsentConfig} from "ngx-cookieconsent";
import {NotifierModule} from "angular-notifier";
import { CGVComponent } from './View/cgv/cgv.component';

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: "localhost" // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
  },
  palette: {
    popup: {
      background: "#000"
    },
    button: {
      background: "#FAFAFA"
    }
  },
  theme: "classic",
  type: "info",
  content: {
    message: "Ce site utilise un cookie afin de maintenir votre session active.",
    dismiss: "Ok",
    policy: "Cookie Policy"
  }
};


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
    CartComponent,
    StorageComponent,
    CGVComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ModalModule,
    FontAwesomeModule,
    AdminModule,
    FormsModule,
    MatMenuModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    NotifierModule
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
