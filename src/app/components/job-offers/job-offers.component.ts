import { Component, OnInit, ViewChild } from '@angular/core';
import { IJobOffer } from '@app/interfaces/ijob-offer';
import { JobOffersService } from '@app/services/job-offers.service';
import { MatTableDataSource, MatDialog, MatPaginator } from '@angular/material';
import { MoreDetailsComponent } from '../more-details/more-details.component';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.css']
})
export class JobOffersComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private service: JobOffersService,
              private dialog: MatDialog) { }

  public dataSource: any;
  public tableHeaders: string[] = ['name', 'salary', 'timeFrame', 'amountOfPlaces', 'state', 'moreDetails', 'apply'];

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  ngOnInit(): void {
    const dataId: number = +this.route.snapshot.paramMap.get('categoryId');
    console.log(dataId);

    this.service.getJobOffers()
      .pipe(map(a => a.filter(b => b.categoryId === dataId)))
      .subscribe((data: Array<IJobOffer>) => {
        console.log(data);
        this.dataSource = new MatTableDataSource<IJobOffer>(data as Array<IJobOffer>);
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.log(error);
      });
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
