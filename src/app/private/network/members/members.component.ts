import { Component, OnInit } from '@angular/core';
import { PrivateService } from 'src/app/services/private.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  users: any=[];

  constructor(private privateService:PrivateService) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.privateService.getallUsers().subscribe(data => {
      // console.log("user data", data)
      this.users = data.ResponseData;
    }, error => { });
  }

}
