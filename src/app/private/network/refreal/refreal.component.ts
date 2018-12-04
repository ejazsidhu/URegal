import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'ng2-org-chart';
import { PrivateService } from 'src/app/services/private.service';

@Component({
  selector: 'app-refreal',
  templateUrl: './refreal.component.html',
  styleUrls: ['./refreal.component.css']
})
export class RefrealComponent implements OnInit {
  userId: any;

  constructor(private privateService: PrivateService) { }
showTree=false;
addmember:boolean = false;
  ngOnInit() {

    this.userId = JSON.parse(localStorage.getItem('user')).userId;
    this.getTreeData(this.userId);
  
  }
  topEmployee: any ={}
  addmem(){
    this.addmember = true;
  }
  getTreeData(userId) {
    this.privateService.getUsersTreeRefrel(userId).subscribe(data => {
      this.topEmployee = {};
      this.topEmployee = data.ResponseData[0];
      this.showTree=true;

      console.log("tree refresl  data", this.topEmployee);

    }, error => { });
  }


}
