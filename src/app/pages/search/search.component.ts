import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../services/product/product.service";
import {Product} from "../../models/product";
import {ActivatedRoute, Data, NavigationEnd, NavigationStart, Router} from '@angular/router';
import "rxjs/add/operator/filter";
import "rxjs/add/operator/pairwise";
import "rxjs/add/operator/subscribeOn"
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit ,OnDestroy{


  public products:Array<Product>;
  grid: Boolean;
  private sub: any;
  private page: number;
  searchTerm: string="";
  private _serv: Subscription;

  constructor( private  productService:ProductService ,private route: ActivatedRoute,
      private router: Router) {

    this._serv=  this.router.events.subscribe((val) => {
                        // see also
                        if(val instanceof NavigationEnd) {
                          console.log(val)

                          this.searchTerm=this.route.snapshot.params['term']||"";
                          this.search(1);
                        }

      });







  }

  ngOnInit() {
    window.scroll(0,0);
    this.grid = true;
    this.products=[];
    // this.searchTerm = "";


  }

  search(page){
    if(this.searchTerm==""){
      this.productService.getProducts(page)
                 .subscribe(data =>{
                   this.products =data.data ;
                 } );

    } else{
      this.productService.getProductsBySearch( this.searchTerm,page)
            .subscribe(data =>{
              this.products =data.data ;
            } );

    }



  }

  ngOnDestroy(){
    this._serv.unsubscribe();

  }

}
