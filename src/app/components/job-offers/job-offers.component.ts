import { Component, OnInit } from '@angular/core';
import { IJobOffer } from 'src/app/interfaces/ijob-offer';
import { JobOffersService } from 'src/app/services/job-offers.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.css']
})
export class JobOffersComponent implements OnInit {

  jobOffers: Array<IJobOffer>;
  dataSource;
  displayedColumns: string[] = ['name', 'salary', 'timeFrame', 'amountOfPlaces', 'state'];

  constructor(private service: JobOffersService) { }

  ngOnInit() {
    this.service.getJobOffers().subscribe((data: Array<IJobOffer>) => {
      console.log('Result - ' + data);
      this.dataSource = new MatTableDataSource<IJobOffer>(data as Array<IJobOffer>);
    })
  }

}
