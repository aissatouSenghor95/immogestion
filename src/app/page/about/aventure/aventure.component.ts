import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../home/auth/login/login.component';

@Component({
  selector: 'app-aventure',
  templateUrl: './aventure.component.html',
  styleUrls: ['./aventure.component.css']
})
export class AventureComponent {
  constructor(private dialog: MatDialog) {


  }
  //boite de dialogue connexion
  openLoginDialog = () => this.dialog.open(LoginComponent);


}
