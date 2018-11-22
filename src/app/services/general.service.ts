import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  public ip: string;
  public port: string;
  constructor(private http: HttpClient) {
    this.ip = 'https://tyen.coraborate.com';
    this.port = '';

    // this.ip = 'localhost';
    // this.port = 81;
  }

  public urlBuilder(url) {
    return this.ip + "/" + url;

  }
}
