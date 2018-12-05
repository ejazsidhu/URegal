  import { Component, OnInit, ViewChild } from '@angular/core';
  import { PrivateService } from 'src/app/services/private.service';
  import { Member } from 'src/app/model/member.model';

  @Component({
    selector: 'app-wallet',
    templateUrl: './wallet.component.html',
    styleUrls: ['./wallet.component.css']
  })
  export class WalletComponent implements OnInit {
    users: any = [];
    member: Member;
    userId: any
    message: any;
    @ViewChild('f') form: any;
    successAlert: boolean = false;
    errorAlert: boolean = false;
    loading: boolean = false;
    bounes: any=0;

    constructor(private privateService: PrivateService) {
      this.member = new Member();
      this.userId = JSON.parse(localStorage.getItem('user')).userId;
    }

    ngOnInit() {
      this.getUsers();
    }

    getUsers() {
      this.privateService.getallUsers().subscribe(data => {
        // console.log("user data", data)
        this.users = data.ResponseData;
      }, error => { });
    }

    onSubmit(form) {
      if (form.valid) {
        console.log(form.value);
        this.privateService.transferAmmount(this.userId, form.value.Parent_id, form.value.BasicAmmount, form.value.Password).subscribe(data => {
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

        });
      }
    }

    getBounes(userId) {
      this.privateService.getBounes(userId).subscribe(data => {
          console.log("bounes", data);
          this.bounes = data.ResponseData.bonusBalance;
       
      }, error => { })
  }
  }
