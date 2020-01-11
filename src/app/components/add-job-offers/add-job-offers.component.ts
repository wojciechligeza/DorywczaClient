import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JobOffersService } from '@app/services/job-offers.service';
import { AuthService } from '@app/services/auth.service';
import { EmployerService } from '@app/services/employer.service';
import { IOffer } from '@app/interfaces/ioffer';
import { IEmployer } from '@app/interfaces/iemployer';
import { DatePipe } from '@angular/common';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-job-offers',
  templateUrl: './add-job-offers.component.html',
  styleUrls: ['./add-job-offers.component.css']
})
export class AddJobOffersComponent implements OnInit {

  constructor(private jobOfferService: JobOffersService,
              private employerService: EmployerService,
              private authService: AuthService) { }

  private submitted: boolean = false;
  private Id: number = 0;

  private displayedOffers: Array<IOffer> = [
    {
      value: 1,
      display: 'Prace budowlane'
    },
    {
      value: 2,
      display: 'Prace biurowe'
    },
    {
      value: 3,
      display: 'Prace transportowe'
    },
    {
      value: 4,
      display: 'Opieka'
    },
  ];

  private firstOfferForm = new FormGroup({
    name: new FormControl('', Validators.required),
    timeFrameFrom: new FormControl(JSON.stringify(new Date()), Validators.required),
    timeFrameTo: new FormControl(JSON.stringify(new Date()), Validators.required),
    amountOfPlaces: new FormControl(0, Validators.required),
    categoryId: new FormControl(0, Validators.required)
  });

  private secondOfferForm = new FormGroup({
    qualificationIsRequired: new FormControl(false),
    description: new FormControl(''),
    salary: new FormControl(JSON.stringify(50))
  });

  private finalOfferForm = new FormGroup({
    name: this.firstOfferForm.get('name'),
    description: this.secondOfferForm.get('description'),
    salary: this.secondOfferForm.get('salary'),
    timeFrame: new FormControl(''),
    amountOfPlaces: this.firstOfferForm.get('amountOfPlaces'),
    qualificationIsRequired: this.secondOfferForm.get('qualificationIsRequired'),
    addDate: new FormControl(new Date()),
    state: new FormControl(false),
    categoryId: this.firstOfferForm.get('categoryId'),
    employerId: new FormControl(0)
  });

  ngOnInit(): void {
    let employer: IEmployer;

    let addId: number = this.authService.currentUserValue.id;
    console.log(addId);

    this.employerService.getEmployers()
      .pipe(map(a => a.filter(b => b.userId === addId)))
      .subscribe(a => {
        employer = a.find(b => b.userId === addId);
        console.log(employer);
        addId = employer.employerId;
        this.Id = addId;
        console.log(this.Id);
      },
        error => {
          console.log(error);
      });
  }

  formatLabel(value: number) {
    return value + 'zł';
  }

  mergeTimeFrame(): string {
    const datePipe = new DatePipe('en-US');
    const timeFrameFrom: string = datePipe.transform(this.firstOfferForm.get('timeFrameFrom').value, 'dd/MM/yyyy');
    const timeFrameTo: string = datePipe.transform(this.firstOfferForm.get('timeFrameTo').value, 'dd/MM/yyyy');
    return timeFrameFrom + ' - ' + timeFrameTo;
  }

  onSubmit(): void {
    this.finalOfferForm.patchValue({
          timeFrame: this.mergeTimeFrame(),
          state: true,
          employerId: this.Id
    });
    console.log(this.finalOfferForm.value);

    this.jobOfferService.postJobOffer(this.finalOfferForm.value)
      .subscribe(() => console.log('JobOffer was sent'),
                error => {
                  console.log(error);
                });

    this.submitted = true;
    this.finalOfferForm.reset();
  }
}
