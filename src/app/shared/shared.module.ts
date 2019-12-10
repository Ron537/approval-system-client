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
import { MatStepperModule } from '@angular/material/stepper';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBoxComponent } from './search-box/search-box.component';


@NgModule({
  declarations: [SearchBoxComponent],
  imports: [
    CommonModule,
    FormsModule,
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
    MatSelectModule,
    MatStepperModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
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
    MatSelectModule,
    MatStepperModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    ReactiveFormsModule,
    SearchBoxComponent
  ]
})
export class SharedModule { }
