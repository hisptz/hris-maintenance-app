import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FieldService {
  apiURL = `api/`;
  entityNamee = `fields`;

  constructor(private httpClient: HttpClient) {}

  getFieldNameIfExist(name: string): Observable<any> {
    const httpURL = `${this.apiURL}${this.entityNamee}/?name=${name}`;
    return this.httpClient.get<any>(httpURL).pipe(
      retry(1),
      catchError(error => of(error))
    );
  }
}
