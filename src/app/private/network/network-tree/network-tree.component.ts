import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/primeng';

@Component({
  selector: 'app-network-tree',
  templateUrl: './network-tree.component.html',
  styleUrls: ['./network-tree.component.css']
})
export class NetworkTreeComponent implements OnInit {
  files: TreeNode[];
  constructor() { }

  ngOnInit() {
    this.files = [
      {
        label: 'Folder 1',
        collapsedIcon: 'fa-folder',
        expandedIcon: 'fa-folder-open',
        children: [
          {
            label: 'child Folder 1',
            collapsedIcon: 'fa-folder',
            expandedIcon: 'fa-folder-open',
            children: [
              {
                label: 'File 123',
                icon: 'fa-file-o'
              }
            ]
          },
          {
            label: 'childe Folder 2',
            collapsedIcon: 'fa-folder',
            expandedIcon: 'fa-folder-open',

            children: [
              {
                label: 'File 12345',
                icon: 'fa-file-o'
              },
              {
                label: 'File 2',
                icon: 'fa-file-o'
              }
            ]
          }
          // ,
          // {
          //   label: 'File 1',
          //   icon: 'fa-file-o'
          // }
        ]
      },
      {
        label: 'Parent Folder 2',
        collapsedIcon: 'fa-folder',
        expandedIcon: 'fa-folder-open',
        children: [
          {
            label: 'child Folder 1',
            collapsedIcon: 'fa-folder',
            expandedIcon: 'fa-folder-open',
            children: [
              {
                label: 'File 123',
                icon: 'fa-file-o'
              }
            ]
          },
          {
            label: 'childe Folder 2',
            collapsedIcon: 'fa-folder',
            expandedIcon: 'fa-folder-open',

            children: [
              {
                label: 'File 12345',
                icon: 'fa-file-o'
              },
              {
                label: 'File 2',
                icon: 'fa-file-o'
              }
            ]
          }
          // ,
          // {
          //   label: 'File 1',
          //   icon: 'fa-file-o'
          // }
        ]
      }
    ];
  }

}
