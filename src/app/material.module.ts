import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogActions } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatNativeDateModule } from "@angular/material/core";
import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule, MatProgressSpinnerModule, MatDialogModule, MatTableModule, MatSortModule, MatPaginatorModule],
  exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule, MatProgressSpinnerModule, MatDialogModule, MatTableModule, MatSortModule, MatPaginatorModule],
})

export class MaterialModule { }