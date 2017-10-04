import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../services/product/product.service';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  public categoryName: string;
  public products: Array<any>;
  private catId: number;
  private _serv: Subscription;
  public p:number;


  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private router: Router) {
  }

  ngOnInit() {
    window.scroll(0, 0);

    let th = this;
    this.products = [];

    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.categoryName = params['name'];
        getProductsBycategory(params['cat']);

      });

    function getProductsBycategory(catId) {
      th._serv = th.productService.getProductsBycategory(catId)
        .subscribe(
          (data: any) => {
            th.products = data.rows;
          },
          err => console.log(err), // error
          () => console.log('getProductsBycategory Complete'));


    }


  }

  ngOnDestroy() {
    this._serv.unsubscribe();

  }

}
