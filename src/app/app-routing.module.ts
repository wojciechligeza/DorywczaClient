import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { CategoriesComponent } from './components/categories/categories.component';
import { JobOffersComponent } from './components/job-offers/job-offers.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ApplyComponent } from './components/apply/apply.component';
import { EmployerComponent } from './components/employer/employer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { AddJobOffersComponent } from './components/add-job-offers/add-job-offers.component';

import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'category/:categoryId', component: JobOffersComponent },
  { path: 'category/:categoryId/jobOffer/:jobOfferId', component: EmployeeComponent },
  { path: 'employee/apply', component: ApplyComponent },
  { path: 'employers/dashboard/:username', component: DashBoardComponent, canActivate: [AuthGuard] },
  { path: 'employers/dashboard/:username/employees', component: EmployerComponent },
  { path: 'employers/dashboard/:username/addJobOffers', component: AddJobOffersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // otherwise redirect to CategoriesComponent
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
