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

@Component({
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


  constructor(private authService: AuthService) {
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
  }
}
