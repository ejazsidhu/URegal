import { Component, OnInit, ViewChild } from '@angular/core';
import { PublicService } from '../public.service';
import { User } from 'src/app/model/user.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  @ViewChild("f") form: any;
  message: any = [];
  constructor(public publicService: PublicService, public router: Router, private authService: AuthService) {

    this.publicService.user = new User();
  }

  setAlertOff() {
    this.message = '';
  }
  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
  }

  onSubmit() {
    this.loading = true
    if (this.form.valid) {


      // console.log('obsubmit called', this.form.value)
      // if(this.form.value.Username=='aaram@gmail.com' && this.form.value.Password=="aaram")
      this.authService.login(this.form.value.Username, this.form.value.Password).subscribe(data => {
        localStorage.setItem('user', JSON.stringify(data));
        console.log('data', data)
        let token_type = data.token_type;
        let access_token = data.access_token;
        let tokenKey = "" + token_type + " " + access_token + "";
        localStorage.setItem('tokenKey', tokenKey);
        // console.log(data)
        this.router.navigateByUrl('/home');

        setTimeout(() => {
        this.loading = false
          
        }, 10000);


      }, error => {

        console.log('error', JSON.stringify(error._body.status));
        this.loading = false;
        let e = JSON.parse(error._body);
        this.message = e.error_description

        if (error._body.status == '0') {
          this.message = 'Unabal to connect to server';

        }
        if (error.status == '500') {
          this.message = 'Internal server error';

        }

        setTimeout(() => {
          this.message = '';
        }, 3000);

      });


    }


    // debugger

  }
}
