import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatListModule,
    MatCardModule,
    MatSelectModule
  ],
  exports: [
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatListModule,
    MatCardModule,
    MatSelectModule
  ]
})
export class SharedModule { }
