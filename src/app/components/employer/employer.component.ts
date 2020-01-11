import { Component, OnInit } from '@angular/core';
import { IEmployee } from '@app/interfaces/iemployee';
import { EmployeeService } from '@app/services/employee.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { MoreInfoComponent } from '../more-info/more-info.component';
import { AuthService } from '@app/services/auth.service';
import { Router } from '@angular/router';

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

  private dataSource: any;
  private tableHeaders: string[] = ['name', 'gender', 'age', 'email', 'phone', 'moreInfo', 'accept', 'refuse'];

  ngOnInit(): void {
    const id = this.authService.currentUserValue.id;
    console.log(id);
    this.employeeService.getEmployeesForEmployer(id, 'forEmployer').subscribe((data: Array<IEmployee>) => {
      console.log(data);
      this.dataSource = new MatTableDataSource<IEmployee>(data as Array<IEmployee>);
    },
    error => {
      console.log(error);
    });
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

  accept(id: number) {
    const status: string = 'yes';
    this.employeeService.deleteEmployee(id, status).subscribe(data => {
      console.log(data);
      this.reload(this.router.url);
    },
    error => {
      console.log(error);
    });
    location.reload(true);
  }

  refuse(id: number) {
    const status: string = 'no';
    this.employeeService.deleteEmployee(id, status).subscribe(data => {
      console.log(data);
      this.reload(this.router.url);
    },
    error => {
      console.log(error);
    });
    location.reload(true);
  }

  async reload(url: string): Promise<boolean> {
    await this.router.navigateByUrl('/', { skipLocationChange: false });
    return this.router.navigateByUrl(url);
  }
}
