import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ForgetPassWordComponent } from '../forget-pass-word/forget-pass-word.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private dialog: MatDialog) {


  }
  //boite de dialogue connexion
  openForgetPwDialog = () => this.dialog.open(ForgetPassWordComponent);

}
