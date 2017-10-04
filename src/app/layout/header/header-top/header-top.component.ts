import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {AppState} from '../../../state-management/states/main-state';
import {Router} from '@angular/router';
import {CartService} from '../../../services/cart/cart.service';
import {Action} from '../../../state-management/reducers/main-reducer';
import {ADDTOCART} from '../../../state-management/actions/main-action-creator';
import {latinize} from 'ngx-bootstrap/typeahead';
import {TimepickerStore} from 'ngx-bootstrap/timepicker';
import {letProto} from 'rxjs/operator/let';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit, OnDestroy {

  counters: Observable<any>;


  constructor(private cartService:CartService,private store: Store<AppState>, public router: Router) {


    this.counters = this.store.select(AppState => {
      return AppState.cartItem.length;
    });


  }


  ngOnInit() {
    let store =this.store;

    this.cartService.getShoppingCart(1).subscribe(function (data) {

      store.dispatch(<Action>{type: ADDTOCART, payload: data.data});
    });


  }

  ngOnDestroy() {
    console.log('des');
  }

}


