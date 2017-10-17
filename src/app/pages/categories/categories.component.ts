import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category/category.service';
import {BrandService} from '../../services/brand/brand.service';
import {NgModel} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../state-management/states/main-state';
import {Action} from '../../state-management/reducers/instantOrder-reducer';
import {INSTANTORDER} from '../../state-management/actions/main-action-creator';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-categories',
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
  ],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Input() activePage: String = 'all';

  public order: any = {};
  public brands: Array<any>;
  public types: Array<any>;
  public grades: Array<any>;
  public packages: Array<any>;


  public brandId: any;
  public typeId: any;
  public gradeId: any;
  public packageId: any;


  public categoryList: Array<any>;
  essentialCategoryList: Array<any>;

  constructor(private router: Router, private tostr: ToastrService, private store: Store<AppState>, private categoryService: CategoryService, private brandService: BrandService) {
  }

  ngOnInit() {
    window.scroll(0, 0);
    this.order.quantity = 1;

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
    this.brandService.getAllBrand().subscribe((data: any) => {
      this.brands = data.data;
    });

    this.types = this.TypeList;

    this.grades = this.GradeList;
    this.packages = this.PackageList;
  }


  public essentialCategoryPrice = [
    {id: 5, price: 100},
    {id: 6, price: 250},
    {id: 28, price: 400},
    {id: 29, price: 550},
    {id: 31, price: 700}
  ];

  private TypeList = [
    {id: 1, name: 'Fine', price: 120},
    {id: 2, name: 'Boulder', price: 200},
    {id: 3, name: 'Plaster', price: 400},
    {id: 4, name: 'TMT', price: 620},
    {id: 5, name: 'RCC', price: 820},
    {id: 6, name: 'PCC', price: 920}
  ];

  public GradeList = [
    {id: 1, name: '6-40mm', price: 100},
    {id: 2, name: 'A', price: 150},
    {id: 3, name: 'A+', price: 200},
    {id: 4, name: '24sqm', price: 250},
    {id: 5, name: '48sqm', price: 300},
    {id: 6, name: '4T', price: 350},
    {id: 7, name: '2T', price: 400},
    {id: 8, name: '1T', price: 450}
  ];

  public PackageList = [
    {id: 1, name: '10TON', price: 10},
    {id: 2, name: '15KG', price: 20},
    {id: 3, name: '25TON', price: 30},
    {id: 4, name: '50KG', price: 40},
    {id: 5, name: '100KG', price: 50},
    {id: 6, name: '5 TON', price: 60}
  ];
  currentEssential: any;

  instantOrderSubmit() {
    this.router.navigate(['/checkout'], {queryParams: {isInstant: true}});

    if (this.order.gradeId == null || this.order.typeId == null || this.order.brandId == null || this.order.packageId == null || this.order.quantity == null) {
      // alert('please insert value properly');
      this.tostr.warning('please insert value properly', '', {positionClass: 'toast-bottom-full-width', progressBar: true});
      return;
    }
    let data = {
      total_price: (this.order.typeId.price + this.order.gradeId.price + this.order.packageId.price) * this.order.quantity,
      brandId: this.order.brandId.id,
      typeId: this.order.typeId.id,
      quantity: this.order.quantity,
      gradeId: this.order.gradeId.id,
      packageId: this.order.packageId.id,

      name: this.currentEssential.name,
      brand: this.order.brandId.name,
      type: this.order.typeId.name,
      grade: this.order.gradeId.name,
      package: this.order.packageId.name


    };
    console.log(data);
    this.store.dispatch(<Action>{type: INSTANTORDER, payload: data});


  }
}
