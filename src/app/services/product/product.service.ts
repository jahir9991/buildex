import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import  "rxjs/add/operator/map";

@Injectable()
export class ProductService {

  constructor(private _http:Http) { }

  getProducts(pageNumber:number){

    return this._http.get('http://45.76.184.39:5000/api/product/page/'+pageNumber)
         .map(res => {
           return res.json()   ;

         });


  }

  getNewProducts() {

    return this._http.get('http://45.76.184.39:5000/api/product/new-products')
         .map(res => {
           return res.json()   ;

         });

  }
}
