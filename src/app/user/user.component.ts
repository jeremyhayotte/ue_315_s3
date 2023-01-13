import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit{
   
    users: UserComponent[] = [];
    ListUser: any = [];
    
  
    constructor(private userService: UsersService) { }
  
    ngOnInit() {
      this.getUsers();
    }
  
    getUsers(): void {
      this.userService.get().subscribe((res) => {
        this.ListUser = res;
      });
    }

}
