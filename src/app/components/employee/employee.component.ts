import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { IGender } from 'src/app/interfaces/igender';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  displayedGenders: Array<IGender> = [
    {
      value: 'K',
      display: 'Kobieta'
    },
    {
      value: 'M',
      display: 'Mężczyzna'
    }
  ];

  regEx = {
    "email" : "^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$",
    "age" : "^[0-9]{2}$",
    "phone" : "^((\\+|00)48)?\\s?[0-9]{3}\\s?[0-9]{3}\\s?[0-9]{3}$"
  };

  constructor(private service: EmployeeService) { }

  employeeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.pattern(this.regEx.age)]),
    email: new FormControl('', [Validators.required, Validators.pattern(this.regEx.email)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(this.regEx.phone)]),
    qualification: new FormControl('', Validators.maxLength(1000)),
    experience: new FormControl('', Validators.maxLength(2000)),
    comment: new FormControl('', Validators.maxLength(4000)),
    agreementRodo: new FormControl('', Validators.required)
  })

  onSubmit() {
    console.log(this.employeeForm.value);
    this.service.postEmployee(this.employeeForm.value).subscribe((data) => {
      console.log('Data - ', data);
    })
  }

}
