import { Component, OnInit, ViewChild } from '@angular/core';
import { PrivateService } from 'src/app/services/private.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rbalance: boolean = false;
  promotion: boolean = false;
  userId: any = 0;
  rank: any = '';
  @ViewChild('f') form: any;
  message: any = '';
  successAlert: boolean = false;
  errorAlert: boolean = false;
  loading: boolean = false;
  role: any;
  rbalc() {
    this.rbalance = true;
  }

  setAlertOff() {
    this.successAlert = false;
    this.errorAlert = false;
  }
  propop() {
    this.promotion = true;
  }
  constructor(private privateService: PrivateService) { }

  ngOnInit() {




    this.userId = JSON.parse(localStorage.getItem('user')).userId;
    this.role = JSON.parse(localStorage.getItem('user')).role;
    console.log(this.userId);
    this.getRank(this.userId);
    this.propop();
  }

  getRank(userId) {

    this.privateService.getRank(userId).subscribe(data => {
      console.log(data);
      this.rank = data.ResponseData.rank;
    }, error => { })

  }

  onSubmit(form) {
    console.log(form.value);
    this.privateService.rechargeBalance(this.userId, form.value.Amount).subscribe(data => {

      console.log(data);
      this.message = data.Message;

      // this.successAlert = true;
      if (data.Success) {
        this.form.reset();
        this.successAlert = true
      }
      else {
        this.errorAlert = true
      }
      this.loading = false;
    }, error => {

    })

  }

}
