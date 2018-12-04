import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/primeng';
import { PrivateService } from 'src/app/services/private.service';
import { IEmployee } from 'ng2-org-chart';

@Component({
  selector: 'app-network-tree',
  templateUrl: './network-tree.component.html',
  styleUrls: ['./network-tree.component.css']
})
export class NetworkTreeComponent implements OnInit {
  files: TreeNode[];
  userId: any = 0;

  constructor(private privateSerive: PrivateService) { }

  //   topEmployee: IEmployee = {
  //     name: 'Janis Martin',
  //     designation: 'CEO',
  //     img: "assets/img/b.png",
  //     subordinates: [
  //         {
  //             name: 'Matthew Wikes',
  //             designation: 'VP',
  //             img: "assets/img/b.png",
  //             subordinates: [
  //                 // {
  //                 //     name: 'Tina Landry',
  //                 //     designation: 'Budget Analyst',
  //                 //     subordinates: []
  //                 // }

  //             ]
  //         },
  //         {
  //             name: 'Patricia Lyons',
  //             designation: 'VP',
  //             img: "assets/img/c.png",
  //             subordinates: [
  //                 {
  //                     name: 'Dylan Wilson',
  //                     designation: 'Web Manager',
  //                     img: "assets/img/b.png",
  //                     subordinates: []
  //                 },
  //                 {
  //                     name: 'Deb Curtis',
  //                     designation: 'Art Director',
  //                     img: "assets/img/c.png",
  //                     subordinates: [
  //                       {
  //                         name: 'Dylan Wilson',
  //                         designation: 'Web Manager',
  //                         img: "assets/img/b.png",
  //                         subordinates: []
  //                     },


  //                     ]
  //                 }
  //             ]
  //         },
  //         {
  //             name: 'Larry Phung',
  //             designation: 'VP',
  //             img: "./assets/img/a.png",
  //             subordinates: []
  //         }
  //     ]
  // };

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem('user')).userId;


    this.getTreeData(this.userId);
    this.files = [

    ];
  }


  getTreeData(userId) {
    this.privateSerive.getUsersTree(userId).subscribe(data => {
      console.log("tree data", data)
      this.files = data.ResponseData;
    }, error => { });
  }

}
