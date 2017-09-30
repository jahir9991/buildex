import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import {AppState} from "../../../state-management/states/main-state";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit,OnDestroy {

  counter: Observable<number>;



  constructor(private store:Store<AppState>,private router: Router) {


    this.counter = this.store.select(AppState => AppState.inputValue);




  }



  ngOnInit() {

  }
  ngOnDestroy(){
      console.log('des')
  }

}


