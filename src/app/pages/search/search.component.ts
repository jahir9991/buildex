import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../services/product/product.service";
import {Product} from "../../models/product";
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from "@angular/router";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/pairwise";
import "rxjs/add/operator/subscribeOn"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit ,OnDestroy{


  private products:Array<Product>;
  grid: Boolean;
  private sub: any;
  private page: number;
  searchTerm: string="";

  constructor( private  productService:ProductService ,private route: ActivatedRoute,
      private router: Router) {

    this.router.events.subscribe((val) => {
                      // see also
                      if(val instanceof NavigationEnd) {
                        console.log(val)

                        this.searchTerm=this.route.snapshot.params['term'];
                      }

                  });




  }

  ngOnInit() {
    this.grid = true;
    // this.searchTerm = "";


    this.productService.getProducts(1)
      .subscribe(
                (data: any) => {


                    this.products= data.data;
                },
                err => console.log(err), // error
                () => console.log('getUserStatus Complete'));










  }

  ngOnDestroy(){

  }

}
