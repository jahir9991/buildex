import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import { RatingModule } from 'ngx-bootstrap/rating';

import {Product} from "../../models/product";
import {INCREMENT} from '../../state-management/actions/main-action-creator';
import {Store} from '@ngrx/store';
import {AppState} from '../../state-management/states/main-state';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'] ,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  @Input() product:Product;


  constructor( private store:Store<AppState>) {


   }

  ngOnInit() {

  }

  addToCart(product:Product){

    this.store.dispatch({ type: INCREMENT });
  }

}
