import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  _baseURL: string = "http://localhost:60874/api/Categories";

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(this._baseURL+"/GetCategories");
  }

  getCategory(id: number) {
    return this.http.get(this._baseURL+"/GetCategories/"+id);
  }
}
