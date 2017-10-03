import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../services/category/category.service';
import {Category} from '../../../models/category';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {
  public categoryList: Array<any>;

  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    this.categoryList=[];
    this.categoryService.getFirstTenCategories()
                        .subscribe(  (data: any) => {
                          console.log(data)

                                            this.categoryList=data.data;
                                        },
                                        err => console.log(err), // error
                                        () => console.log('getFirstTenCategories Complete'));




  }

}
