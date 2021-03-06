import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRequest } from './request.interface';
import { RequestStatus } from './request-status.enum';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getApprovableRequests(search?: string) {
    return this.http.get<IRequest[]>('/api/v1/request/approvable', {
      params: {
        search: search ? search.trim() : ''
      }
    });
  }

  getMyRequests(search?: string) {
    return this.http.get<IRequest[]>('/api/v1/request/my', {
      params: {
        search: search ? search.trim() : ''
      }
    });
  }

  changeRequestStatus(requestId: string, status: RequestStatus, additionalInfo?: string) {
    return this.http.patch(`/api/v1/request/${requestId}`, {
      status,
      additionalInfo
    });
  }
}
