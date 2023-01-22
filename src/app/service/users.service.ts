import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from "../user/user.component"

import { createConnection, getMongoManager, getMongoRepository } from "typeorm";

@Injectable({
  providedIn: 'root'
})

export class UsersService {
    private apiurl = 'http://192.168.33.10:3000/api';


  createConnection({
    type = "mongodb",
    url = process.env['MONGODB_CONNECTION'],
    useNewUrlParser = true,
    useUnifiedTopoly = true,
    synchronize = true,
    logging = true,
    entities: [User],
  })
    

  constructor(private http: HttpClient, private router:Router) { 
   }
    
   get() {
    return this.http.get<any>(`${this.apiurl}/users/`);
  }
  //GET all users
   getUsers() {
    return this.http.get<any[]>(this.apiurl);
  }

 // GET user by id
  getUserById(id: any) {
    return this.http.get<any>(`${this.apiurl}/user/${id}`);
  }
 
  // POST: add new user 
  addUser(user: any) {
    return this.http.post<any>(`${this.apiurl}/createUser`, user);
  }

  update(id: any, user: any){
    return this.http.put<any>(`${this.apiurl}/users/update/${id}`, user);
  }
  delete(id: any)
  {
    return this.http.delete<any>(`${this.apiurl}/users/delete/${id}`);
  }

}
