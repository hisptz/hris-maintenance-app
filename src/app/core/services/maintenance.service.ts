import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResult } from '../models/api-result.model';


@Injectable({
  providedIn: 'root',
})
export class MaintenanceService {
  fieldsURL = `api/`;

  constructor(private httpClient: HttpClient) {}

  getAll(apiParam: string): Observable<APIResult> {
    return this.httpClient.get<APIResult>(
      `${this.fieldsURL}${apiParam}`
    );
  }
}
