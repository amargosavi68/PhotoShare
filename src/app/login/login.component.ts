import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SignupComponent } from "../signup/signup.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {username: '', password: ''};

  constructor(public signupDialogRef: MatDialogRef<LoginComponent>, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openSignupForm() {
    this.signupDialogRef.close();
    this.dialog.open(SignupComponent, {width:"500px", height: "550px"});
  }

  onSubmit() {
    console.log("User: ", this.user);
    this.signupDialogRef.close();
  }

}
