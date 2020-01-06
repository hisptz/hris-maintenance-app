import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { APIResult } from '../models/api-result.model';
import { retry, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  apiURL = `api/`;

  constructor(private httpClient: HttpClient) { }

  getAll(apiParam: string): Observable<APIResult> {
    return this.httpClient.get<APIResult>(`${this.apiURL}${apiParam}`);
  }

  deleteOne(payload: any): Observable<any> {
    const id = payload ? payload.id : '';
    const apiEndpoints = payload ? payload.apiEndpoint : '';
    const httpURL = `${this.apiURL}${apiEndpoints}/${id}`;
    return this.httpClient
      .delete<any>(httpURL, httpOptions)
      .pipe(retry(1), catchError(error => of(error)));
  }

  createOne(payload: any, apiParam: any): Observable<any> {
    const httpURL = `${this.apiURL}${apiParam}`;
    console.log('PAYLOAD::: ', JSON.stringify(payload));
    return this.httpClient.post<any>(httpURL, payload, httpOptions);
  }
}
