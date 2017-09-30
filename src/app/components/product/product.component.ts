import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import { RatingModule } from 'ngx-bootstrap/rating';

import {Product} from "../../models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'] ,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  @Input() product:Product;


  constructor() { }

  ngOnInit() {

  }

}
