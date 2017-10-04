import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../../services/product/product.service';
import {Product} from '../../models/product';
import {ActivatedRoute, Data, NavigationEnd, NavigationStart, Router} from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/subscribeOn';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {


  public products: Array<Product>;
  grid: Boolean;
  private sub: any;
  private page: number;
  searchTerm: string = '';
  private _serv: Subscription;
  public totalProducts: number;
  public p:number;

  constructor(private  productService: ProductService, private route: ActivatedRoute,
              private router: Router) {

    this._serv = this.router.events.subscribe((val) => {
      // see also
      if (val instanceof NavigationEnd) {
        console.log(val);

        this.searchTerm = this.route.snapshot.params['term'] || '';
        this.search();
      }

    });


  }

  ngOnInit() {
    window.scroll(0, 0);
    this.grid = true;
    this.products = [];

  }

  search() {
    if (this.searchTerm == '') {
      this.productService.getAllProducts()
        .subscribe(data => {
          console.log(data.count);

          this.products = data.rows;
          this.totalProducts = data.count;
        });

    } else {
      this.productService.getProductsBySearch(this.searchTerm)
        .subscribe(data => {

          this.products = data.rows;
          this.totalProducts = data.count;

        });

    }


  }

  ngOnDestroy() {
    this._serv.unsubscribe();

  }

}
