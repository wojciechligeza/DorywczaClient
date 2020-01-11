import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { EmployeeService } from '@app/services/employee.service';
import { IGender } from '@app/interfaces/igender';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { IJobOfferEmployee } from '@app/interfaces/ijob-offer-employee';

export class ErrorMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && ( control.touched || isSubmitted));
    }
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  constructor(private service: EmployeeService,
              private router: Router,
              private route: ActivatedRoute) { }

  private errorMatcher = new ErrorMatcher();

  private displayedGenders: Array<IGender> = [
    {
      value: 'K',
      display: 'Kobieta'
    },
    {
      value: 'M',
      display: 'Mężczyzna'
    }
  ];

  private regEx = {
    "age" : "^[0-9]{2}$",
    "phone" : "^((\\+|00)48)?\\s?[0-9]{3}\\s?[0-9]{3}\\s?[0-9]{3}$"
  };


  private employeeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.pattern(this.regEx.age)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(this.regEx.phone)]),
    qualification: new FormControl('', Validators.maxLength(1000)),
    experience: new FormControl('', Validators.maxLength(2000)),
    comment: new FormControl('', Validators.maxLength(4000)),
    agreementRodo: new FormControl(false, Validators.requiredTrue),
    jobOfferEmployees: new FormControl(new Array<IJobOfferEmployee>())
  });

  addValuetoForm(): void {
    const jobOfferEmployee: Array<IJobOfferEmployee> = [
      { jobOfferId: +this.route.snapshot.paramMap.get('jobOfferId') }
    ];
    this.employeeForm.patchValue({
      jobOfferEmployees: jobOfferEmployee
    });
    console.log(this.employeeForm.value);
  }

  onSubmit(): void {
    this.addValuetoForm();
    this.service.postEmployee(this.employeeForm.value)
      .subscribe(() => console.log('Employee was created in db'),
                error => {
                  console.log(error);
                });

    this.employeeForm.reset();
    this.router.navigate(['/employee/apply']);
  }
}
