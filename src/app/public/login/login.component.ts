import { Component, OnInit, ViewChild } from '@angular/core';
import { PublicService } from '../public.service';
import { User } from 'src/app/model/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild("f") form: any;
  constructor(public publicService: PublicService) {

    this.publicService.user = new User();
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value)


    }
  }
}
