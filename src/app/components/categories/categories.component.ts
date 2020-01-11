import { Component, OnInit } from '@angular/core';
import { ICategory } from '@app/interfaces/icategory';
import { CategoryService } from '@app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private service: CategoryService) { }

  private categories: Array<ICategory>;

  ngOnInit(): void {
    this.service.getCategories()
      .subscribe((data: Array<ICategory>) => this.categories = data,
                  error => {
                    console.log(error);
                  });
  }
}
