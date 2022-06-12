import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { DialogComponent } from './dialog/dialog.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { SocioValidatorDirective } from './socio-validator.directive';


import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    SocioValidatorDirective
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    FormsModule,
    MatGridListModule,
    MatSelectModule
    
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
