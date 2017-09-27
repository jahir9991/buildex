import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) {}


  public carouselTileItems: Array<any>;
  public carouselTile: any;

  ngOnInit(){
    this.carouselTileItems = [0, 1, 2,3,4];

    this.carouselTile = {
      grid: {xs: 1, sm: 3, md: 3, lg: 3, all: 0},
      slide: 2,
      speed: 400,
      animation: 'lazy',
      point: true,
      load: 2,
      touch: true,
      custom: 'tile',
      dynamicLength: true
    }

    const len = this.carouselTileItems.length
        if (len <= 10) {
          for (let i = len; i < len + 5; i++) {
            this.carouselTileItems.push(i);
          }
        }

  }

  // public carouselTileLoad(evt: any) {
  //
  //   const len = this.carouselTileItems.length
  //   if (len <= 10) {
  //     for (let i = len; i < len + 5; i++) {
  //       this.carouselTileItems.push(i);
  //     }
  //   }
  //
  // }


}
