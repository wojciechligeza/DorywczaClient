import { Component, OnInit, ViewChild } from '@angular/core';
import { IEmployee } from '@app/interfaces/iemployee';
import { EmployeeService } from '@app/services/employee.service';
import { MatTableDataSource, MatDialog, MatPaginator } from '@angular/material';
import { MoreInfoComponent } from '../more-info/more-info.component';
import { AuthService } from '@app/services/auth.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {

  constructor(private employeeService: EmployeeService,
              private authService: AuthService,
              private router: Router,
              private dialog: MatDialog) { }

  public dataSource: any;
  public tableHeaders: string[] = ['name', 'gender', 'age', 'email', 'phone', 'moreInfo', 'accept', 'refuse'];

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  ngOnInit(): void {
    const id = this.authService.currentUserValue.id;
    console.log(id);
    this.employeeService.getEmployeesForEmployer(id, 'forEmployer').subscribe((data: Array<IEmployee>) => {
      console.log(data);
      this.dataSource = new MatTableDataSource<IEmployee>(data as Array<IEmployee>);
      this.dataSource.paginator = this.paginator;
    },
    error => {
      console.log(error);
    });
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  moreInfo(employee: IEmployee) {
    console.log(employee);
    this.dialog.open(MoreInfoComponent, {
      data: {
        employeeId: employee.employeeId,
        name: employee.name,
        gender: employee.gender,
        age: employee.age,
        email: employee.email,
        phone: employee.phone,
        qualification: employee.qualification,
        experience: employee.experience,
        comment: employee.comment
      }
    });
  }

  accept = (id: number): void => this.removeEmployee(id, 'yes');

  refuse = (id: number): void => this.removeEmployee(id, 'no');

  removeEmployee(id: number, status: string): void {
    this.employeeService.deleteEmployee(id, status)
        .pipe(finalize(() => this.reload(this.router.url)))
        .subscribe(data => console.log(data),
                   error => {
                     console.log(error);
                  });

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl(this.router.url);
    });
  }

  async reload(url: string): Promise<boolean> {
    await this.router.navigateByUrl('/', { skipLocationChange: true });
    return this.router.navigateByUrl(url);
  }
}
