import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class BrandService {

  constructor(private _http: Http) {
  }


  getAllBrand() {
    let url = environment.API_ENDPOINT + 'brand';

    return this._http.get(url)
      .map(res => {
        return res.json();
      });


  }


}
