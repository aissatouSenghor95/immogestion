import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard-user-paiement',
  templateUrl: './dashboard-user-paiement.component.html',
  styleUrls: ['./dashboard-user-paiement.component.css']
})
export class DashboardUserPaiementComponent {
  /** Based on the screen size, switch from standard to one column per row */
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}
}
export interface Food {
  value: string;
  viewValue: string;
}