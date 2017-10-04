import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class CartService {

  constructor(private _http: Http) {
  }


  addToCart(userId: number, productId: number, quantity: number) {
    let url = environment.API_ENDPOINT + 'cart/add-to-shopping-cart';

    return this._http.post(url, {userId: userId, productId: productId, quantity: quantity})
      .map(res => {
        return res.json();
      });


  }

  getShoppingCart(userId: number) {
    let url = environment.API_ENDPOINT + 'cart/get-shopping-cart/userId/' + userId;

    return this._http.get(url)
      .map(res => {
        return res.json();
      });


  }
  getShoppingCarts(userId: number) {
    let url = environment.API_ENDPOINT + 'cart/get-shopping-cart/userId/' + userId;

    return this._http.get(url)
      .map(res => {
        return res.json();
      });


  }

  deleteItemFromCart(userId: number, productId: number) {
    let url = environment.API_ENDPOINT + 'cart/delete-item/productId/' + productId + '/userId/' + userId;

    return this._http.get(url)
      .map(res => {
        return res.json();
      });

  }

  deletesingleFromCart(userId: number, productId: number) {
    let url = environment.API_ENDPOINT + 'cart/delete-item/productId/' + productId + '/userId/' + userId;

    return this._http.get(url)
      .map(res => {
        return res.json();
      });

  }


}
