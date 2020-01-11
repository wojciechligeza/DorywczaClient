import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory } from '../interfaces/icategory';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Array<ICategory>> {
    return this.http.get<Array<ICategory>>(`${environment._baseURL}/api/Categories`);
  }

  getCategory(id: number): Observable<ICategory> {
    return this.http.get<ICategory>(`${environment._baseURL}/api/Categories/${id}`);
  }
}
