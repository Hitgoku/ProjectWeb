import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectWeb';

  showTeamsList = false;

  showList() {
    this.showTeamsList = !this.showTeamsList;
  }
}
