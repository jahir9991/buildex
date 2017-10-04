import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from '../../../environments/environment';

@Injectable()
export class ProductService {


  constructor(private _http: Http) {
  }

  getAllProducts() {

    return this._http.get(environment.API_ENDPOINT + 'product/all')
      .map(res => {
        return res.json();

      });


  }

  getNewProducts() {

    return this._http.get(environment.API_ENDPOINT + 'product/new-products')
      .map(res => {
        return res.json();

      });

  }

  getProductsBycategory(id) {

    let url = `${environment.API_ENDPOINT}product/bycategory/${id}`;

    return this._http.get(url)
      .map(res => {
        return res.json();

      });

  }

  getProductsBySearch(searchTerm) {

    let url = `${environment.API_ENDPOINT}product/search/${searchTerm}`;

    return this._http.get(url)
      .map(res => {
        return res.json();

      });

  }
}
