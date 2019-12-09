import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-request-additional-info-dialog',
  templateUrl: './request-additional-info-dialog.component.html',
  styleUrls: ['./request-additional-info-dialog.component.scss']
})
export class RequestAdditionalInfoDialogComponent implements OnInit {

  id: string;
  description: string;

  constructor(
    public dialogRef: MatDialogRef<RequestAdditionalInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: { id: string }
  ) {
    this.id = data.id;
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
