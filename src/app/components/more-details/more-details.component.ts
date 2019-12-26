import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IJobOffer } from 'src/app/interfaces/ijob-offer';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css']
})
export class MoreDetailsComponent {

  constructor(private dialogRef: MatDialogRef<MoreDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) private data: IJobOffer) { }

  close(): void {
    this.dialogRef.close();
  }

}
