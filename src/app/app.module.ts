import { NgModule, resolveForwardRef } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { FindOneUserComponent } from './find-one-user/find-one-user.component';
import { FindAllUserComponent } from './find-all-user/find-all-user.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
/*import { Module } from '@nestjs/common';*/
import { TypeOrmModule } from '@nestjs/typeorm';

import * as express from "express";
import { User } from "./user/user.component"
import { createConnection, getMongoManager, getMongoRepository } from "typeorm";
const app = express();



/*var db = 


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'mongodb+srv://userdb:test1234@atlascluster.ojnmpfd.mongodb.net/?retryWrites=true&w=majority',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
  ],
})

*/


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserComponent,
    DeleteUserComponent,
    UpdateUserComponent,
    FindOneUserComponent,
    FindAllUserComponent,
    CreateuserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
