import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory } from '../interfaces/icategory';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { publishReplay, refCount } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public categoriesCache: Observable<Array<ICategory>>;

  getCategories(): Observable<Array<ICategory>> {
    if (!this.categoriesCache) {
      this.categoriesCache = this.http.get<Array<ICategory>>(`${environment._baseURL}/api/Categories`)
                            .pipe(
                              publishReplay(1),
                              refCount()
                            );
    }
    return this.categoriesCache;
  }

  getCategory(id: number): Observable<ICategory> {
    return this.http.get<ICategory>(`${environment._baseURL}/api/Categories/${id}`);
  }

  clearCache(): void {
    this.categoriesCache = null;
  }
}
