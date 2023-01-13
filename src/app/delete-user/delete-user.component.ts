import { Component } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})

export class DeleteUserComponent {

    ListUser: any = [];
    success: boolean = false;
    //selectedUser: UserComponent;
  
    constructor(private userService: UsersService) { }
  
    ngOnInit() {
      this.getUsers();
    }
  
    getUsers(): void {
      this.userService.get().subscribe((res) => {
        this.ListUser = res;
      });
    }
  
    delete(id: any) {
        this.userService.delete(id).subscribe(
            (res) => {
                this.success = true;
                this.getUsers();
            }
        )
    }

}
