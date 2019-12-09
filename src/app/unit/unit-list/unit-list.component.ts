import { Component, OnInit, Input } from '@angular/core';
import { IUnit } from '../unit.interface';
import { MatSelectChange, MatSnackBar, MatDialog } from '@angular/material';
import { UnitService } from '../unit.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { UnitApproversDialogComponent } from '../unit-approvers-dialog/unit-approvers-dialog.component';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.scss']
})
export class UnitListComponent implements OnInit {

  @Input() units: IUnit[];
  @Input() ranks: string[];
  ranksSubject: Subject<{ id: string, ranks: [] }>;

  constructor(private unitService: UnitService, private snackBar: MatSnackBar, private dialog: MatDialog) {
    this.ranksSubject = new Subject();
  }

  ngOnInit() {
    this.ranksSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe(({ id, ranks }: { id: string, ranks: string[] }) => {
      this.unitService.setApprovalRanks(id, ranks).subscribe(() => {
        this.snackBar.open('הדרגה שונתה בהצלחה', 'אישור', {
          duration: 3 * 1000,
        });
      }, () => {
        this.snackBar.open('שינוי דרגות נכשל. נסה שוב מאוחר יותר', 'אישור', {
          duration: 5 * 1000,
        });
      });
    })
  }

  ranksChanged(event: MatSelectChange, unitId: string) {
    this.ranksSubject.next({ id: unitId, ranks: event.value });
  }

  openUsersDialog(unitId: string) {
    const dialogRef = this.dialog.open(UnitApproversDialogComponent, {
      data: {
        id: unitId
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((users: { id: string, name: string }[]) => {
      if (users) {
        this.unitService.setSpecialApprovers(unitId, users.map(usr => usr.id)).subscribe(() => {
          this.snackBar.open('משתמשים נוספו בהצלחה', 'אישור', {
            duration: 3 * 1000,
          });
        }, () => {
          this.snackBar.open('הוספת משתמשים נכשל. נסה שוב מאוחר יותר', 'אישור', {
            duration: 5 * 1000,
          });
        });
      }
    })
  }
}
