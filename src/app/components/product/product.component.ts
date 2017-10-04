import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {RatingModule} from 'ngx-bootstrap/rating';
import {Action} from '../../state-management/reducers/main-reducer';

import {Product} from '../../models/product';
import {ADDTOCART} from '../../state-management/actions/main-action-creator';
import {Store} from '@ngrx/store';
import {AppState} from '../../state-management/states/main-state';
import {CartService} from '../../services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  @Input() product: Product;


  constructor(private store: Store<AppState>, private cartService: CartService) {


  }

  ngOnInit() {

  }

  addToCart(product: Product) {

    let store = this.store;
    this.cartService.addToCart(1, product.id, 10).subscribe((response) => {

      if (response.status) {
        this.cartService.getShoppingCart(1).subscribe(function (data) {

          let d = data.data;

          store.dispatch(<Action>{type: ADDTOCART, payload: d});
        });


      }


    });
  }

}
