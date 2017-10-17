import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  showContact: String = '';
  lat: number;
  lng: number;

  constructor() {
  }

  ngOnInit() {
    window.scroll(0, 0);
    this.lat = 31.6058352;
    this.lng = -106.4836273;
  }

}
