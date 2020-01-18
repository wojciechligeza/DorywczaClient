import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '@app/services/user.service';
import { AuthService } from '@app/services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserService,
              private authService: AuthService) { }

  public loading = false;

  public registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  ngOnInit(): void {
    if (this.authService.currentUserValue) {
    this.router.navigate(['/']);
    }
  }

  onSubmit(): void {
    this.loading = true;
    this.registerUser();
  }

  registerUser(): void {
    this.userService.registerUser(this.registerForm.value)
        .pipe(first())
        .subscribe(() => {
            this.router.navigate(['/login']);
          },
          error => {
            console.log(error);
            this.loading = false;
          });
  }
}
