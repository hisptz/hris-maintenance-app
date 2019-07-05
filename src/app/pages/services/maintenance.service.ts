import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  baseURL = 'http://localhost:3000';
  dataURL = 'services';
  constructor(private httpClient: HttpClient) {}

  getAllTheFields(): Observable<{}> {
    return this.httpClient.get(this.baseURL + '/' + this.dataURL);
  }
}
