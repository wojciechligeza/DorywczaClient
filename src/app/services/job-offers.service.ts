import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IJobOffer } from '../interfaces/ijob-offer';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobOffersService {

  constructor(private http: HttpClient) { }

  getJobOffers(): Observable<Array<IJobOffer>> {
    return this.http.get<Array<IJobOffer>>(`${environment._baseURL}/api/JobOffers`);
  }

  getJobOffer(id: number): Observable<IJobOffer> {
    return this.http.get<IJobOffer>(`${environment._baseURL}/api/JobOffers/${id}`);
  }

  postJobOffer(jobOffer: IJobOffer): Observable<IJobOffer> {
    return this.http.post<IJobOffer>(`${environment._baseURL}/api/JobOffers`, jobOffer);
  }

  putJobOffer(id: number, jobOffer: IJobOffer): Observable<IJobOffer> {
    return this.http.put<IJobOffer>(`${environment._baseURL}/api/JobOffers/${id}`, jobOffer);
  }

  deleteJobOffer(id: number): Observable<IJobOffer> {
    return this.http.delete<IJobOffer>(`${environment._baseURL}/api/JobOffers/${id}`);
  }
}
