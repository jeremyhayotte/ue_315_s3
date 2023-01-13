import { Component } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-find-all-user',
  templateUrl: './find-all-user.component.html',
  styleUrls: ['./find-all-user.component.scss']
})
export class FindAllUserComponent {
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
  
    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.userService.get()
        .subscribe(user => {
          //this.users.push(user);
        });
    }

}
