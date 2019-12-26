import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { JobOffersComponent } from './components/job-offers/job-offers.component';
import { MoreDetailsComponent } from './components/more-details/more-details.component';
import { EmployeeComponent } from './components/employee/employee.component';

// services
import { CategoryService } from './services/category.service';
import { JobOffersService } from './services/job-offers.service';
import { EmployeeService } from './services/employee.service';

// AngularMaterial
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatTableModule, MatDialogModule,
         MatListModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatRadioModule,
         MatIconModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    JobOffersComponent,
    MoreDetailsComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, FormsModule,
    // AngularMaterial
    BrowserAnimationsModule,
    MatButtonModule, MatCardModule, MatToolbarModule, MatTableModule, MatDialogModule,
    MatListModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatRadioModule,
    MatIconModule, MatCheckboxModule
  ],
  entryComponents: [MoreDetailsComponent],
  providers: [CategoryService, JobOffersService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
