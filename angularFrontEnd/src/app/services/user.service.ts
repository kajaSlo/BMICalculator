import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) { }


  public usersBS = new BehaviorSubject<string>(null);

  getUsers(){
    return this.http.get('http://localhost:3000/users').pipe(map(res => res.json()))
  }

  postCalculateBMI(user){
    return this.http.post('http://localhost:3000/users/calculateBMI', user).pipe(map(res => res.json()))   
}

}
