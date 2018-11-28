import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { GeneralService } from './general.service';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class PrivateService {

  constructor(private http: Http, private gHttpService: GeneralService) { }

  getUsersTree() {
  
      let httpOption = this.gHttpService.headerCTJsontoken(localStorage.getItem('tokenKey'));
      const option = new RequestOptions({ headers: httpOption });
      var action = 'API/AccountAPI/getUserTreeLabel';
      let url = this.gHttpService.urlBuilder(action);
      return this.http.get(url, option).map(
        response => response.json()
      );
    }

    getUsersTreeRefrel() {
  
      let httpOption = this.gHttpService.headerCTJsontoken(localStorage.getItem('tokenKey'));
      const option = new RequestOptions({ headers: httpOption });
      var action = 'API/AccountAPI/getUserTree';
      let url = this.gHttpService.urlBuilder(action);
      return this.http.get(url, option).map(
        response => response.json()
      );
    }

    addMember(member){      
      let httpOption = this.gHttpService.headerCTJsontoken(localStorage.getItem('tokenKey'));
      const option = new RequestOptions({ headers: httpOption });
      var action = 'API/AccountAPI/addUser';
      let url = this.gHttpService.urlBuilder(action);
      return this.http.post(url,member, option).map(
        response => response.json()
      );

    }

    getallUsers(){
      let httpOption = this.gHttpService.headerCTJsontoken(localStorage.getItem('tokenKey'));
      const option = new RequestOptions({ headers: httpOption });
      var action = 'API/AccountAPI/geAlltUsers';
      let url = this.gHttpService.urlBuilder(action);
      return this.http.get(url,option).map(
        response => response.json()
      );

    }
}
