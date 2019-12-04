import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  currentUser() {
    return this.http.get<{ name: string, unit: string }>('/api/v1/user');
  }
}
