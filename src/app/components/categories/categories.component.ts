import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../interfaces/icategory';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Array<ICategory>;

  constructor(private service: CategoryService) { }

  ngOnInit() {
    this.service.getCategories().subscribe((data: Array<ICategory>) => {
      console.log('Result - ' + data);
      this.categories = data;
    })
  }

}
