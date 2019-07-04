import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuConfiguration } from 'src/app/models/menu-configuration';

@Injectable({
  providedIn: 'root',
})
export class FieldsService {
  baseURL = 'http://localhost:3000';
  dataURL = 'services';
  constructor(private httpClient: HttpClient) {}

  getAllTheFields(): Observable<{}> {
    return this.httpClient.get(this.baseURL + '/' + this.dataURL);
  }
}
