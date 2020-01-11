import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import { IUser } from '@app/interfaces/iuser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public currentUser: IUser;
  public usernameLink: string = 'username';

  constructor(private router: Router,
              private authService: AuthService) {

    if (this.authService.currentUserValue) {
        this.usernameLink = this.authService.currentUserValue.username;
    }

    this.authService.currentUser.subscribe(data => this.currentUser = data);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  onClick(): void {
    if (this.authService.currentUserValue) {
        this.usernameLink = this.authService.currentUserValue.username;
    }
  }
}
