import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResult } from '../models/api-result.model';

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

  constructor(private httpClient: HttpClient) {}

  getAll(apiParam: string): Observable<APIResult> {
    return this.httpClient.get<APIResult>(`${this.apiURL}${apiParam}`);
  }

  deleteOne(item: any): Observable<any> {
    const uid = item ? item.uid : '';
    const apiEndpoints = item ? item.apiEndpoint : '';
    const httpURL = `${this.apiURL}${apiEndpoints}/${uid}`;
    return this.httpClient.delete<any>(httpURL, httpOptions);
  }
}
