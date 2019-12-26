import { Injectable } from '@angular/core';
import { IEmployee } from '../interfaces/iemployee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  _baseURL: string = 'https://localhost:44368/api/Employees';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Array<IEmployee>> {
    return this.http.get<Array<IEmployee>>(this._baseURL);
  }

  getEmployee(id: number): Observable<IEmployee> {
    return this.http.get<IEmployee>(this._baseURL + '/' + id);
  }

  postEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(this._baseURL, employee);
  }

  putJobOffer(id: number, employee: IEmployee): Observable<IEmployee> {
    return this.http.put<IEmployee>(this._baseURL + '/' + id, employee);
  }

  deleteJobOffer(id: number): Observable<IEmployee> {
    return this.http.delete<IEmployee>(this._baseURL + '/' + id);
  }
}
