import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visa-card',
  templateUrl: './visa-card.component.html',
  styleUrls: ['./visa-card.component.css']
})
export class VisaCardComponent implements OnInit {
 card1:boolean = false;
 card2:boolean = false;
 card3:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  cardperfect(){
    this.card1 = true;
  }
  cardgold(){
    this.card2 = true;
  }
  cardskrill(){
    this.card3 = true;
  }
}
