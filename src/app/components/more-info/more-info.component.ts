import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IEmployee } from '@app/interfaces/iemployee';
import { EmployeeService } from '@app/services/employee.service';
import { IJobOffer } from '@app/interfaces/ijob-offer';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent {

  public offer: IJobOffer;

  constructor(private dialogRef: MatDialogRef<MoreInfoComponent>,
              private employeeService: EmployeeService,
              @Inject(MAT_DIALOG_DATA) private data: IEmployee) {

    this.employeeService.getEmployee(this.data.employeeId)
      .subscribe((result: IEmployee) => {
                  result.jobOfferEmployees.map(a => this.offer = a.jobOffer);
                  console.log(this.offer);
                },
                  error => {
                  console.log(error);
                  });
  }

  close(): void {
    this.dialogRef.close();
  }
}
