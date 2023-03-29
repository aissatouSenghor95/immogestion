import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboardtest',
  templateUrl: './dashboardtest.component.html',
  styleUrls: ['./dashboardtest.component.css']
})
export class DashboardtestComponent {

  //Sidebar toggle show hide function
  status = false;
  addToggle() {
    this.status = !this.status;
  }
}
