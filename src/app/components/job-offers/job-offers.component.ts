import { Component, OnInit } from '@angular/core';
import { IJobOffer } from 'src/app/interfaces/ijob-offer';
import { JobOffersService } from 'src/app/services/job-offers.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { MoreDetailsComponent } from '../more-details/more-details.component';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.css']
})
export class JobOffersComponent implements OnInit {

  dataSource;
  tableHeaders: string[] = ['name', 'salary', 'timeFrame', 'amountOfPlaces', 'state', 'moreDetails', 'apply'];

  constructor(private service: JobOffersService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.service.getJobOffers().subscribe((data: Array<IJobOffer>) => {
      console.log('Result - ' + data);
      this.dataSource = new MatTableDataSource<IJobOffer>(data as Array<IJobOffer>);
    })
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
        state: offer.state
      }
    })
  }

}
