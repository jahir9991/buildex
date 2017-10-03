import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  alsoLikePrtoducts: Array<Product>;

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.alsoLikePrtoducts=[] ;

    this.productService.getNewProducts()
      .subscribe(
                (data: any) => {
                    this.alsoLikePrtoducts=data.data;
                },
                err => console.log(err), // error
                () => console.log('getUserStatus Complete'));
  }

}
