import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { CategoriesComponent } from './components/categories/categories.component';
import { JobOffersComponent } from './components/job-offers/job-offers.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ApplyComponent } from './components/apply/apply.component';
import { EmployerComponent } from './components/employer/employer.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/:workplace/jobOffers', component: JobOffersComponent },
  { path: ':name/employee', component: EmployeeComponent },
  { path: 'employee/apply', component: ApplyComponent },
  { path: 'employers', component: EmployerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
