import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../services/category/category.service';
import {Category} from '../../../models/category';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css'] ,
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
          animate('500ms', style({ opacity: 1}))
        ]),
        transition(':leave', [

          animate('300ms', style({ opacity: 0}))])

      ]
    )
  ]

})
export class CategorylistComponent implements OnInit {
  public categoryList: Array<any>;
  ff: Boolean = false;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryList = [];
    this.categoryService.getFirstTenCategories()
      .subscribe((data: any) => {
          console.log(data);

          this.categoryList = data.data;
        },
        err => console.log(err), // error
        () => console.log('getFirstTenCategories Complete'));


  }

}
