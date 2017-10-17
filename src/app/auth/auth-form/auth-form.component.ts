import {Component, Input, OnInit} from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-5%)', opacity: 0}),
          animate('300ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('300ms', style({transform: 'translateY(-5%)', opacity: 0}))
        ])
      ]
    )
  ],
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']

})
export class AuthFormComponent implements OnInit {
  showAuthPanel: boolean;
  public authForm: FormGroup;
  email: FormControl;
  password: FormControl;
  currentAuthForm: string = 'login';
  currentUser: any;


  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) {
    this.showAuthPanel = false;
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();


  }


  createFormControls() {

    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*')
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);

  }

  createForm() {
    this.authForm = new FormGroup({
      email: this.email,
      password: this.password

    });

  }

  authFormSubmit(formBody) {


    if (this.currentAuthForm == 'login') {

      this.authService.login(formBody).subscribe(
        (response) => {
          if (response.status) {
            this.currentUser = response.user;
            this.showAuthPanel = false;
            this.toastr.success('login SuccessFull', 'Toastr fun!');
          }
          console.log(response);
        });
    }
    else {
      this.authService.register(formBody).subscribe((response) => {
        if (response.status) {
          this.currentUser = response.user;
          this.showAuthPanel = false;
        }
        console.log(response);
      });
    }


  }


  logOut() {
    this.currentUser = null;
    this.showAuthPanel = false;
    this.toastr.warning('logout Successfull');
    this.router.navigate(['home']);
  }
}
