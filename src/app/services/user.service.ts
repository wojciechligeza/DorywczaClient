import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/iuser';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    getUsers(): Observable<Array<IUser>> {
        return this.http.get<Array<IUser>>(`${environment._baseURL}/Auth`);
    }

    getUser(id: number): Observable<IUser> {
      return this.http.get<IUser>(`${environment._baseURL}/Auth/${id}`);
    }

    registerUser(user: IUser): Observable<IUser> {
      return this.http.post<IUser>(`${environment._baseURL}/Auth/register`, user);
    }

    deleteUser(id: number): Observable<IUser> {
      return this.http.delete<IUser>(`${environment._baseURL}/Auth/${id}`);
    }

}
