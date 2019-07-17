import { Component, OnInit } from '@angular/core';
import { NgForm, EmailValidator } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isLoading = false;

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authSerivce.createUser(form.value.email, form.value.password)
  }

  constructor(private authSerivce: AuthService) { }

  ngOnInit() {
  }

}
