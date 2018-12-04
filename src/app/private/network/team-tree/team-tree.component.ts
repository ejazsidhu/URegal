import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/primeng';
import { PrivateService } from 'src/app/services/private.service';
@Component({
  selector: 'app-team-tree',
  templateUrl: './team-tree.component.html',
  styleUrls: ['./team-tree.component.css']
})
export class TeamTreeComponent implements OnInit {
  files: TreeNode[];
  userId: any;
  constructor(private privateSerive:PrivateService) { }

  ngOnInit() {

    this.userId = JSON.parse(localStorage.getItem('user')).userId;
    this.getTreeData(this.userId);
    this.files = [
      // {
      //   label: 'Folder 1',
      //   collapsedIcon: 'fa-folder',
      //   expandedIcon: 'fa-folder-open',
      //   children: [
      //     {
      //       label: 'child Folder 1',
      //       collapsedIcon: 'fa-folder',
      //       expandedIcon: 'fa-folder-open',
      //       children: [
      //         {
      //           label: 'File 123',
      //           icon: 'fa-file-o'
      //         }
      //       ]
      //     },
      //     {
      //       label: 'childe Folder 2',
      //       collapsedIcon: 'fa-folder',
      //       expandedIcon: 'fa-folder-open',

      //       children: [
      //         {
      //           label: 'File 12345',
      //           icon: 'fa-file-o'
      //         },
      //         {
      //           label: 'File 2',
      //           icon: 'fa-file-o'
      //         }
      //       ]
      //     }
      //     // ,
      //     // {
      //     //   label: 'File 1',
      //     //   icon: 'fa-file-o'
      //     // }
      //   ]
      // }
      
    ];
  }


  getTreeData(userId){
    this.privateSerive.getUsersTree(userId).subscribe(data=>{
      console.log("tree data",data)
      this.files=data.ResponseData;
    },error=>{});
  }

}
