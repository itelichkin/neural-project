import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule,
  MatCardModule, MatCheckboxModule, MatChipsModule, MatDialogModule, MatGridListModule, MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatRadioModule, MatSelectModule, MatSidenavModule, MatSliderModule,
  MatSlideToggleModule, MatSnackBarModule, MatTabsModule, MatToolbarModule,
  MatTooltipModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatExpansionModule, MatTableModule,
  MatStepperModule, MatPaginatorModule, MatSortModule
} from '@angular/material';

@NgModule({
  exports: [
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule,
    MatCardModule, MatCheckboxModule, MatChipsModule, MatDialogModule,
    MatGridListModule, MatIconModule, MatInputModule, MatStepperModule,
    MatListModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatExpansionModule,
    MatRadioModule, MatSelectModule, MatSidenavModule, MatSliderModule,
    MatSlideToggleModule, MatSnackBarModule, MatTabsModule, MatToolbarModule,
    MatTooltipModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatTableModule,
    MatPaginatorModule, MatSortModule
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule,
    MatCardModule, MatCheckboxModule, MatChipsModule, MatDialogModule,
    MatGridListModule, MatIconModule, MatInputModule, MatStepperModule,
    MatListModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatRadioModule, MatSelectModule, MatSidenavModule, MatSliderModule,
    MatSlideToggleModule, MatSnackBarModule, MatTabsModule, MatToolbarModule, MatExpansionModule,
    MatTooltipModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatTableModule,
    MatPaginatorModule, MatSortModule
  ]
})
export class MaterialModule {
}
