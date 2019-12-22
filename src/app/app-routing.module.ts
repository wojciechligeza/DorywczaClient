import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { CategoriesComponent } from './components/categories/categories.component';
import { JobOffersComponent } from './components/job-offers/job-offers.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'jobOffers', component: JobOffersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
