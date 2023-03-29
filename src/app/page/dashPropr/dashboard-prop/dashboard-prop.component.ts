import { Component, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-dashboard-prop',
  templateUrl: './dashboard-prop.component.html',
  styleUrls: ['./dashboard-prop.component.css']
})
export class DashboardPropComponent {
  displayedColumns = ['id', 'name', 'progress', 'color'];
  p: number = 1;
  collection!: any[]; 
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor() {
   
  }

 
}

