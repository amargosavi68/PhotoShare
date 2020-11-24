import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { User } from "../shared/user";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  'signupForm': FormGroup;
  'user': User;

  constructor(public dialogRef: MatDialogRef<SignupComponent>, private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm() {
    this.signupForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onRegister() {
    this.user = this.signupForm.value;
    console.log("User: ", this.user);
    this.signupForm.reset();
    this.dialogRef.close();
  }

}
