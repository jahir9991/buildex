import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../state-management/states/main-state';
import {Observable} from 'rxjs/Observable';
import {ProductService} from '../../services/product/product.service';
import {NavigationEnd, Router} from '@angular/router';
import {Product} from '../../models/product';
import {CartService} from '../../services/cart/cart.service';
import {Action} from '../../state-management/reducers/main-reducer';
import {ADDTOCART} from '../../state-management/actions/main-action-creator';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {

  public cartItems: Observable<Array<any>>;


  constructor(private productService: ProductService, private store: Store<AppState>, private router: Router, private cartService: CartService) {

    this.cartItems = this.store.select(AppState => AppState.cartItem);
  }

  ngOnInit() {
    window.scrollTo(0, 0);

    // this.router.events.subscribe((evt) => {
    //            if (!(evt instanceof NavigationEnd)) {
    //                return;
    //            }
    //            window.scrollTo(0, 0)
    //        });


  }

  checkout() {

  }


  removeItemFromCart(id: number) {

    let cartService = this.cartService;
    let store = this.store;

    let getData = function () {
      cartService.getShoppingCart(1).subscribe(function (data) {

        store.dispatch(<Action>{type: ADDTOCART, payload: data.data});
      });
    };


    cartService.deleteItemFromCart(1, id).subscribe(function (response) {

      if (response.status) {

        getData();
      }


    });

  }
}
