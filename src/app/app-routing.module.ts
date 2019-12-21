import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { CategoriesComponent } from './components/categories/categories.component';


const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'categories', component: CategoriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
