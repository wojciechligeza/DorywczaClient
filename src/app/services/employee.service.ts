import { Injectable } from '@angular/core';
import { IEmployee } from '../interfaces/iemployee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Array<IEmployee>> {
    return this.http.get<Array<IEmployee>>(`${environment._baseURL}/api/Employees`);
  }

  getEmployeesForEmployer(id: number, forEmployer: string): Observable<Array<IEmployee>> {
    return this.http.get<Array<IEmployee>>(`${environment._baseURL}/api/Employees/${forEmployer}/${id}`);
  }

  getEmployee(id: number): Observable<IEmployee> {
    return this.http.get<IEmployee>(`${environment._baseURL}/api/Employees/${id}`);
  }

  postEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(`${environment._baseURL}/api/Employees`, employee);
  }

  putEmployee(id: number, employee: IEmployee): Observable<IEmployee> {
    return this.http.put<IEmployee>(`${environment._baseURL}/api/Employees/${id}`, employee);
  }

  deleteEmployee(id: number, status: string): Observable<IEmployee> {
    return this.http.delete<IEmployee>(`${environment._baseURL}/api/Employees/${id}/${status}`);
  }
}
