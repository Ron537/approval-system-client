import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Observable } from 'rxjs';
import { IRequest } from '../request.interface';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-request-dashboard',
  templateUrl: './request-dashboard.component.html',
  styleUrls: ['./request-dashboard.component.scss']
})
export class RequestDashboardComponent implements OnInit {

  requests$: Observable<IRequest[]>;
  approvable: boolean;

  constructor(private requestService: RequestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.url.subscribe(params => {
      if(params[0].path === 'approvable') {
        this.approvable = true;
        this.requests$ = this.requestService.getApprovableRequests();
      } else {
        this.approvable = false;
        this.requests$ = this.requestService.getMyRequests();
      }
    });
  }

}
