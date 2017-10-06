import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class AuthService {

  constructor(private _http: Http) {
  }


  login(loginBody) {
    let url = environment.API_ENDPOINT + 'auth/authenticate';

    return this._http.post(url, loginBody)
      .map(res => {
        return res.json();
      });


  }

  register(regBody) {
    let url = environment.API_ENDPOINT + 'auth/register';

    return this._http.post(url, regBody)
      .map(res => {
        return res.json();
      });


  }
}
