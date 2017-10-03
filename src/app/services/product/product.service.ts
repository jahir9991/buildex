import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import  "rxjs/add/operator/map";
import {environment} from '../../../environments/environment';

@Injectable()
export class ProductService {


  constructor(private _http:Http) { }

  getProducts(pageNumber:number){

    return this._http.get(environment.API_ENDPOINT+'product/page/'+pageNumber)
         .map(res => {
           return res.json()   ;

         });


  }

  getNewProducts() {

    return this._http.get(environment.API_ENDPOINT+'product/new-products')
         .map(res => {
           return res.json()   ;

         });

  }
  getProductsBycategory(id) {

    let url=`${environment.API_ENDPOINT}category/product-list-by-category/${id}/page/1`;

    return this._http.get(url)
         .map(res => {
           return res.json()   ;

         });

  }
  getProductsBySearch(searchTerm,page) {

    let url=`${environment.API_ENDPOINT}product/search/${searchTerm}/${page}`;

    return this._http.get(url)
         .map(res => {
           return res.json()   ;

         });

  }
}
