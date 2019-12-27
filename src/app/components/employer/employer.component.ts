import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/interfaces/iemployee';
import { EmployeeService } from 'src/app/services/employee.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { MoreInfoComponent } from '../more-info/more-info.component';


@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {

  dataSource;
  tableHeaders: string[] = ['name', 'gender', 'age', 'email', 'phone', 'moreInfo'];

  constructor(private service: EmployeeService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.service.getEmployees().subscribe((data: Array<IEmployee>) => {
      console.log('Result - ' + data);
      this.dataSource = new MatTableDataSource<IEmployee>(data as Array<IEmployee>);
    })
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
      })
  }

}
