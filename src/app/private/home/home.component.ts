import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rbalance: boolean = false;
  promotion:boolean = false;
  rbalc() {
      this.rbalance = true;
  }
  propop() {
    this.promotion = true;
}
  constructor() { }

  ngOnInit() {
    this.propop();
  }

}
