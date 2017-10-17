import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Http} from '@angular/http';

@Injectable()
export class CheckoutService {

  constructor(private _http: Http) {

  }


  checkoutNormal(data) {
    let url = environment.API_ENDPOINT + 'checkout';

    return this._http.post(url, data)
      .map(res => {
        return res.json();

      });

  }

}
