import { Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product/product.service";
import {Product} from "../../../models/product";




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private newProducts:Array<any>;
  popularProducts: Array<Product>;

  constructor( private  productService:ProductService) {}



  ngOnInit(){


    this.productService.getNewProducts()
      .subscribe(
                (data: any) => {
                    this.newProducts=data.data;
                },
                err => console.log(err), // error
                () => console.log('getUserStatus Complete'));

    this.productService.getProducts(1)
      .subscribe(
                (data: any) => {


                    this.popularProducts= data.data;
                },
                err => console.log(err), // error
                () => console.log('getUserStatus Complete'));


  }




}
