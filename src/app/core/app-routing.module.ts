import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "../pages/home/core/home.component";
import {AboutComponent} from "../pages/about/about.component";
import {ContactComponent} from "../pages/contact/contact.component";
import {TermsComponent} from "../pages/terms/terms.component";
import {SearchComponent} from "../pages/search/search.component";

import {CartComponent} from "../pages/cart/cart.component";
import {CheckoutComponent} from "../pages/checkout/checkout.component";
import {ProductdetailsComponent} from "../pages/productdetails/productdetails.component";
import {CategoriesComponent} from "../pages/categories/categories.component";
import {ProductsComponent} from "../pages/products/products.component";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'terms', component: TermsComponent},
  { path: 'search', component: SearchComponent},
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent},
  { path: 'productdetails/:id', component: ProductdetailsComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'categories', component: CategoriesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
