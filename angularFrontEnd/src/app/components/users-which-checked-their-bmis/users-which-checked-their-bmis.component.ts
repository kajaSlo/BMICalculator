import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-which-checked-their-bmis',
  templateUrl: './users-which-checked-their-bmis.component.html',
  styleUrls: ['./users-which-checked-their-bmis.component.css']
})
export class UsersWhichCheckedTheirBMIsComponent implements OnInit {

  users: any;
  
  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.userService.usersBS.next(users);
      this.users = this.userService.usersBS;
    })
  }
}
