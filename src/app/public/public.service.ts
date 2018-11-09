import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  user: User;
  constructor() {
    this.user=new User();
   }
}
