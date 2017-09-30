import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {INCREMENT} from "../../state-management/actions/main-action-creator";
import {AppState} from "../../state-management/states/main-state";
import {Observable} from "rxjs/Observable";
import {ProductService} from "../../services/product/product.service";




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  counter: Observable<number>;


  constructor(private productService:ProductService, private store:Store<AppState>) {


    this.counter = this.store.select(AppState => AppState.inputValue);
  }

  ngOnInit() {


  }

  checkout(){
    console.log(12);
    this.store.dispatch({ type: INCREMENT });
  }

}
