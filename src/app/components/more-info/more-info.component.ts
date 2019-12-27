import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IEmployee } from 'src/app/interfaces/iemployee';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent {

  constructor(private dialogRef: MatDialogRef<MoreInfoComponent>,
              @Inject(MAT_DIALOG_DATA) private data: IEmployee) { }

close(): void {
  this.dialogRef.close();
}

}
