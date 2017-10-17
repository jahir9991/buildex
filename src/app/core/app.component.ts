import {Component} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
           style({transform: 'translateY(-5%)', opacity: 0}),
           animate('300ms', style({transform: 'translateY(0)', opacity: 1}))
         ]),
         transition(':leave', [
           style({transform: 'translateY(0)', opacity: 1}),
           animate('300ms', style({transform: 'translateY(-5%)', opacity: 0}))
         ])
       ]
     )
   ]
})
export class AppComponent {
  title = 'app';
}

