import { Component, OnInit, ViewChild } from '@angular/core';
import { Member } from 'src/app/model/member.model';
import { PrivateService } from 'src/app/services/private.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})


export class AddMemberComponent implements OnInit {

  public member: Member;
  public successAlert = false;
  public errorAlert = false;

  @ViewChild('f') form: any;
  users: any = [];
  message: any;
  loading: boolean=false;;

  constructor(private privateService: PrivateService) {
    this.member = new Member();
  }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.privateService.getallUsers().subscribe(data => {
      // console.log("user data", data)
      this.users = data.ResponseData;
    }, error => { });
  }
  setAlertOff() {
    this.successAlert = false;
    this.errorAlert = false;
  }
  onSubmit() {
    this.loading=true;
    if (this.form.valid) {
      console.log(this.form.value);
      var modal = JSON.stringify(this.form.value);

      this.privateService.addMember(modal).subscribe(data => {
        console.log(data);
        this.message = data.Message;

        // this.successAlert = true;
        if(data.Success){
          this.form.reset();
          this.successAlert=true
        }
        else{
          this.errorAlert=true
        }
        this.loading=false;

      }, error => {

        console.log('error',error)

      });
    }
  }

}
