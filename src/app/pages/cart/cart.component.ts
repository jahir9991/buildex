import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {INCREMENT} from "../../state-management/actions/main-action-creator";
import {AppState} from "../../state-management/states/main-state";
import {Observable} from "rxjs/Observable";
import {ProductService} from "../../services/product/product.service";
import {NavigationEnd, Router} from '@angular/router';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  counter: Observable<number>;


  constructor(private productService:ProductService, private store:Store<AppState>,private router:Router) {

    this.counter = this.store.select(AppState => AppState.inputValue);
  }

  ngOnInit() {
    window.scrollTo(0, 0)

    // this.router.events.subscribe((evt) => {
    //            if (!(evt instanceof NavigationEnd)) {
    //                return;
    //            }
    //            window.scrollTo(0, 0)
    //        });


  }

  checkout(){
    console.log(12);
    this.store.dispatch({ type: INCREMENT });
  }

}
