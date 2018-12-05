import { Component, OnInit } from '@angular/core';
import { PrivateService } from 'src/app/services/private.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  allTransactions: any = [];
  constructor(private privateService: PrivateService) { }

  ngOnInit() {
    this.getAllTransactions()
  }

  getAllTransactions() {
    this.privateService.getAlltransactions().subscribe(data => {
      this.allTransactions=data.ResponseData;
      console.log(data)

    }, error => {

    });
  }

}
