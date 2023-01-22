import { Component, OnInit } from '@angular/core';
import { ObjectId } from 'mongodb';
import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { UsersService } from '../service/users.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

@Entity()
export class User {
    @ObjectIdColumn()
    _id: ObjectId | undefined;

    @Column()
    firstname: string | undefined;

    @Column()
    lastname: string | undefined;


    constructor(
        firstname: string,
        lastname: string
    ) {
        this._id = new ObjectId();
        this.firstname = firstname;
        this.lastname = lastname;
    }
}



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
