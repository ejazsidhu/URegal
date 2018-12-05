import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { GeneralService } from './general.service';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class PrivateService {

  constructor(private http: Http, private gHttpService: GeneralService) { }

  getUsersTree( currentUserId) {
  
      let httpOption = this.gHttpService.headerCTJsontoken(localStorage.getItem('tokenKey'));
      const option = new RequestOptions({ headers: httpOption });
      var action = 'API/AccountAPI/getUserTreeLabel?currentUserId='+currentUserId;
      let url = this.gHttpService.urlBuilder(action);
      return this.http.get(url, option).map(
        response => response.json()
      );
    }

    getBounes( currentUserId) {
  
      let httpOption = this.gHttpService.headerCTJsontoken(localStorage.getItem('tokenKey'));
      const option = new RequestOptions({ headers: httpOption });
      var action = 'API/AccountAPI/getBonusBalance?currentUserId='+currentUserId;
      let url = this.gHttpService.urlBuilder(action);
      return this.http.get(url, option).map(
        response => response.json()
      );
    }

    getRank( currentUserId) {
  
      let httpOption = this.gHttpService.headerCTJsontoken(localStorage.getItem('tokenKey'));
      const option = new RequestOptions({ headers: httpOption });
      var action = 'API/AccountAPI/countRank?currentUserId='+currentUserId;
      let url = this.gHttpService.urlBuilder(action);
      return this.http.get(url, option).map(
        response => response.json()
      );
    }

    getUsersTreeRefrel(currentUserId) {  
      let httpOption = this.gHttpService.headerCTJsontoken(localStorage.getItem('tokenKey'));
      const option = new RequestOptions({ headers: httpOption });
      var action = 'API/AccountAPI/getOneLevelTree?currentUserId='+currentUserId;
      let url = this.gHttpService.urlBuilder(action);
      return this.http.get(url, option).map(
        response => response.json()
      );
    }

    getUsersTreeRefrelCompleteTree(currentUserId) {  
      let httpOption = this.gHttpService.headerCTJsontoken(localStorage.getItem('tokenKey'));
      const option = new RequestOptions({ headers: httpOption });
      var action = 'API/AccountAPI/getUserTree?currentUserId='+currentUserId;
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

    transferAmmount(userId,toId,amount,password){      
      let httpOption = this.gHttpService.headerCTJsontoken(localStorage.getItem('tokenKey'));
      const option = new RequestOptions({ headers: httpOption });
      var action = 'api/AccountAPI/amountTransfer?currentUserId='+userId+'&toId='+toId+'&amount='+amount+'&password='+password;
      let url = this.gHttpService.urlBuilder(action);
      return this.http.post(url,option).map(
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
