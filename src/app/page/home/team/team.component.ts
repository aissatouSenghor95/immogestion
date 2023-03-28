import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../auth/login/login.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  constructor(private dialog: MatDialog) {


  }
  //boite de dialogue connexion
  openLoginDialog = () => this.dialog.open(LoginComponent);

}
