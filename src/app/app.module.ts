import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { JobOffersComponent } from './components/job-offers/job-offers.component';

// services
import { CategoryService } from './services/category.service';
import { JobOffersService } from './services/job-offers.service';

// AngularMaterial
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatTableModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    JobOffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // AngularMaterial
    BrowserAnimationsModule,
    MatButtonModule, MatCardModule, MatToolbarModule, MatTableModule
  ],
  providers: [CategoryService, JobOffersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
