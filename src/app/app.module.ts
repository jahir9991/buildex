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
import { AuthFormComponent } from './auth/auth-form/auth-form.component';
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


import { StoreModule } from "@ngrx/store";
import { cartItemReducer } from "./state-management/reducers/main-reducer";
import {ProductService} from "./services/product/product.service";
import {HttpModule} from "@angular/http";

import { ProductListComponent } from './components/product-list/product-list.component';
import {RatingModule} from "ngx-bootstrap";
import {FormsModule} from "@angular/forms";
import { ProductComponent } from './components/product/product.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CategorylistComponent } from './layout/header/categorylist/categorylist.component';
import {CategoryService} from './services/category/category.service';
import { NameCutterPipe } from './pipes/name-cutter.pipe';
import {CartService} from './services/cart/cart.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { SubtotalSumPipe } from './pipes/subtotal-sum.pipe';



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

    CategoriesComponent,



    ProductListComponent,



    ProductComponent,



    PaginationComponent,



    CategorylistComponent,



    NameCutterPipe,



    SubtotalSumPipe
  ],
  imports: [
    NgxPaginationModule,
    FormsModule,
    RatingModule.forRoot(),
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule  ,
    NgxCarouselModule  ,
    HttpModule,
    StoreModule.forRoot({cartItem: cartItemReducer})
  ],
  providers: [ ProductService,CategoryService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
