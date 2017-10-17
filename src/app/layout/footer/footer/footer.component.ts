import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    ),
    trigger(
      'fadeDownAnimation', [
        transition(':enter', [
          style({transform: 'translateY(0%)', opacity: 1}),
          animate('300ms', style({transform: 'translateY(-10%)', opacity: 0}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(-10%)', opacity: 0}),
          animate('300ms', style({transform: 'translateY(0%)', opacity: 1}))])


      ]
    )
  ]

})

export class FooterComponent implements OnInit {
  cat: Number;

  constructor() {
  }

  ngOnInit() {
  }

}
