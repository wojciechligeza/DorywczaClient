import { Injectable } from '@angular/core';
import { IEmployer } from '../interfaces/iemployer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  _baseURL: string = 'https://localhost:44368/api/Employers';

  constructor(private http: HttpClient) { }

  getEmployers(): Observable<Array<IEmployer>> {
    return this.http.get<Array<IEmployer>>(this._baseURL);
  }

  getEmployer(id: number): Observable<IEmployer> {
    return this.http.get<IEmployer>(this._baseURL + '/' + id);
  }

  postEmployer(employer: IEmployer): Observable<IEmployer> {
    return this.http.post<IEmployer>(this._baseURL, employer);
  }

  putEmployer(id: number, employer: IEmployer): Observable<IEmployer> {
    return this.http.put<IEmployer>(this._baseURL + '/' + id, employer);
  }

  deleteEmployer(id: number): Observable<IEmployer> {
    return this.http.delete<IEmployer>(this._baseURL + '/' + id);
  }
}