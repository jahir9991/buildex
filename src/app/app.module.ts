import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';




import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './core/app.component';
import { HomeComponent } from './pages/home/core/home.component';
import { HeaderComponent } from './layout/header/core/header.component';
import { NavbarComponent } from './layout/header/navbar/navbar.component';
import { HeaderTopComponent } from './layout/header/header-top/header-top.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TermsComponent } from './pages/terms/terms.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

import {SearchComponent} from "./pages/search/search.component";
import { ShippingComponent } from './pages/shipping/shipping.component';
import { ProductdetailsComponent } from './pages/productdetails/productdetails.component';

import { ProductsComponent } from './pages/products/products.component';
import { CategoriesComponent } from './pages/categories/categories.component';


@NgModule({
  declarations: [


    AppComponent,

    HomeComponent,

    HeaderComponent,

    NavbarComponent,

    HeaderTopComponent,

    AuthFormComponent,

    AboutComponent,

    ContactComponent,

    TermsComponent,

    CartComponent,

    CheckoutComponent,

    SearchComponent,



    ShippingComponent,

    ProductdetailsComponent,


    ProductsComponent,

    CategoriesComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule  ,
    NgxCarouselModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
