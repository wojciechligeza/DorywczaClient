// base
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { JobOffersComponent } from './components/job-offers/job-offers.component';
import { MoreDetailsComponent } from './components/more-details/more-details.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ApplyComponent } from './components/apply/apply.component';
import { EmployerComponent } from './components/employer/employer.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { AddJobOffersComponent } from './components/add-job-offers/add-job-offers.component';

// services
import { CategoryService } from './services/category.service';
import { JobOffersService } from './services/job-offers.service';
import { EmployeeService } from './services/employee.service';
import { EmployerService } from './services/employer.service';

// helpers
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { PaginatorPL } from './helpers/paginator-pl';

// Material Design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatTableModule, MatDialogModule,
         MatListModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatRadioModule,
         MatIconModule, MatCheckboxModule, MatSidenavModule, MatStepperModule,
         ErrorStateMatcher, MatDatepickerModule, MatNativeDateModule, MAT_DATE_LOCALE,
         MatSliderModule, MatSlideToggleModule, MatPaginatorModule, MatPaginatorIntl } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    JobOffersComponent,
    MoreDetailsComponent,
    EmployeeComponent,
    ApplyComponent,
    EmployerComponent,
    MoreInfoComponent,
    LoginComponent,
    RegisterComponent,
    DashBoardComponent,
    AddJobOffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, FormsModule,

    // Material Design
    BrowserAnimationsModule,
    MatButtonModule, MatCardModule, MatToolbarModule, MatTableModule, MatDialogModule,
    MatListModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatRadioModule,
    MatIconModule, MatCheckboxModule, MatSidenavModule, MatStepperModule, MatDatepickerModule,
    MatNativeDateModule, MatSliderModule, MatSlideToggleModule, MatPaginatorModule
  ],
  entryComponents: [MoreDetailsComponent, MoreInfoComponent],
  providers: [

    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: MatPaginatorIntl, useClass: PaginatorPL},

    CategoryService, JobOffersService, EmployeeService, EmployerService,
    ErrorStateMatcher,
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
