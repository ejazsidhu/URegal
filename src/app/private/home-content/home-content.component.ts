import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { PrivateService } from 'src/app/services/private.service';
// import {MenuItem} from 'primeng/api';

@Component({
    selector: 'app-home-content',
    templateUrl: './home-content.component.html',
    styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
    items: MenuItem[];
    userId: any;
    bounes = 0;
    todayEarn: any=0;
    totalEarn: any=0;
    rank: any;
    dashboardData: any=[];


    constructor(private pService: PrivateService) { }

    ngOnInit() {

        this.userId = JSON.parse(localStorage.getItem('user')).userId;

        this.getBounes(this.userId);
        this.getDashboardData(this.userId);
    
        this.items = [
            {
                label: 'File',
                items: [{
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        { label: 'Project' },
                        { label: 'Other' },
                    ]
                },
                { label: 'Open' },
                { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    { label: 'Delete', icon: 'pi pi-fw pi-trash' },
                    { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
                ]
            }
        ];
    }


    getBounes(userId) {
        this.pService.getBounes(userId).subscribe(data => {
            console.log("bounes", data);
            this.bounes = data.ResponseData.bonusBalance;
            this.todayEarn=data.ResponseData.todayEarn;
            this.totalEarn=data.ResponseData.totalEarn;
        }, error => { })
    }


    getDashboardData(userId){
        this.pService.getDashboardData(userId).subscribe(
            data=>{
                this.dashboardData=data.ResponseData;
                console.log(this.dashboardData)
            }
        )

    }

    

}
