import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Input() activePage: String = 'all';

  public categoryList: Array<any>;
  essentialCategoryList: Array<any>;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryList = [];
    this.essentialCategoryList = [];

    this.categoryService.getAllCategories()
      .subscribe((data: any) => {
          console.log(data);

          this.categoryList = data.data;
        },
        err => console.log(err), // error
        () => console.log('getFirstTenCategories Complete'));

    this.categoryService.getAllEssentialCategories()
      .subscribe((data: any) => {
          console.log(data);

          this.essentialCategoryList = data.data;
        },
        err => console.log(err), // error
        () => console.log('getFirstTenCategories Complete'));


  }
}
