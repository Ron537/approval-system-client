import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUnit } from './unit.interface';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IUnit[]> {
    return this.http.get<IUnit[]>('/api/v1/unit');
  }

  getRanks(): Observable<string[]> {
    return this.http.get<string[]>('/api/v1/ranks');
  }
}
