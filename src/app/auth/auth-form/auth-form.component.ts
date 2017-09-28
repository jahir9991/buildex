import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
  showAuthPanel: boolean;


  constructor() {
    this.showAuthPanel=false;
  }

  ngOnInit() {
  }

}
