import { Component, OnInit } from '@angular/core';
import { IJobOffer } from '@app/interfaces/ijob-offer';
import { JobOffersService } from '@app/services/job-offers.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { MoreDetailsComponent } from '../more-details/more-details.component';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.css']
})
export class JobOffersComponent implements OnInit {

  private dataSource: any;
  private tableHeaders: string[] = ['name', 'salary', 'timeFrame', 'amountOfPlaces', 'state', 'moreDetails', 'apply'];

  constructor(private route: ActivatedRoute,
              private service: JobOffersService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    const dataId: number = +this.route.snapshot.paramMap.get('categoryId');
    console.log(dataId);

    this.service.getJobOffers()
      .pipe(map(a => a.filter(b => b.categoryId === dataId)))
      .subscribe((data: Array<IJobOffer>) => {
        console.log(data);
        this.dataSource = new MatTableDataSource<IJobOffer>(data as Array<IJobOffer>);
      },
      error => {
        console.log(error);
      });
  }

  moreDetails(offer: IJobOffer) {
    console.log(offer);
    this.dialog.open(MoreDetailsComponent, {
      data: {
        jobOfferId: offer.jobOfferId,
        name: offer.name,
        description: offer.description,
        salary: offer.salary,
        timeFrame: offer.timeFrame,
        amountOfPlaces: offer.amountOfPlaces,
        addDate: offer.addDate,
        qualificationIsRequired: offer.qualificationIsRequired,
        state: offer.state,
        employerId: offer.employerId
      }
    });
  }
}
