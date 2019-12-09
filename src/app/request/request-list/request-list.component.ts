import { Component, OnInit, Input } from '@angular/core';
import { IRequest } from '../request.interface';
import { RequestStatus } from '../request-status.enum';
import { RequestService } from '../request.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { RequestAdditionalInfoDialogComponent } from '../request-additional-info-dialog/request-additional-info-dialog.component';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {

  @Input() requests: IRequest[];
  @Input() approvable: boolean;

  statuses: string[] = Object.keys(RequestStatus);

  constructor(
    private requestService: RequestService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  approveRequest(id: string) {
    this.changeStatus(id, RequestStatus.APPROVED);
  }

  denyRequest(id: string) {
    this.changeStatus(id, RequestStatus.DENIED);
  }

  requestAdditionalData(id: string) {
    const dialogRef = this.dialog.open(RequestAdditionalInfoDialogComponent, {
      data: {
        id
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((description: string) => {
      if (description) {
        this.requestService.changeRequestStatus(id, RequestStatus.WAITING_FOR_INFO, description).subscribe(() => {
          this.snackBar.open('שינוי סטטוס נקלט בהצלחה', 'אישור', {
            duration: 3 * 1000
          });
        }, () => {
          this.snackBar.open('שינוי סטטוס הבקשה נכשל. אנא נסה שוב מאוחר יותר.', 'אישור', {
            duration: 5 * 1000
          });
        })
      }
    });
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
