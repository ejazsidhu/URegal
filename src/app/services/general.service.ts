import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  public ip: string;
  public port: string;
  constructor(private http: HttpClient) {
    this.ip = 'https://api.aaramgold.com';
    this.port = '';

    // this.ip = 'localhost';
    // this.port = 81;
  }

  public urlBuilder(url) {
    return this.ip + "/" + url;
  }

  headerCTJson() {
    let header = new Headers({ 'content-type': 'application/json' });
    return header;
  }
  headerCTJsontoken(token) {
    let header = new Headers({ 'content-type': 'application/json' });
    header.append("Authorization", token);
    return header;
  }

  headerTokenWithoutContenttype(token) {
    let header = new Headers({ "Authorization": token });
    // header.append("Authorization", token);
    return header;
  }
  headerCTUrlencodedtoken(token) {
    let header = new Headers({ 'content-type': 'application/x-www-form-urlencoded' });
    header.append("Authorization", token);
    return header;
  }
}
