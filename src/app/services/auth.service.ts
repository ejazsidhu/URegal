import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http ,Headers} from '@angular/http';
import { GeneralService } from './general.service';

import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:Http,private gHttpService:GeneralService) { }

  login(userName: string, password: string) {
      let usernames = userName;
      let passwords = password;
      let grant_type = "password";
      let clientName = "ngApp";
      let body = `username=${usernames}&password=${passwords}&grant_type=${grant_type}&clientName=${clientName}`;
      let headersnew = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      var action = "token"
       let url = this.gHttpService.urlBuilder(action);
      
      return this.http.post(url, body, { headers: headersnew }).map(
          response => response.json()
      );
  }
   
}
