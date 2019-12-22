import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IJobOffer } from '../interfaces/ijob-offer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobOffersService {

  _baseURL: string = 'https://localhost:44368/api/JobOffers';

  constructor(private http: HttpClient) { }

  getJobOffers(): Observable<Array<IJobOffer>> {
    return this.http.get<Array<IJobOffer>>(this._baseURL);
  }

  getJobOffer(id: number): Observable<IJobOffer> {
    return this.http.get<IJobOffer>(this._baseURL + '/' + id);
  }

  postJobOffer(jobOffer: IJobOffer): Observable<IJobOffer> {
    return this.http.post<IJobOffer>(this._baseURL, jobOffer);
  }

  putJobOffer(id: number, jobOffer: IJobOffer): Observable<IJobOffer> {
    return this.http.put<IJobOffer>(this._baseURL + '/' + id, jobOffer);
  }

  deleteJobOffer(id: number): Observable<IJobOffer> {
    return this.http.delete<IJobOffer>(this._baseURL + '/' + id);
  }
}
