import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {

  public active: boolean = true;

  onClick(): void {
    if (this.active) {
    this.active = false;
    } else {
      this.active = true;
    }
  }
}
