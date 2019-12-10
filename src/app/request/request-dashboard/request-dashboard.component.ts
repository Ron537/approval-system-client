import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Observable, Subject } from 'rxjs';
import { IRequest } from '../request.interface';
import { ActivatedRoute } from "@angular/router";
import { map, debounceTime, distinctUntilChanged, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-request-dashboard',
  templateUrl: './request-dashboard.component.html',
  styleUrls: ['./request-dashboard.component.scss']
})
export class RequestDashboardComponent implements OnInit {

  requests$: Observable<IRequest[]>;
  approvable: boolean;
  keydown$ = new Subject<string>();

  constructor(private requestService: RequestService, private route: ActivatedRoute) {
    this.keydown$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe(search => this.fetchRequests(search));
  }

  ngOnInit() {
    this.route.url.subscribe(params => {
      if (params[0].path === 'approvable') {
        this.approvable = true;
      } else {
        this.approvable = false;
      }

      this.fetchRequests();
    });
  }

  fetchRequests(term?: string) {
    if (this.approvable) {
      this.requests$ = this.requestService.getApprovableRequests(term);
    } else {
      this.requests$ = this.requestService.getMyRequests(term);
    }
  }

  searchRequests(term: string) {
    if (term && term.trim()) {
      this.fetchRequests(term.trim());
    }
  }
}
