import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable, pipe} from 'rxjs';
import {IData} from './IData';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private _http: HttpClient) { }

  houseApproved(): Observable<IData[]> {
    return this._http.get<IData[]>('http://localhost:9090/api/houseApproved')
      .pipe(map(res => res));
  }
}
