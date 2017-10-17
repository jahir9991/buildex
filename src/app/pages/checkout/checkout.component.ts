import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NgForm} from '@angular/forms';
import {CheckoutService} from '../../services/checkout/checkout.service';
import {ToastrService} from 'ngx-toastr';
import {CartService} from '../../services/cart/cart.service';
import {AppState} from '../../state-management/states/main-state';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {ADDTOCART, INSTANTORDER} from '../../state-management/actions/main-action-creator';
import {Action} from '../../state-management/reducers/instantOrder-reducer';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  isInstant: Boolean;
  public cartItems: Store<Array<any>>;
  public currentEssential: any;

  public checkoutFormData: any;
  private dd: any;


  constructor(private route: ActivatedRoute, private checkoutService: CheckoutService, private toastr: ToastrService, private store: Store<AppState>, private cartService: CartService, private router: Router) {


  }


  ngOnInit() {
    window.scrollTo(0, 0);
    this.currentEssential = null;


    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.isInstant = params['isInstant'] || false;

      });


    this.cartItems = this.store.select(AppState => AppState.cartItem);
    this.currentEssential = this.store.select(AppState => AppState.instantOrder);

    this.currentEssential.subscribe((data) => this.dd = data);

    if (this.currentEssential == null) {
      this.isInstant = false;
    }


  }


  checkoutFinalFormSubmit(checkoutFirstForm: NgForm, checkoutFinalForm: NgForm) {

    var instantData = {};


    if (this.isInstant && this.dd) {

      instantData = Object.assign({}, this.dd, {isInstant: 1, userId: 1});

    } else {
      instantData = {isInstant: 0, userId: 1};
    }
    var obj = Object.assign({}, checkoutFirstForm.value, checkoutFinalForm.value, instantData);
    console.log(obj);
    this.checkoutService.checkoutNormal(obj).subscribe((response) => {

      if (response.status) {
        if (this.isInstant) {

          this.toastr.success('checkout success', 'your Order id:' + response.order_id);
          this.store.dispatch(<Action>{type: INSTANTORDER, payload: null});
        }
        else {

          this.toastr.success('checkout success', 'your Order id:' + response.order_id);
          this.router.navigate(['/home']);

          this.store.dispatch(<Action>{type: ADDTOCART, payload: null});
        }
      } else {
        this.toastr.error('! checkout error', 'something went wrong please try again');
      }
    });


  }
}
