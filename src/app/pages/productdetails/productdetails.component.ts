import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product/product.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Action} from '../../state-management/reducers/main-reducer';
import {ADDTOCART} from '../../state-management/actions/main-action-creator';
import {CartService} from '../../services/cart/cart.service';
import {ToastrService} from 'ngx-toastr';
import {Store} from '@ngrx/store';
import {AppState} from '../../state-management/states/main-state';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit, OnDestroy {

  alsoLikePrtoducts: Array<Product>;
  private _serv: Subscription;
  public productId: number;
  public productDetails: any;
  public quantity: number = 1;
  currentImg: any;
  currentTab: string = 'f';


  constructor(private toastr: ToastrService, private store: Store<AppState>, private router: Router, private route: ActivatedRoute, private cartService: CartService, private productService: ProductService) {
  }

  ngOnInit() {
    window.scroll(0, 0);
    let productService = this.productService;
    this.productDetails = {};

    this.alsoLikePrtoducts = [];

    this._serv = this.route
      .params
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.productId = params['id'];

        productService.getProductDetails(this.productId)
          .subscribe(
            (data: any) => {

              this.productDetails = data.details;
              this.currentImg = this.productDetails.image_list[0];
            },
            err => console.log(err), // error
            () => console.log('productDetails Complete'));


      });


    productService.getNewProducts()
      .subscribe(
        (data: any) => {
          this.alsoLikePrtoducts = data.data;
        },
        err => console.log(err), // error
        () => console.log('getUserStatus Complete'));


  }


  addToCart(productId) {
    let cartService = this.cartService;

    let store = this.store;

    cartService.addToCart(1, productId, this.quantity).subscribe((response) => {

      if (response.status) {

        this.toastr.success('Product added to cart');

        cartService.getShoppingCart(1).subscribe(function (data) {

          let d = data.data;

          store.dispatch(<Action>{type: ADDTOCART, payload: d});
        });


      }


    });
  }


  ngOnDestroy(): void {
    this._serv.unsubscribe();
  }

}
