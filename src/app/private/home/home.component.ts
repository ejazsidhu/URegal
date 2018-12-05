import { Component, OnInit } from '@angular/core';
import { PrivateService } from 'src/app/services/private.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rbalance: boolean = false;
  promotion:boolean = false;
  userId: any=0;
  rank: any='';
  rbalc() {
      this.rbalance = true;
  }
  propop() {
    this.promotion = true;
  }
  constructor(private privateService: PrivateService) { }

  ngOnInit() {


    this.userId = JSON.parse(localStorage.getItem('user')).userId;

    this.getRank(this.userId);
    this.propop();
  }

  getRank(userId) {

    this.privateService.getRank(userId).subscribe(data => {
      console.log(data);
      this.rank = data.ResponseData.rank;
    }, error => { })

  }

}
