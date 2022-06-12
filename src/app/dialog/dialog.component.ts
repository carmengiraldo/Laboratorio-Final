import { Component, Inject } from '@angular/core';
import { DialogData } from './dialog.interface';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'form-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  
  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data:DialogData) {
      
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
