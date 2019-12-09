import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user.service';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-unit-approvers-dialog',
  templateUrl: './unit-approvers-dialog.component.html',
  styleUrls: ['./unit-approvers-dialog.component.scss']
})
export class UnitApproversDialogComponent implements OnInit {

  id: string;
  userControl = new FormControl('');
  filteredUsers$: Observable<{ id: string, name: string }[]>;
  selectedUsers = [];

  constructor(
    public dialogRef: MatDialogRef<UnitApproversDialogComponent>,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) data: { id: string }) {
    this.id = data.id;
  }

  ngOnInit() {
    this.userControl.valueChanges
      .pipe(
        debounceTime(300)
      )
      .subscribe(value => {
        if (value) {
          this.filter(value)
        }
      });
  }

  displayFn(user?: { id: string, name: string }): string | undefined {
    return user ? user.name : undefined;
  }

  selected(event: MatAutocompleteSelectedEvent) {
    const user = event.option.value;

    this.selectedUsers.push(user);
    this.userControl.setValue('');
  }

  private filter(value: string) {
    this.filteredUsers$ = this.userService.search(value);
  }

  remove(id: string) {
    this.selectedUsers = this.selectedUsers.filter(user => user.id !== id);
  }

  close() {
    this.dialogRef.close();
  }
}
