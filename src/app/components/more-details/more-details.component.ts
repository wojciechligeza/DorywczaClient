import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IJobOffer } from '@app/interfaces/ijob-offer';
import { EmployerService } from '@app/services/employer.service';
import { IEmployer } from '@app/interfaces/iemployer';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css']
})
export class MoreDetailsComponent {

  private employer: IEmployer;

  constructor(private dialogRef: MatDialogRef<MoreDetailsComponent>,
              private employerService: EmployerService,
              @Inject(MAT_DIALOG_DATA) private data: IJobOffer) {

    this.employerService.getEmployer(this.data.employerId)
      .subscribe((result: IEmployer) => {
                    this.employer = result;
                    console.log(result);
                  },
                  error => {
                    console.log(error);
                  });
  }

  close(): void {
    this.dialogRef.close();
  }
}
