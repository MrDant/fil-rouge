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
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TokenInterceptor } from "./UI/token.interceptor";
import { AboutUsComponent } from "./View/aboutUs/aboutUs.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AdminModule } from "./View/admin/admin.module";
import { ModalModule } from "./Modal/modal.module";
import { CategoryComponent } from "./View/category/category.component";

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
    ModalModule,
    FontAwesomeModule,
    AdminModule,
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
