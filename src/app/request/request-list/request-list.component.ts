import { Component, OnInit, Input } from '@angular/core';
import { IRequest } from '../request.interface';
import { RequestStatus } from '../request-status.enum';
import { RequestService } from '../request.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {

  @Input() requests: IRequest[];
  statuses: string[] = Object.keys(RequestStatus);

  constructor(private requestService: RequestService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  approveRequest(id: string) {
    this.changeStatus(id, RequestStatus.APPROVED);
  }

  denyRequest(id: string) {
    this.changeStatus(id, RequestStatus.DENIED);
  }

  private changeStatus(id: string, status: RequestStatus) {
    this.requestService.changeRequestStatus(id, status).subscribe(() => {
      this.snackBar.open('שינוי סטטוס נקלט בהצלחה', 'אישור', {
        duration: 3 * 1000
      });
    }, (error) => {
      this.snackBar.open('שינוי סטטוס הבקשה נכשל. אנא נסה שוב מאוחר יותר.', 'אישור', {
        duration: 5 * 1000
      });
    });

  }
}
