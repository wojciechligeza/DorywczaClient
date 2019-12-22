import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory } from '../interfaces/icategory';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  _baseURL: string = 'https://localhost:44368/api/Categories';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Array<ICategory>> {
    return this.http.get<Array<ICategory>>(this._baseURL);
  }

  getCategory(id: number): Observable<Array<ICategory>> {
    return this.http.get<Array<ICategory>>(this._baseURL + '/' + id);
  }
}
