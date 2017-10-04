import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class CategoryService {
  private url: string;

  constructor(private _http:Http) {
    this.url="";
  }

   getAllCategories(pageNumber:number){
     let url=environment.API_ENDPOINT+'category/first/10';

     return this._http.get(url)
          .map(res => {
            return res.json() ;

          });


   }

   getFirstTenCategories() {
     let url=environment.API_ENDPOINT+'category/first/10';

     return this._http.get(url)
          .map(res => {
            return res.json()   ;

          });

   }

}
