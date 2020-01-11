import { Injectable } from '@angular/core';
import { IEmployer } from '../interfaces/iemployer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  constructor(private http: HttpClient) { }

  getEmployers(): Observable<Array<IEmployer>> {
    return this.http.get<Array<IEmployer>>(`${environment._baseURL}/api/Employers`);
  }

  getEmployer(id: number): Observable<IEmployer> {
    return this.http.get<IEmployer>(`${environment._baseURL}/api/Employers/${id}`);
  }

  postEmployer(employer: IEmployer): Observable<IEmployer> {
    return this.http.post<IEmployer>(`${environment._baseURL}/api/Employers`, employer);
  }

  putEmployer(id: number, employer: IEmployer): Observable<IEmployer> {
    return this.http.put<IEmployer>(`${environment._baseURL}/api/Employers/${id}`, employer);
  }

  deleteEmployer(id: number): Observable<IEmployer> {
    return this.http.delete<IEmployer>(`${environment._baseURL}/api/Employers/${id}`);
  }
}