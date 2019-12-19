import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service'
import { ICategory } from '../../interfaces/icategory'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: ICategory;

  constructor(private service: CategoryService) { }

  ngOnInit() {
    this.service.getCategories().subscribe((data: any) => {
      console.log(data);
      this.categories = data;
    })
  }

}
